const toggles = document.querySelectorAll('.btn');

toggles.forEach(toggle => {
    console.log('AQUI')
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})