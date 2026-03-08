import Button from './Button';

function Modal({ onClick, title, content, showCloseButton, toggleModalOpen }) {
  return (
    <div className="modal" onClick={onClick}>
      {showCloseButton && (
        <Button
          classList={'closeButton'}
          onClick={() => toggleModalOpen(false)}
        >
          &times;
        </Button>
      )}
      <h2 className="modalHeader">{title}</h2>
      <div className="modalBody">{content}</div>
      <div className="modalFooter">
        <Button
          classList={'secondaryButton'}
          onClick={() => toggleModalOpen(false)}
        >
          Cancel
        </Button>
        <Button
          classList={'primaryButton'}
          onClick={() => {
            alert('Ok');
            toggleModalOpen(false);
          }}
        >
          Yes, Continue
        </Button>
      </div>
    </div>
  );
}

export default Modal;
