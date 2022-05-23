function handleMouseEnter(){
   this.classList.add('s-card--hovered');
   document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListnersToCards () {
    const cardElements = document.getElementsByClassName('s-card');
    for (let index = 0; index < cardElements.length; index ++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListnersToCards, false);

function selectCarouselItem(selectdButtomElement) {
    const itemSelecionado  = selectdButtomElement.id;
    const carossel = document.querySelector('.s-card-carousel');
    const transform = carossel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(itemSelecionado) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carossel.style.transform = newTransform;

    const activeButtomElement = document.querySelector('.s-controller__button--active');
    activeButtomElement.classList.remove('s-controller__button--active');
    selectdButtomElement.classList.add('s-controller__button--active');
}