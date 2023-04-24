import React from "react";

function Card({ card, likes, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__bottom">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-group">
          <button
            type={"button"}
            className="card__like-button"
            aria-label={"поставить лайк"}
          ></button>
          <p className="card__likes">{likes}</p>
        </div>
        <button
          type={"button"}
          className="card__delete-button"
          aria-label={"удалить карточку"}
        ></button>
      </div>
    </li>
  );
}

export default Card;
