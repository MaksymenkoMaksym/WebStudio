(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);
    refs.modal.addEventListener('click', closeOnBackdrop)

    function openModal() {
        refs.modal.classList.remove("is-hidden");
        window.addEventListener('keydown', escapeOut)
    }

    function closeModal() {
        refs.modal.classList.add("is-hidden");
        window.removeEventListener('keydown', escapeOut)
    }

    function closeOnBackdrop(event) {
        if (event.currentTarget === event.target) {
            closeModal();
        }
    }

    function escapeOut(event) {
        console.log(event);
        if (event.code === 'Escape') {
            closeModal()
        }
    }
})();