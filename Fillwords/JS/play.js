
//Уровни.. 
 
const arr_of_levels_1 = [];

arr_of_levels_1[0] = {
    letters: [ ["О","Л","Г"], ["П","М","А"], ["С","О","К"] ],
    positions: [[[2, 0], [2, 1], [2, 2]], [[1, 1], [1, 2], [0, 2]], [[1, 0], [0, 0], [0, 1]]]
}
arr_of_levels_1[1] = {
    letters: [ ["В","О","С"], ["И","Р","А"], ["Л","К","А"] ],
    positions: [[[1, 1], [0, 1], [0, 2], [1, 2]], [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]]
}
arr_of_levels_1[2] = {
    letters: [ ["Б", "Е", "М", "Г"], ["Д", "Г", "Ё", "О"], ["И", "В", "Д", "Р"], ["Л", "О", "Т", "С"] ],
    positions: [[[0, 0], [0, 1], [1, 1]], [[0, 2], [1, 2], [2, 2]], [[2, 3], [1, 3], [0, 3]], [[3, 3], [3, 2], [3, 1], [3, 0]], [[2, 1], [2, 0], [1, 0]]]
}
arr_of_levels_1[3] = {
    letters: [ ["В", "Г", "О", "Р"], ["Е", "Л", "И", "А"], ["Р", "Т", "С", "Г"], ["Х", "С", "Т", "О"] ],
    positions: [[[0, 0], [1, 0], [2, 0], [3, 0]], [[3, 1], [3, 2], [3, 3], [2, 3]], [[0, 1], [0, 2], [0, 3], [1, 3]], [[1, 1], [1, 2], [2, 2], [2, 1]]]
}
arr_of_levels_1[4] = {
    letters: [ ["Т", "О", "Р", "Т"], ["Л", "К", "О", "Н"], ["О", "П", "Б", "К"], ["Ы", "С", "У", "О"] ],
    positions: [[[0, 0], [0, 1], [0, 2], [0, 3]], [[2, 2], [3, 2], [3, 1], [3, 0]], [[3, 3], [2, 3], [1, 3], [1, 2]], [[2, 1], [2, 0], [1, 0], [1, 1]]]
}
arr_of_levels_1[5] = {
    letters: [ ["Л", "А", "Ш", "А"], ["И", "З", "У", "Д"], ["С", "О", "Н", "Т"], ["В", "О", "С", "К"] ],
    positions: [[[3, 0], [3, 1], [3, 2], [3, 3]], [[1, 1], [2, 1], [2, 2], [2, 3]], [[2, 0], [1, 0], [0, 0], [0, 1]], [[1, 3], [1, 2], [0, 2], [0, 3]]]
}
arr_of_levels_1[6] = {
    letters: [ ["Ф", "И", "Л", "Г"], ["Т", "Т", "И", "Н"], ["Ш", "Ф", "Г", "Е"], ["Р", "А", "Р", "В"] ],
    positions: [[[2, 1], [3, 1], [3, 0], [2, 0]], [[0, 3], [1, 3], [2, 3], [3, 3]], [[1, 1], [1, 2], [2, 2], [3, 2]], [[0, 2], [0, 1], [0, 0], [1, 0]]]
}
arr_of_levels_1[7] = {
    letters: [ ["Р", "А", "Е", "Л"], ["Х", "М", "Д", "О"], ["В", "О", "Л", "К"], ["К", "Р", "А", "Й"] ],
    positions: [[[3, 0], [3, 1], [3, 2], [3, 3]], [[2, 0], [2, 1], [2, 2], [2, 3]], [[1, 0], [0, 0], [0, 1], [1, 1]], [[1, 2], [0, 2], [0, 3], [1, 3]]]
}
arr_of_levels_1[8] = {
    letters: [ ["Н", "Л", "С", "Ж"], ["О", "О", "К", "И"], ["К", "Г", "Л", "Ч"], ["А", "З", "Е", "Й"] ],
    positions: [[[2, 3], [1, 3], [0, 3]], [[1, 2], [2, 2], [3, 2], [3, 3]], [[0, 2], [0, 1], [1, 1], [2, 1]], [[3, 1], [3, 0], [2, 0], [1, 0], [0, 0]]]
}
arr_of_levels_1[9] = {
    letters: [ ["К", "О", "Р", "В"], ["Т", "С", "И", "Х"], ["О", "П", "И", "О"], ["К", "А", "Л", "Д"] ],
    positions: [[[0, 3], [1, 3], [2, 3], [3, 3]], [[0, 2], [0, 1], [0, 0]], [[2, 1], [2, 2], [3, 2], [3, 1]], [[1, 2], [1, 1], [1, 0], [2, 0], [3, 0]]]
}


const arr_of_levels_2 = [];

arr_of_levels_2[0] = {
    letters: [ ["В","О","С"], ["И","Р","А"], ["Л","К","А"] ],
    positions: [[[1, 1], [0, 1], [0, 2], [1, 2]], [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]]
}



let set_num; //индекс текущего набора уровней
let set = []; //массив наборов уровней
set[0] = arr_of_levels_1; 
set[1] = arr_of_levels_2;
let game_progress; //текущий уровень
let level_progress = 0; //количество найденных слов на уровне
let table; //игровое поле
let check = false; //проверка на mousedown на игровом поле
let arr_of_bars = []; //активные плитки
let massive; //прогресс всей игры
let completed_sets = [0, 0, 0, 0, 0]; //пройденные сеты
let size; //размер поля
let helper = []; //Подсказки
let help_points; //количество подсказок
let index_help_word = 0; //индекс слова для подсказок
let index_help_letter = 0; //индекс буквы для подсказок
let volume; //состояние звука
const arr_of_colors = ["#2c9585", "#92cdb6", "#a6b15f", "#c46e53", "#c9b675"]; //цвета для покраски найденных слов                                                   
let colors; //неиспользованные цвета для покраски слов


//Плавное появление игрового поля и проверка состояния звука..

window.onload = function() {
    let container = document.getElementById('container');
    container.style.opacity = '100%';
    volume_load();
    if (screen.width < 1500)
        document.querySelector("body").style.zoom = "65%";
};


start();


//Инициализация набора уровней, прогресса на данном наборе и подсказок..

function start()
{
    set_num = JSON.parse(localStorage.getItem('set'));
    massive = JSON.parse(localStorage.getItem('game_progress'));
    game_progress = massive[set_num];
    if (JSON.parse(localStorage.getItem('help_points') == null))
    {
        help_points = 40;
        localStorage.setItem('help_points', JSON.stringify(help_points));
    }
    else
    {
        help_points = JSON.parse(localStorage.getItem('help_points'));
    }
    document.getElementById('help_count').textContent = help_points;

    process();
}


//Инициализация игрового поля для определенного уровня..

function process()
{
    size = set[set_num][game_progress].letters.length;
    table = createTable(size); 
    filling(set[set_num][game_progress].letters); 
    
    table.addEventListener('mousedown', Down);   
    document.addEventListener('mouseover', Over); 
    document.addEventListener('mouseup', Up);
}


//Создание поля.. 
 
function createTable(size)  
{ 
    table = document.querySelector('.table');
    if (table != null)
    {
        table.remove();
    }
    table = document.createElement('table'); 
    table.classList.add("table");
    document.getElementById('container').prepend(table); 
    
    for (let i = 0; i < size; i++) 
    { 
        let row = document.createElement('tr') 
        table.appendChild(row); 
    
        for (let j = 0; j < size; j++)  
        { 
            let col = document.createElement('td') 
            row.appendChild(col); 
            let bar = document.createElement('div'); 
            bar.classList.add("bar");
            bar.id = 'bar';
            col.appendChild(bar); 
            bar.style = `background-color: #066354; color: #f8f8f8; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
        }  
    } 
    return table; 
} 
 
 
//Заполнение поля.. 
 
function filling(level) 
{ 
    let trs = document.querySelectorAll('table tr'); 
    for (let i = 0; i < trs.length; i++) 
    { 
        let tr = trs[i]; 
        let tds = tr.querySelectorAll('td'); 
        for (let j = 0; j < tds.length; j++) 
        { 
            let td = tds[j]; 
            td.querySelector('.bar').textContent = level[i][j]; 
        } 
    } 
} 
 
  
//mouse___DOWN..

function Down(event) 
{ 
    Sound('../sounds/Button 7.M4A');
    
    check = true; 
    if (event.target.classList.contains("bar") && event.target.classList.contains("colored") == false) 
    {   
        event.target.style = `background-color: #D2E0DB; font-size: ${600 / size / 3 + 20}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
        if (event.target.style.color !== "rba(239, 211, 52)")
        {
            event.target.style.color = "#012F2C";
        }
        event.target.classList.add("active");
        arr_of_bars.push(event.target); 
    } 
} 
 

//mouse___OVER..

function Over(event) 
{ 
    if (check && event.target.classList.contains("bar") && event.target.classList.contains("colored") == false) 
    {  
        Sound('../sounds/Button 7.M4A');
    
        if (event.target.classList.contains("active"))                
        {
            for (let i = arr_of_bars.indexOf(event.target)+1; i < arr_of_bars.length; i++)
            {
                arr_of_bars[i].style = `background-color: #066354; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
                if (arr_of_bars[i].classList.contains("help_bar"))
                {
                    arr_of_bars[i].style.color = "#EFD334";
                }
                else
                {
                    arr_of_bars[i].style.color = "#f8f8f8";
                }
                arr_of_bars[i].classList.remove("active");
            }
            arr_of_bars.splice(arr_of_bars.indexOf(event.target)+1, arr_of_bars.length-1 - arr_of_bars.indexOf(event.target));
        }
        else 
        {
            event.target.style = `background-color: #D2E0DB; color: #012F2C; font-size: ${600 / size / 3 + 20}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
            event.target.classList.add("active");
            arr_of_bars.push(event.target); 
        }
    }
}  



//mouse___UP..

function Up() 
{ 
    if (level_progress == 0)
    {
        colors = arr_of_colors.slice();
    }
    check = false; 
    if (checking(set[set_num][game_progress].letters, set[set_num][game_progress].positions)) 
    { 
        let color_index = Math.floor(Math.random() * colors.length);
        let color = colors[color_index];
        colors.splice(color_index, 1);
        for (i in arr_of_bars) 
        {
            if ( arr_of_bars[i].classList.contains("help_bar")) 
            {
                index_help_letter = 0;
                helper = [];
                break;
            }
        }
        for (i in arr_of_bars) 
        { 
            arr_of_bars[i].style = `background-color: ${color}; color: #f8f8f8; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
            arr_of_bars[i].classList.add("colored");
            arr_of_bars[i].classList.remove("active");
            arr_of_bars[i].classList.remove("help_bar");
        } 
        Sound('../sounds/Complete 2.M4A');

        level_progress++;
        
        if (level_progress == set[set_num][game_progress].positions.length) //если уровень пройден
        {
            help_points++;
            document.getElementById('help_count').textContent = help_points;
            localStorage.setItem('help_points', JSON.stringify(help_points));

            Sound('../sounds/Success 2.M4A');
            let bars = document.getElementsByClassName('bar');

            let i = 0;
            setTimeout(function(){
                myLoop(bars, i); 
            }, 500);
            
             
            level_progress = 0;
            game_progress++;
            colors = arr_of_colors.slice();
            massive[set_num] = game_progress;
            localStorage.setItem('game_progress', JSON.stringify(massive));
            if (game_progress == set[set_num].length) //если сет пройден
            {
                massive[set_num] = -1;
                localStorage.setItem('game_progress', JSON.stringify(massive));
                setTimeout(function(){
                    window.location.href = '../HTML/menu.html';
                }, 2500);
            }
            setTimeout(function(){
                process();
            }, 2000);
        }
    } 
    else 
    { 
        for (i in arr_of_bars) 
        { 
            if (arr_of_bars[i].classList.contains("help_bar"))
            {
                arr_of_bars[i].style = `background-color: #066354; color: #EFD334; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
            }
            else
            {
                arr_of_bars[i].style = `background-color: #066354; color: #f8f8f8; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
            }
            arr_of_bars[i].classList.remove("active");
        }         
    } 
    arr_of_bars = []; 
    return colors;
} 


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
        var audio = new Audio(); 
        audio.src = sound; 
        audio.autoplay = true; 
    }
}


//Анимация при заверешнии уровня..

function myLoop (bars, i) {     
    setTimeout(function () {                                                                          
        bars[i].style = `background-color: #00A86B; color: #f8f8f8; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
        i++;                                                                                                         
        if (i < bars.length) {                                                                                          
            myLoop(bars, i);                                                      
        }                                                                         
    },50)
}


//Проверка найденного слова..

function checking(levelLetters, levelPisitions) 
{ 
    for (let i = 0; i < levelPisitions.length; i++) 
    { 
        let letters = 0; 
        if (levelPisitions[i].length == arr_of_bars.length) 
        { 
            for (let j = 0; j < levelPisitions[i].length; j++) 
            { 
                if (levelLetters[levelPisitions[i][j][0]][levelPisitions[i][j][1]] == arr_of_bars[j].textContent) 
                { 
                    letters++; 
                } 
                if (letters == arr_of_bars.length) 
                { 
                    return true; 
                } 
            } 
        } 
    }  
    return false; 
} 


//Подсказки..

function help()
{
    if (help_points > 0)
    {
        Sound('../sounds/Button 7.M4A');

        let trs = table.querySelectorAll('tr');
        tds = [].map.call(trs, tr => tr.querySelectorAll('td'));
        help_points--;
        document.getElementById('help_count').textContent = help_points;
        localStorage.setItem('help_points', JSON.stringify(help_points));
        let check = false;
        for (let i = index_help_word; i < set[set_num][game_progress].positions.length; i++)
        {
            for (let j = index_help_letter; j < set[set_num][game_progress].positions[i].length; j++)
            {
                let help_bar = tds[set[set_num][game_progress].positions[i][j][0]][set[set_num][game_progress].positions[i][j][1]].querySelector('.bar');
                if (help_bar.classList.contains("colored") == false)
                {  
                    help_bar.classList.add("help_bar");
                    helper.push(help_bar);
                    help_bar.style.color = "#EFD334";

                    if (helper.length == set[set_num][game_progress].positions[i].length) //если подсказки равны длине слова
                    {
                        index_help_word++;
                        index_help_letter = 0;
                        if (level_progress == 0)
                        {
                            colors = arr_of_colors.slice();
                        }
                        let color_index = Math.floor(Math.random() * colors.length);
                        let color = colors[color_index];
                        colors.splice(color_index, 1);
                        for (k in helper) 
                        { 
                            helper[k].style = `background-color: ${color}; color: #f8f8f8; font-size: ${600 / size / 3}px; line-height: ${600 / size}px; height: ${600 / size}px; width: ${600 / size}px`; 
                            helper[k].classList.add("colored");
                            helper[k].classList.remove("active");
                            helper[k].classList.remove("help");
                        } 

                        helper = [];

                        Sound('../sounds/Complete 2.M4A');

                        level_progress++;
                            
                        if (level_progress == set[set_num][game_progress].positions.length) //если уровень пройден
                        {
                            index_help_word = 0;

                            Sound('../sounds/Success 2.M4A');

                            let bars = document.getElementsByClassName('bar');        

                            let i = 0;
                            setTimeout(function(){
                                myLoop(bars, i); 
                            }, 500);
                                
                            level_progress = 0;
                            game_progress++;
                            colors = arr_of_colors.slice();
                            massive[set_num] = game_progress;
                            localStorage.setItem('game_progress', JSON.stringify(massive));

                            if (game_progress == set[set_num].length) //если сет пройден
                            {
                                massive[set_num] = -1;
                                localStorage.setItem('game_progress', JSON.stringify(massive));
                                setTimeout(function(){
                                    window.location.href = '../HTML/menu.html';                                      
                                }, 2500);
                            }
                            setTimeout(function(){
                                process();
                            }, 2000);
                        }
                    }
                    else 
                    {
                        index_help_letter++;
                    }
                    check = true;
                    break;
                }
            }
            if (check)
            {
                break;
            }
        }
    }
}


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


//Вкл или выкл звук..

document.querySelector(".volume").addEventListener("click", function(){
    if (volume)
    {
        document.querySelector(".volume").classList.remove("fa-volume-up");
        document.querySelector(".volume").classList.add("fa-volume-off");
        volume = false;
    }
    else
    {
        Sound('../sounds/Button 6.M4A');
        document.querySelector(".volume").classList.remove("fa-volume-off");
        document.querySelector(".volume").classList.add("fa-volume-up");
        volume = true;
    }
    localStorage.setItem('volume', JSON.stringify(volume));
})


//Как играть..

document.querySelector('.fa-question').addEventListener("click", function()
{
    Sound_ref('../sounds/Button 6.M4A','../HTML/how_to_play.html');
});


//Магазин..

document.querySelector('.fa-cart-plus').addEventListener("click", function()
{
    Sound_ref('../sounds/Button 6.M4A','../HTML/shop.html');
});
    

//Слушатели для функционала страницы..

document.getElementById('back').addEventListener("click", function(){Sound_ref('../sounds/Button 6.M4A', '../HTML/menu.html')});
document.getElementById('help_count').addEventListener("click", help);