'use strict';

var swiperContainer = document.querySelector('.swiper');
var swiperCards = document.querySelectorAll('.swiper-card');
const swiperButtons = document.querySelectorAll('.swiper--button');
var no = document.getElementById('no');
var yes = document.getElementById('yes');
let buttonsEnabled = false;

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

    el.addEventListener('transitionend', () => {
        togglePanningOnTwoSeconds();
    });

    function togglePanning(enablePanning) {
        const options = hammer.get('pan').options;
        options.enable = enablePanning;
        hammer.get('pan').set(options);
    }
    
    function togglePanningOnTwoSeconds(){
        togglePanning(false);
        buttonsEnabled = false;
        toggleButtonVisiblity(buttonsEnabled);
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        progressBar.offsetWidth;
        progressBar.style.transition = 'width 2s';
        progressBar.style.width = '100%';
        setTimeout(()=>{
            buttonsEnabled = true;
            toggleButtonVisiblity(buttonsEnabled);
            togglePanning(true);
        },2000)
    }

    togglePanningOnTwoSeconds();
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