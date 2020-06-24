const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")



for(let card of cards){
    card.addEventListener("click", function(){
        const contentId = card.getAttribute('id')
        window.open(`/courses/${contentId}`)
    })
}


