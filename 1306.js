let items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
    item.addEventListener('mousemove', (e)=>{
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;
        console.log(positionX, positionPx);

        let positionPy = event.y - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;

        
        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + 'deg');
    })
    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    })
})

function playVideo() {
    const img = document.querySelector('img');
    const video = document.getElementById('videoElement');
    img.style.display = 'none';
    video.style.display = 'block';
    video.play();
}