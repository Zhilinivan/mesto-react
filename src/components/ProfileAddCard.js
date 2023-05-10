import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function ProfileAddCard({ isOpen, onClose, onAddPlace }) {
  const refTitle = useRef();
  const refLink = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      title: refTitle.current.value,
      link: refLink.current.value,
    });
  }

  useEffect(() => {
    refTitle.current.value = "";
    refLink.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name={"addcard"}
      title={"Новое место"}
      submitName={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={refTitle}
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
        ref={refLink}
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
