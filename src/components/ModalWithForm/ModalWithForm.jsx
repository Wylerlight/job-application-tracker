/* eslint-disable react/prop-types */
import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
  // eslint-disable-next-line no-unused-vars
  isOpen,
}) {
  return (
    <section className={`modal modal_type_${name}`} onClick={onClose}>
      <div className="modal__container ">
        <button className="modal__exit" type="button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form " id="" onSubmit={onSubmit}>
          <fieldset className="modal__fieldset">{children}</fieldset>
          <span className="modal__error"></span>
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
