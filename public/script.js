$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
        createConfetti();
    });

    btn_open.click(function () {
        open();
        createConfetti();
    });

    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

    // Función para crear efecto de confeti
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = $('<div class="confetti"></div>');
                confetti.css({
                    position: 'fixed',
                    left: Math.random() * 100 + '%',
                    top: '-10px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: getRandomColor(),
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 1000,
                    animation: 'confettiFall 3s linear forwards'
                });

                $('body').append(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 50);
        }
    }

    function getRandomColor() {
        const colors = ['#ff6b9d', '#c44ea0', '#667eea', '#764ba2', '#fecfef', '#ff9a9e'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Agregar animación CSS para el confeti
    if (!$('style[data-confetti]').length) {
        $('<style data-confetti>@keyframes confettiFall { to { transform: translateY(100vh) rotate(360deg); opacity: 0; } }</style>').appendTo('head');
    }

});