const button = document.getElementById("Button") as HTMLButtonElement
const skills = document.getElementById("Skills") as HTMLElement

button.addEventListener('click', ()=>{
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
        button.textContent='Hide Skills'
    }else{
        skills.style.display = 'none'
        button.textContent = 'Show Skills'
    }
})
