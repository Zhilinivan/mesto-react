function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup__${props.name} ${
          props.isOpen ? `popup_opened` : ""
        }`}
      >
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button"
            aria-label="закрыть форму"
            onClick={props.onClose}
          ></button>
          <h2 className="popup__name">{props.title}</h2>
          <form
            className="popup__form popup__form_profile"
            name={props.name}
            novalidate
          >
            {props.children}
            <button
              type="submit"
              className="popup__save-button"
              aria-label="отправить форму"
            >
              {props.submitName}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
