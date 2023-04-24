import PopupWithForm from "./PopupWithForm.js";

function ProfileAvatar(props) {
  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      submitName={"Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        type="url"
        required
        class="popup__input popup__input_avatarsrc"
        name="avatar"
        placeholder="Ссылка на аватар"
        autocomplete="off"
      />
      <div class="popup__error avatar-error"></div>
    </PopupWithForm>
  );
}

export default ProfileAvatar;
