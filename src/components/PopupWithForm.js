function PopupWithForm({ name, title, onClose, children, submitName, isOpen }) {
  return (
    <>
      <div className={`popup popup__${name} ${isOpen ? `popup_opened` : ""}`}>
        <div className={"popup__container"}>
          <button
            type={"button"}
            className={"popup__close-button"}
            aria-label={"закрыть форму"}
            onClick={onClose}
          ></button>
          <h2 className={"popup__name"}>{title}</h2>
          <form className={"popup__form popup__form_profile"} name={name}>
            {children}
            <button
              type={"submit"}
              className={"popup__save-button"}
              aria-label={"отправить форму"}
            >
              {submitName}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
