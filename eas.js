/* let xy = document.getElementsByClassName("main")[0];
let xyz = xy.length;
function changecolor() {
    let xy = document.getElementsByClassName("main")[0];
    xy.style.backgroundColor = "orange";
}

for (var i = 0 ; i < xyz; i++) {
    xy[i].addEventListener('mouseover' , changecolor , false ) ; 
 } */

const createDiv = document.createElement("div");
function createSquare(col) {
    for(let i = 0; i < (col * col); i++) {
        const drawboard = document.querySelector(".main");
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "squares");
        drawboard.appendChild(createDiv);
    }

}
let columns 
createSquare(300,300);

const squares = document.querySelectorAll('.squares');
for (let i = 0; i < squares.length; i++) {
squares[i].addEventListener('mouseover', function() {
    squares[i].style.backgroundColor = "black";
});
}

const cleargrid = document.querySelector("#cleargrid");

cleargrid.addEventListener("click", function() {
for (let i = 0; i < squares.length; i++) {
squares[i].style.backgroundColor = "grey";
}
});