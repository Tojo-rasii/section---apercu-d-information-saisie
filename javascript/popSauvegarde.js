        const popups = document.querySelector(".popup-save");
        const closePopups = document.querySelector(".close-popup");

        // Écouteurs pour afficher et fermer le popup
            document.querySelector(".bg-save").addEventListener("click", () => {
     document.body.classList.add('not-scroll');
     popups.classList.remove("hidden");
            });

        closePopups.addEventListener("click", () => {
     document.body.classList.remove('not-scroll');
            popups.classList.add("hidden");
        });
        
         // Optionnel : Fermer le popup en cliquant en dehors
 popups.addEventListener('click', (e) => {
    if (e.target === popups) {
    document.body.classList.remove('not-scroll');
    popups.classList.add('hidden');
    }

});

