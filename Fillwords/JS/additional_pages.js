let volume;


//Плавное появление и проверка состояния звука..

window.onload = function() {
    let container = document.getElementById('container');
    container.style.opacity = '100%';
    volume_load();
    if (screen.width < 1500)
        document.querySelector("body").style.zoom = "65%";
};


//Отслеживание состояния звука..

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


//Кнопка назад..

document.getElementById('back').addEventListener("click", function(){

    Sound_ref('../sounds/Button 6.M4A');
})


//Звук с переходом на предыдущую страницу..

function Sound_ref(sound)
{
    if (volume)
    {
        var audio = new Audio(); 
        audio.src = sound; 
        audio.autoplay = true;
        audio.addEventListener('ended', function(){ 
            history.back();
        });
    }
    else
    {
        history.back();
    }
}









