var button = document.getElementById("Button");
var skills = document.getElementById("Skills");
button.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        button.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        button.textContent = 'Show Skills';
    }
});
