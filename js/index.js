document.querySelector('a[href="#projetosAqui"]').addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('#projetosAqui');
    target.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até a div
});

document.querySelector('a[href="#socialAqui"]').addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('#socialAqui');
    target.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até a div
});

document.querySelector('a[href="#sobre"]').addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const target = document.querySelector('#sobre');
    target.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até a div
});