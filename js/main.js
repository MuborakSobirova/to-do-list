alert("reminder: by pressing the text is line through, and by double-clicking the text is deleted")

let toDoContainer = document.querySelector(".container")
let toDoForm = document.querySelector(".toDoForm")
let toDoInput = document.querySelector(".toDoInput")
let toDoBtn = document.querySelector(".toDoBtn")

toDoForm.addEventListener("submit", (evt) => {

evt.preventDefault();

if(!toDoInput.value){
    toDoInput.classList.add("is-invalid")
}

else{

toDoInput.classList.remove("is-invalid")
toDoInput.classList.add("form-control")

 let paragraph = document.createElement("p")
paragraph.classList.add("fw-semibold", "fs-5")
paragraph.innerHTML = toDoInput.value
toDoContainer.appendChild(paragraph)
toDoInput.value = null

paragraph.addEventListener("click", ()=> {
    paragraph.style.textDecoration = "line-through"
})

paragraph.addEventListener("dblclick", ()=> {
    toDoContainer.removeChild(paragraph)
})

toDoInput.classList.remove("is-invalid")
toDoInput.classList.add("form-control")


}
})



