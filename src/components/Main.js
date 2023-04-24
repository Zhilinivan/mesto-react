import React, { useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setuserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setuserDescription(userInfo.about);
        setuserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt={"Аватарка"}
          />
          <button
            type={"button"}
            className="profile__avatar-button"
            aria-label={"изменить аватар"}
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-group">
            <h1 className="profile__name">{userName}</h1>
            <button
              type={"button"}
              className="profile__edit-button"
              aria-label={"редактирование профиля"}
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          type={"button"}
          className="profile__add-button"
          aria-label={"добавление карточки"}
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              likes={card.likes.length}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
