import PopupWithForm from "./PopupWithForm.js";

function ProfileAddCard({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={"addcard"}
      title={"Новое место"}
      submitName={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type={"text"}
        required
        className="popup__input popup__input_title"
        name={"title"}
        placeholder={"Название"}
        minLength={"2"}
        maxLength={"30"}
        autoComplete={"off"}
      />
      <p className="popup__error title-error"></p>
      <input
        type={"url"}
        required
        className="popup__input popup__input_src"
        name={"link"}
        placeholder={"Ссылка на картинку"}
        autoComplete={"off"}
      />
      <p className={"popup__error link-error"}></p>
    </PopupWithForm>
  );
}

export default ProfileAddCard;
