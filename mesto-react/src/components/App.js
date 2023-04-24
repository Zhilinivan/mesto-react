import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ProfilePopup from "./ProfilePopup.js";
import ProfileAddCard from "./ProfileAddCard.js";
import ProfileAvatar from "./ProfileAvatar.js";
import PopupFullScreen from "./PopupFullScreen.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <ProfileAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ProfileAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupFullScreen onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
