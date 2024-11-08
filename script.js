window.addEventListener('load', function(){

    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(event) {
        counter++;
        if (counter === slideCount) {
            counter = 0;
            leftPosition = 0;
            slider.style.left = leftPosition + 'px';
        }
        else {
            leftPosition = `-${counter * slideWidth}`;
            slider.style.left = leftPosition + 'px';
        }
    });

    previous.addEventListener('click', function (event) {
        event.preventDefault();
        counter--;
        if (counter < 0){
            counter = slideCount - 1;
            leftPosition = `-${counter * slideWidth}`;
            slider.style.left = leftPosition + 'px';
        }
        else {
            leftPosition = `-${counter * slideWidth}`;
            slider.style.left = leftPosition + 'px';
        }
    });
});
