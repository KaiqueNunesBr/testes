document.addEventListener("DOMContentLoaded", function () {
    var headerHeight = document.querySelector('header').offsetHeight;

    // Adiciona um evento de clique a todos os links no menu
    var menuLinks = document.querySelectorAll('header nav ul li a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            var targetId = link.getAttribute('href').substring(1); // Obtém o ID da seção alvo
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var targetOffset = targetElement.offsetTop - headerHeight; // Deduz a altura do cabeçalho
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth' // Rola suavemente para a seção
                });
            }
        });
    });
});