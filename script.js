function randomColor(){

    let values = "0123456789ABCDEF";
    var cont = "#";

    for (let i = 0;i<6 ; i++){

        cont = cont + values[Math.floor(Math.random()*16)]
    }
    return cont;
}

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor()

}

var btn = document.getElementById("btn");
btn.addEventListener("click", changeRandomColor)