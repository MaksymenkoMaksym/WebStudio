(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();


const filterBtns = document.querySelector('.filter.list');

const productItems = document.querySelectorAll('[data-value]');

console.log(productItems);
filterBtns.addEventListener('click', onClickFilter)


function onClickFilter(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }

    productItems.forEach(v => {
        v.style.display = '';
    })

    if (event.target.dataset.filter === 'all') {
        return
    }

    const result = [...productItems].filter(v => {
        return v.dataset.value !== event.target.dataset.filter
    })

    result.forEach(v => {
        v.style.display = 'none';
    })


}
