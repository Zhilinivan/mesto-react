import PopupWithForm from "./PopupWithForm.js";

function ProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={"profile"}
      title={"Редактировать профиль"}
      submitName={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type={"text"}
        required
        className="popup__input popup__input_name"
        name={"name"}
        placeholder={"Имя"}
        minLength={"2"}
        maxLength={"40"}
        autoComplete={"off"}
      />
      <p className="popup__error name-error"></p>
      <input
        type={"text"}
        required
        className="popup__input popup__input_about"
        name={"about"}
        placeholder={"О себе"}
        minLength={"2"}
        maxLength={"200"}
        autoComplete={"off"}
      />
      <p className="popup__error about-error"></p>
    </PopupWithForm>
  );
}

export default ProfilePopup;
