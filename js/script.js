const mario = document.querySelector('.mario');

const jump = () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const clouds = document.querySelector('.clouds');
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPostion = clouds.offsetLeft;
    


    if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation='none';
        clouds.style.left = `${cloudsPostion}px`

        mario.src = '/img/game-over.png';
        mario.style.width = '120px';
        mario.style.marginLeft = '10px';

        document.getElementById('start-again').style.display = 'block';

        document.getElementById('start-again').addEventListener('click', function(){
            window.location.reload();
        });

        clearInterval(loop);
    }

}, 10);



document.addEventListener('keydown', jump);