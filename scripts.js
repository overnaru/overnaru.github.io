const PERCENTAGE_BASE = 100;
let eBody = $('body'),
    eHelmet = $('c-helmet');
    eHelmetText = $('c-helmet__text');

eBody.scroll((scrollEvent) => {
  if (eBody.scrollTop() >= eHelmet.offset().top()) {
    if (!eHelmet.hasClass('c-helmet--active')) eHelmet.addClass('c-helmet--active');
    else if(eBody.scrollTop() >= (eHelmet.offset().top() + eHelmet.height())) eHelmet.removeClass('c-helmet--active').addClass('c-helmet--past');
    eHelmet.addClass('c-helmet--step-' + getCurrentStep(getRelativeScroll(eHelmet, eBody), 5));
  }
});

function getCurrentStep(relativeScroll, totalSteps) { for (step = 0; step <= PERCENTAGE_BASE; step += (PERCENTAGE_BASE / totalSteps)) if (step >= relativeScroll) return step; }

function getRelativeScroll(element, parent) { return ((element.height() * PERCENTAGE_BASE) / (parent.scrollTop() - element.offset().top)); }
