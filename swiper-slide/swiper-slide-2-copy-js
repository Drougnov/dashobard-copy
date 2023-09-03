'use strict';

var swiperContainer = document.querySelector('.swiper');
var swiperCards = document.querySelectorAll('.swiper-card');
var no = document.getElementById('no');
var yes = document.getElementById('yes');

function initCards(card, index) {
    var newCards = document.querySelectorAll('.swiper-card:not(.removed)');

    newCards.forEach(function (card, index) {
        card.style.zIndex = swiperCards.length - index;
    });

    swiperContainer.classList.add('loaded');
}

initCards();

swiperCards.forEach(function (el) {
    const hammer = new Hammer(el);

    hammer.on('pan', function (event) {
        el.classList.add('moving');
    });

    hammer.on('pan', function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        swiperContainer.classList.toggle('swiper_yes', event.deltaX > 0);
        swiperContainer.classList.toggle('swiper_no', event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
    });

    hammer.on('panend', function (event) {
        el.classList.remove('moving');
        swiperContainer.classList.remove('swiper_yes');
        swiperContainer.classList.remove('swiper_no');

        var moveOutWidth = document.body.clientWidth;
        var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle('removed', !keep);

        if (keep) {
        event.target.style.transform = '';
        } else {
        var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
        var toX = event.deltaX > 0 ? endX : -endX;
        var endY = Math.abs(event.velocityY) * moveOutWidth;
        var toY = event.deltaY > 0 ? endY : -endY;
        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
        initCards();
        }
    });

    function togglePanning(enablePanning) {
        // Get the current options of the Hammer instance
        const options = hammer.get('pan').options;
    
        // Update the panning direction based on the condition
        options.enable = enablePanning;
    
        // Update the options of the Hammer instance
        hammer.get('pan').set(options);
    }

    // Example of disabling panning
    togglePanning(false);

    const progressBar = document.querySelector(".progress-bar");

    function setProgressBarWidth(width) {
        progressBar.style.width = width + "%";
    }

    // Start the progress animation
    setTimeout(function () {
        setProgressBarWidth(100);
        togglePanning(true)
    }, 2000);
});

function createButtonListener(yes) {
return function (event) {
    var cards = document.querySelectorAll('.swiper-card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (yes) {
    card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
    card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
};
}

var noListener = createButtonListener(false);
var yesListener = createButtonListener(true);

no.addEventListener('click', noListener);
yes.addEventListener('click', yesListener);