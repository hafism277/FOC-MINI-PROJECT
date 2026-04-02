let animalName = document.getElementById("animalName");

animalName.addEventListener("mouseover", function() {
    animalName.textContent = "Small Pig 🐷";
});

animalName.addEventListener("mouseout", function() {
    animalName.textContent="Pig";
});
setTimeout(function(){

alert("Welcome To Animal Page"); },2000);