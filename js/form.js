const buyBtn = document.getElementById("a-buy");
const freezeBtn = document.getElementById("a-freeze");

const modalForm = document.getElementById("modal");
const smoke = document.getElementById("modalSmoke");

modalForm.getElementsByClassName("close")[0].onclick = (function (){
    modalForm.getElementsByTagName("form")[0].reset();
    modalForm.style = "display: none";
    smoke.style = "display: none"
});

buyBtn.onclick = () => modal("", "Заказ звонка на покупку абонемента");
freezeBtn.onclick = () => modal("", "Заказ звонка на заморозку абонемента");

const abonements = document.querySelectorAll(".abonement");

for (i = 0; i < abonements.length; i++){
    let text = abonements[i].getElementsByTagName("span")[0].innerText;
    abonements[i].onclick = () => modal(text, "Заказ звонка на покупку абонемента");
}

const modal = (function (type, action){
    modalForm.getElementsByTagName("span")[0].innerText = type;
    modalForm.getElementsByTagName("h2")[0].innerText = action;

    modalForm.style = "display: flex !important";
    smoke.style = "display: flex !important"
});