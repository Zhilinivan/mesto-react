import PopupWithForm from "./PopupWithForm.js";

function ProfileAddCard(props) {
  return (
    <PopupWithForm
      name={"addcard"}
      title={"Новое место"}
      submitName={"Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        type="text"
        required
        class="popup__input popup__input_title"
        minlength="2"
        maxlength="30"
        name="title"
        placeholder="Название"
        autocomplete="off"
      />
      <div class="popup__error title-error"></div>
      <input
        type="url"
        required
        class="popup__input popup__input_src"
        name="link"
        placeholder="Ссылка на картинку"
        autocomplete="off"
      />
      <div class="popup__error link-error"></div>
    </PopupWithForm>
  );
}

export default ProfileAddCard;
