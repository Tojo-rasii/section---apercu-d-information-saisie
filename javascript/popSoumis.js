   
 // Sélection des éléments
 const btnGreen = document.querySelector('.btn-green');
 const popup = document.querySelector('.popup');
 const closePopup = document.getElementById('close-popups');

 // Afficher le popup lors du clic sur le bouton
 btnGreen.addEventListener('click', () => {
     popup.classList.remove('popup-hidden');

     document.body.classList.add('not-scroll');
 });

 // Cacher le popup lors du clic sur le bouton "Fermer"
 closePopup.addEventListener('click', () => {
     document.body.classList.remove('not-scroll');
     popup.classList.add('popup-hidden');
 });

 // Optionnel : Fermer le popup en cliquant en dehors
 popup.addEventListener('click', (e) => {
     if (e.target === popup) {
     document.body.classList.remove('not-scroll');
     popup.classList.add('popup-hidden');
     }
 });