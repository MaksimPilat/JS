let volume;
let game_progress = JSON.parse(localStorage.getItem('game_progress')); 
let set_progress = document.getElementsByClassName('bottom'); 


//Плавное появление игрового поля и проверка состояния звука..

window.onload = function() {
    let container = document.getElementById('container');
    container.style.opacity = '100%';
    volume_load();
    if (screen.width < 1500)
        document.querySelector("body").style.zoom = "65%";
};


//Если ни один набор не начат..

if (game_progress === null)
{
    game_progress = [0, 0, 0, 0, 0, 0];
    localStorage.setItem('game_progress', JSON.stringify(game_progress));
}


//Если набор пройден..

for (let i = 0; i < 6; i++)
{
    if (game_progress[i] == -1)
    {
        document.getElementById(i).style.backgroundColor = "#066354";
    }
}


//Полоса прогресса на наборе..

for (let i = 0; i < game_progress.length; i++)
{
    if (game_progress[i] == -1)
    {
        set_progress[i].style.width = '100%';
    }
    else
    {
        set_progress[i].style.width = game_progress[i] * 10 + '%';
    }
}


//Загрузка уровня..

function set_loading(event)
{
    if (event.target.classList.contains('btn'))
    {
        let audio = Sound('../sounds/Tab 1.M4A');

        if (game_progress[Number(event.target.textContent)-1] == -1)
        {
            if(confirm("Набор пройдён. Хотите пройти заново?"))
            {
                game_progress[Number(event.target.textContent)-1] = 0;
                localStorage.setItem('game_progress', JSON.stringify(game_progress));
                localStorage.setItem('set', Number(event.target.textContent)-1);

                audio.addEventListener('ended', function(){ 
                    window.location.href = "../HTML/play.html";
                });
            }
        }
        else
        {
            localStorage.setItem('set', Number(event.target.textContent)-1);

            if(volume)
            {
                audio.addEventListener('ended', function(){ 
                    window.location.href = '../HTML/play.html';
                }); 
            }
            else
            {
                window.location.href = '../HTML/play.html';
            }           
        }
    }
}   
document.addEventListener('click', set_loading);



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
        if (volume)
        {
            document.querySelector(".volume").classList.add("fa-volume-up");
        }
        else
        {
            document.querySelector(".volume").classList.add("fa-volume-off");
        }
    }
}


//Кнопка звука..

document.querySelector(".volume").addEventListener("click", function(){
    if (volume)
    {
        document.querySelector(".volume").classList.remove("fa-volume-up");
        document.querySelector(".volume").classList.add("fa-volume-off");
        volume = false;
        localStorage.setItem('volume', JSON.stringify(volume));
    }
    else
    {
        volume = true;
        Sound('../sounds/Button 6.M4A');
        document.querySelector(".volume").classList.remove("fa-volume-off");
        document.querySelector(".volume").classList.add("fa-volume-up");
        localStorage.setItem('volume', JSON.stringify(volume));
    }
})


//Кнопка "как играть"..

document.querySelector('.fa-question').addEventListener("click", function(){
   
    Sound_ref('../sounds/Button 6.M4A', '../HTML/how_to_play.html');
})


//Кнопка "магазин"..

document.querySelector('.fa-cart-plus').addEventListener("click", function(){
    
    Sound_ref('../sounds/Button 6.M4A', '../HTML/shop.html');
})


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


//Звук без перехода на другую страницу..

function Sound(sound)
{
    if (volume)
    {
        let audio = new Audio(); 
        audio.src = sound; 
        audio.autoplay = true; 
        return audio;   
    }
}


