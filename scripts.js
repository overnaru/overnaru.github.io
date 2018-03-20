let step = 0,
    lastScrollTop = 0,
    timeout = false;
$(window).scroll(scrolled);

function scrolled(event) {
  let helmet = $('.c-helmet'),
      scroll = $(window).scrollTop();

  if (scroll > helmet.offset().top && !timeout) {
    if (scroll < helmet.offset().top + helmet.height()) {
      event.preventDefault();
      helmet.addClass('c-helmet--active');
      step += lastScrollTop < scroll ? +1 : -1;
    } else helmet.removeClass('c-helmet--active').addClass('c-helmet--past');

    timeout = true;
    setTimeout(() => timeout = false, 2000);
  }
  console.log(step);
  lastScrollTop = scroll;
}
































/*
const PERCENTAGE_BASE = 100;
var eBody = $(window);
var eHelmet = $('.c-helmet');
var eHelmetText = $('.c-helmet__text');

function getCurrentStep(relativeScroll, totalSteps) { for (step = 0; step <= PERCENTAGE_BASE; step += (PERCENTAGE_BASE / totalSteps)) if (step >= relativeScroll) return step || 0; }

function getRelativeScroll(element, parent) { return ((element.height() * PERCENTAGE_BASE) / (parent.scrollTop() - element.offset().top)); }

console.log('AAAAAAAAAAAAAAAA');
if (eBody.scrollTop() >= eHelmet.offset().top) {
  if (!eHelmet.hasClass('c-helmet--active')) eHelmet.addClass('c-helmet--active');
  else if(eBody.scrollTop() >= (eHelmet.offset().top + eHelmet.height())) eHelmet.removeClass('c-helmet--active').addClass('c-helmet--past');
  eHelmet.addClass('c-helmet--step-' + getCurrentStep(getRelativeScroll(eHelmet, eBody), 10));
  $('#pene').attr('src', './Media/helmet/helmet-0'+getCurrentStep(getRelativeScroll(eHelmet, eBody), 10)+'.png');
}
*/
