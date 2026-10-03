import { createPortal } from 'react-dom';


function Modal({ isOpen, onClose, children }){
    if (!isOpen) return null;

    return createPortal(
    // Parameter 1: Jo UI aapko render karni hai (JSX)
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    // Parameter 2: HTML ka wo element jahan ye bhejni hai
    document.getElementById('modal-root')
  );
  
}

export default Modal;