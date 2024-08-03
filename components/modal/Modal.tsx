import React, { useCallback, useEffect, useRef } from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const onModalHide = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.classList.add("dialog-exit-active");
      setTimeout(() => {
        modalRef.current?.close();
        setIsOpen(false);
      }, 300);
    }
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        onModalHide();
      }
    };

    if (modalRef.current) {
      modalRef.current.addEventListener("click", handleOutsideClick);
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener("click", handleOutsideClick);
      }
    };
  }, [isOpen, onModalHide]);

  return (
    <dialog
      ref={modalRef}
      className={`dialog ${
        isOpen ? "dialog-enter-active relative px-3 py-5" : "dialog-enter"
      }`}
      onClose={onModalHide}
    >
      <div className="absolute top-2 right-2">
        <button
          onClick={onModalHide}
          className="bg-orange-600 shadow hover:shadow-md p-1 rounded h-6 w-6 flex justify-center items-center"
        >
          X
        </button>
      </div>
      <div className="p-2">
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;



// const onModalHide = useCallback(() => {
  //   if (modalRef?.current) {
  //     modalRef?.current.classList.add("dialog-exit-active");
  //     setTimeout(() => {
  //       modalRef.current?.close();
  //       setIsOpen(false);
  //     }, 300);
  //   }
  // }, [modalRef]);

  // useEffect(() => {
  //   if (modalRef?.current) {
  //     setIsOpen(true);
  //     modalRef?.current?.showModal();
  //   }

  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (modalRef?.current && event.target === modalRef?.current) {
  //       onModalHide();
  //     }
  //   };

  //   if (modalRef?.current) {
  //     modalRef?.current.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     if (modalRef?.current) {
  //       modalRef?.current?.removeEventListener("click", handleOutsideClick);
  //     }
  //   };
  // }, [onModalHide]);