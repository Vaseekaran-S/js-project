
const parent = document.getElementById('parent');

const chat = document.createElement('div');
chat.className = "chatBtn";

const popupCard = document.createElement('div');
popupCard.style.display = "none"
popupCard.classList = "popupCard";

parent.appendChild(chat);
parent.appendChild(popupCard);

chat.addEventListener("click",()=>{

    if(popupCard.style.display == "block"){
        popupCard.style.display="none";
    }else{
        popupCard.classList.add("card-animation");
        popupCard.style.display = "block";
    }
    


})