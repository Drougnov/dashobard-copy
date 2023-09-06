'use strict';

// dom elements
const swiperContainer = document.querySelector('.swiper');
const swiperCards = document.querySelectorAll('.swiper-card');
const progressBar = document.querySelector('.progress-bar');
const swiperButtons = document.querySelectorAll('.swiper--button');
const no = document.getElementById('no');
const yes = document.getElementById('yes');

// state variables
let hammer;
const totalCards = swiperCards.length;


function initCards(card, index) {
    var newCards = document.querySelectorAll('.swiper-card:not(.removed)');
    var totalCards = newCards.length;

    if(totalCards === 0){
        noCardsLeft();
    }

    newCards.forEach(function (card, index) {
        card.style.zIndex = totalCards - index;
    });

    swiperContainer.classList.add('loaded');
}

initCards();

swiperCards.forEach(function (el) {
    hammer = new Hammer(el);

    hammer.on('panstart', function (event) {
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
            if(event.target.classList.contains('removed')){
                removedCard();
            }
        }
        event.preventDefault();
    });
});

function togglePanning(enablePanning) {
    const options = hammer.get('pan').options;
    options.enable = enablePanning;
    hammer.get('pan').set(options);
}

function createButtonListener(yes) {
    return function (event) {
        var cards = document.querySelectorAll('.swiper-card:not(.removed)');
        var moveOutWidth = document.body.clientWidth * 1.5;

        if (!cards.length) return false;

        var card = cards[0];
        card.classList.add('removed');

        if (yes) {
            card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(-30deg)';
        } else {
            card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(30deg)';
        }
        
        initCards();

        event.preventDefault();
    };
}

yes.addEventListener('click', createButtonListener(true));
no.addEventListener('click', createButtonListener(false));

function toggleButtonVisiblity(buttonsEnabled){
    swiperButtons.forEach(btn=>{
        if(buttonsEnabled){
            btn.style.opacity = "1";
            btn.style.visibility = "visible";
            btn.style.pointerEvents = "initial";
        }else{
            btn.style.opacity = "0";
            btn.style.visibility = "hidden";
            btn.style.pointerEvents = "none";
        }
    })
}
toggleButtonVisiblity(true);

function setProgressBarWidth(width){
    progressBar.style.width = width + '%';
}
setProgressBarWidth(0);

function noCardsLeft(){
    toggleButtonVisiblity(false)
    setProgressBarWidth(0);
}

function removedCard(){
    togglePanning(true);
    setProgressBarWidth(100);
}