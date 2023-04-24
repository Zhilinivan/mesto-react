import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="card__bottom">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-group">
          <button
            type="button"
            className="card__like-button"
            aria-label="поставить лайк"
          ></button>
          <p class="card__likes">{props.likes}</p>
        </div>
        <button
          type="button"
          className="card__delete-button"
          aria-label="удалить карточку"
        ></button>
      </div>
    </li>
  );
}

export default Card;
