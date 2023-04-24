import PopupWithForm from "./PopupWithForm.js";

function ProfilePopup(props) {
  return (
    <PopupWithForm
      name={"profile"}
      title={"Редактировать профиль"}
      submitName={"Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        type="text"
        required
        className="popup__input popup__input_name"
        minlength="2"
        maxlength="40"
        name="name"
        placeholder="Имя"
        autocomplete="off"
      />
      <div class="popup__error name-error"></div>
      <input
        type="text"
        required
        className="popup__input popup__input_about"
        minlength="2"
        maxlength="200"
        name="about"
        placeholder="О себе"
        autocomplete="off"
      />
      <div class="popup__error about-error"></div>
    </PopupWithForm>
  );
}

export default ProfilePopup;
