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
    const saveBtn = document.querySelector(".save-btn");
    const toast = document.getElementById("toast");

    saveBtn.addEventListener("click", () => {
        // Afficher le toast
        toast.classList.add("show");

        // Masquer le popup
        document.querySelector(".popup-save").classList.add("hidden");

        // Masquer le toast après 3 secondes
        setTimeout(() => {
            toast.classList.remove("show");
        }, 1000);
    });
