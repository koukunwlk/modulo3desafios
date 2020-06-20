const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")



for(let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add("active")
        document.querySelector('iframe').src= `https://rocketseat.com.br/${videoId}`
    })
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', ()=>{
    modalOverlay.classList.remove('active')
    document.querySelector('iframe').src= ""


})



