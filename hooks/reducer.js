export const form_initialState = {
  name: "",
  age: 0,
  address: "",
  details: {
    email: "",
    phone: "",
  },
  skills: [],
};

export const ACTION_TYPES = {
  AGE_INCREASE: "age_increase",
  AGE_DECREASE: "age_decrease",
  FORM_STATE: "form_state",
  ADD_SKILL: "add_skill",
  REMOVE_SKILL: "remove_skill",
};

export function age_reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.FORM_STATE:
      if (action.field.includes(".")) {
        const nestedFields = action.field.split(".");
        return {
          ...state,
          [nestedFields[0]]: {
            ...state[nestedFields[0]],
            [nestedFields[1]]: action.value,
          },
        };
      } else {
        return {
          ...state,
          [action.field]: action.value,
        };
      }

    case ACTION_TYPES.ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };

    case ACTION_TYPES.REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((skill) => skill !== action.skill),
      };

    case ACTION_TYPES.RESET_FORM:
      return form_initialState;

    default:
      return state;
  }
}
