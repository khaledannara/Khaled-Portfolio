const texts = [
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver",
    "Machine Learning Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text span").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1500);

    }else{

        setTimeout(type, 100);
    }

})();
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){
    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});