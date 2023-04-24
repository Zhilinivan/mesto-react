function PopupFullScreen(props) {
  return (
    <div
      className={`popup popup_fullscreen" ${props.card ? "popup_opened" : ""}`}
    >
      <div className="popup__container-fullscreen">
        <button
          type="button"
          className="popup__close-button"
          aria-label="закрыть попап"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image-fullscreen"
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
        />
        <p className="popup__title-fullscreen">
          {props.card ? props.card.name : ""}
        </p>
      </div>
    </div>
  );
}
export default PopupFullScreen;
