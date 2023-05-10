import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function ProfileAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const ref = useRef();

  function handleAvatarSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      submitName={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAvatarSubmit}
    >
      <input
        ref={ref}
        type={"url"}
        required
        className="popup__input popup__input_avatarsrc"
        name={"avatar"}
        placeholder={"Ссылка на аватар"}
        autoComplete={"off"}
      />
      <p className="popup__error avatar-error"></p>
    </PopupWithForm>
  );
}

export default ProfileAvatar;
