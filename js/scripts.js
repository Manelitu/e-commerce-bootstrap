$(document).ready(function() {

    // Progress bar
    const containerA = document.querySelector("#circleA");
    const circleA = new ProgressBar.Circle(containerA, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: { color: '#65DAF9'},
        step: (state, circle) => {
            circle.path.setAttribute('stroke', state.color);

            const value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    const containerB = document.querySelector("#circleB");
    const circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'},
        to: { color: '#65DAF9'},
        step: (state, circle) => {
            circle.path.setAttribute('stroke', state.color);

            const value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    const containerC = document.querySelector("#circleC");
    const circleC = new ProgressBar.Circle(containerC, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1200,
        from: { color: '#AAA'},
        to: { color: '#65DAF9'},
        step: (state, circle) => {
            circle.path.setAttribute('stroke', state.color);

            const value = Math.round(circle.value() * 28);

            circle.setText(value);
        }
    });

    const containerD = document.querySelector("#circleD");
    const circleD = new ProgressBar.Circle(containerD, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA'},
        to: { color: '#65DAF9'},
        step: (state, circle) => {
            circle.path.setAttribute('stroke', state.color);

            const value = Math.round(circle.value() * 942);

            circle.setText(value);
        }
    });

    // Iniciando o loader quando o usuário chegar no elemento

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(event) {
        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop === 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

        //Parallax

        setTimeout(() => {
            $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
        }, 250)

});