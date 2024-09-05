import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div className="overlay" aria-hidden="true" />
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div
          ref={modalRef}
          className="modal"
        >
          <div className="h-full p-4">
            <h2 className="text-2xl font-bold">Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
