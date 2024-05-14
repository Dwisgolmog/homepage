window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('#fade');
    elements.forEach(function (element) {
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight) {
            element.style.opacity = '1';
            element.style.transition = 'opacity 3s';
        } else {
            element.style.opacity = '0';
        }
    });
});