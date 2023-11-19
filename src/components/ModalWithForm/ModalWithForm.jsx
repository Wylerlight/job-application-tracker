import './ModalWithForm.css';

export default function ModalWithForm({
  children,
  title,
  name,
  buttonText,
  buttonRedirectText,
  redirect,
  onClose,
  onSubmit,
  isOpen,
}) {
  return (
    <section className={`modal modal_type_${name}`} onClick={onClose}>
      <div className="modal__container ">
        <button className="modal__exit" type="button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <form
          className="modal__form "
          id=""
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          <fieldset className="modal__fieldset">{children}</fieldset>
          <span className="modal__error"></span>
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          <button type="button" className="modal__redirect" onClick={redirect}>
            {buttonRedirectText}
          </button>
        </form>
      </div>
    </section>
  );
}
