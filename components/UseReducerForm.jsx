import React, { useState, useReducer, useCallback } from "react";
import { age_reducer, form_initialState, ACTION_TYPES } from "../hooks/reducer";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import Modal from "./modal/Modal";

const Form = () => {
  const [state, dispatch] = useReducer(age_reducer, form_initialState);
  const [newSkill, setNewSkill] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = useCallback(() => {
    console.log(state);
    toast.success("Form Submitted");
    setIsOpen(true);
    // Dispatch action to reset form state
    // dispatch({ type: ACTION_TYPES.RESET_FORM });
  }, [state]);

  const handleChange = useCallback((field, value) => {
    dispatch({ type: ACTION_TYPES.FORM_STATE, field, value });
  }, []);

  const handleAddSkill = useCallback(() => {
    if (newSkill.trim() !== "") {
      dispatch({ type: ACTION_TYPES.ADD_SKILL, skill: newSkill });
      setNewSkill("");
    }
  }, [newSkill]);

  const handleRemoveSkill = useCallback((skill) => {
    dispatch({ type: ACTION_TYPES.REMOVE_SKILL, skill });
  }, []);

  return (
    <div>
      <h4 className="text-center my-6">Use Reducer Form Data</h4>
      <div className="flex flex-col gap-3 w-1/2 mx-auto">
        <InputField
          className="input_primary"
          type="text"
          value={state.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name"
        />

        <InputField
          className="input_primary"
          type="number"
          value={state.age}
          onChange={(e) => handleChange("age", e.target.valueAsNumber)}
          placeholder="Age"
        />

        <InputField
          className="input_primary"
          type="text"
          value={state.address}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Address"
        />

        <InputField
          className="input_primary"
          type="text"
          value={state.details.email}
          onChange={(e) => handleChange("details.email", e.target.value)}
          placeholder="Email"
        />

        <InputField
          className="input_primary"
          type="text"
          value={state.details.phone}
          onChange={(e) => handleChange("details.phone", e.target.value)}
          placeholder="Phone"
        />

        <div className="flex gap-2">
          <div>
            <button onClick={handleSubmit} className="btn_primary w-fit">
              Submit
            </button>
            <button onClick={() => dispatch({ type: ACTION_TYPES.RESET_FORM })} className="btn_primary bg-red-600 w-fit">
              reset
            </button>
          </div>
          <div className="flex gap-3">
            <div>
              <InputField
                className="input_primary"
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add Skill"
              />
              <button
                className="btn_secondary"
                type="button"
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
            </div>
            <SkillList
              skills={state.skills}
              onRemoveSkill={handleRemoveSkill}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
       <div className="flex flex-col gap-3 p-3 text-gray-900">
        <h4>
          <span className="font-bold">{state.name}</span> is <span className="font-bold">{state.age}</span> years old.
        </h4>
        <p>{state.address}</p>
        <p>{state.details.email}</p>
        <p>{state.details.phone}</p>
        <p>{state.skills.join(", ")}</p>
       </div>
      </Modal>
    </div>
  );
};

const InputField = ({ className, type, value, onChange, placeholder }) => (
  <input
    className={className}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

const SkillList = ({ skills, onRemoveSkill }) => (
  <ul className="flex flex-col gap-1">
    {skills.map((skill, index) => (
      <li key={index} className="flex gap-2 items-center w-fit">
        <span>{index + 1}.</span>
        {skill}
        <button
          className="text-orange-500"
          onClick={() => onRemoveSkill(skill)}
        >
          <FaTrash className="w-3 h-3" />
        </button>
      </li>
    ))}
  </ul>
);

export default Form;
