let prev = document.getElementById('prev')
let next = document.getElementById('next')
let carousel = document.querySelector('.carousel')
let list = document.querySelector('.carousel .list')
let thumbnail = document.querySelector('.carousel .thumbnail')
let thumbnailImage =document.querySelectorAll('.carousel .thumbnail .t-image')
let carouselImage =document.querySelectorAll('.carousel .list .item .image')

next.onclick = function() {
    showSlider('next')
}

prev.onclick = function() {
    hideSlider('prev')
}

let timeRunning = 2000;
let runTimeOut
const showSlider = (type)=>{
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')
    
    if (type === 'next') {
        list.appendChild(itemSlider[0])
        thumbnail.appendChild(itemThumbnail[0])
        carousel.classList.add('next')
}
clearTimeout(runTimeOut);
runTimeOut = setTimeout(() => {
    carousel.classList.remove('next')
}, timeRunning)

}

const hideSlider = (type)=>{
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')
    
    if (type === 'prev') {
        list.prepend(itemSlider[itemSlider.length - 1])
        thumbnail.prepend(itemThumbnail[itemThumbnail.length - 1])
        carousel.classList.add('prev')
}
clearTimeout(runTimeOut);
runTimeOut = setTimeout(() => {
    carousel.classList.remove('prev')
}, timeRunning)

}


