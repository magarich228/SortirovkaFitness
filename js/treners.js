const treners = document.querySelectorAll(".trener");

for (i = 0; i < treners.length; i++){
    const trener = treners[i];
    const btn = trener.getElementsByClassName("go")[0];

    trener.onmouseover = (function (){
        btn.style.visibility = "visible";
    });

    trener.onmouseout = (function (){
        btn.style.visibility = "hidden";
    });

    btn.onclick = () => modal(trener.getElementsByTagName("h4")[0].innerText, "Заказ звонка для записи на тренировку");
}