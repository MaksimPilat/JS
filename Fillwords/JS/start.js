let checkSize = true; //Текст в кнопке увеличился или уменьшился..
let checkButton = true; //Обновление таймера для анимации текста в кнопке после наведения на кнопку.. 
let timer; 
let volume;


//Отслеживание состояния кнопки звука..

function volume_load()
{
    if (JSON.parse(localStorage.getItem('volume') == null))
    {
        volume = true;
        localStorage.setItem('volume', JSON.stringify(volume));
        document.querySelector(".volume").classList.add("fa-volume-up");
    }
    else
    {
        volume = JSON.parse(localStorage.getItem('volume'));
    }
}


//Плавное появление и проверка состояния звука..

window.onload = function() {
    let container = document.getElementById('container');
    container.style.opacity = '100%';
    volume_load();
    if (screen.width < 1500)
        document.querySelector("body").style.zoom = "65%";
};


//Над кнопкой..

document.querySelector('button').addEventListener("mouseover", function(){
    document.querySelector('body').style = "background-color: #0b6f5e";
    document.querySelector('button').style = "background-color: #118975; width: 250px; height: 250px; margin-top: 27%; font-size: 28px; color: #bbded8";
    clearInterval(timer);
    checkButton = true;
})


//За кнопкой..

document.addEventListener("mouseover", function(event){
    if (!event.target.classList.contains('button'))
    {
        document.querySelector('body').style.backgroundColor = "#045346";
        document.querySelector('button').style = "background-color: #045346; width: 300px; height: 300px; margin-top: 25%; font-size: 30px; color: #edcc6c";
    }
});


//Мигание кнопки..

document.addEventListener("mouseover", function(event){
    if (!event.target.classList.contains('button') && checkButton)
    {
        checkButton = false;
        timer = setInterval(function(){
            if (checkSize)
            {
                document.querySelector('button').style = "font-size: 25px; color: #bbded8";                             
                checkSize = false;
            }
            else 
            {
                document.querySelector('button').style = "font-size: 40px; color: #edcc6c";                             
                checkSize = true;
            }
        }, 500);
    }
});


//Клик по кнопке..

document.querySelector('button').addEventListener("click", function(){

    Sound_ref('./sounds/Button 6.M4A', './HTML/menu.html');

});


//Звук с переходом на другую страницу..

function Sound_ref(sound, ref)
{
    if (volume)
    {
        var audio = new Audio(); 
        audio.src = sound; 
        audio.autoplay = true;
        audio.addEventListener('ended', function(){ 
            window.location.href = ref;
        });
    }
    else
    {
        window.location.href = ref;
    }
}














