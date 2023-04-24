import PopupWithForm from "./PopupWithForm.js";

function ProfileAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      submitName={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type={"url"}
        required
        className={"popup__input popup__input_avatarsrc"}
        name={"avatar"}
        placeholder={"Ссылка на аватар"}
        autoComplete={"off"}
      />
      <p className={"popup__error avatar-error"}></p>
    </PopupWithForm>
  );
}

export default ProfileAvatar;
