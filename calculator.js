var screen = document.getElementById('display');


function display(number){
        screen.value+=number      

}

function output(){
   document.getElementById('display').value = eval(screen.value);
}

function deletion(){
    screen.value = screen.value.slice(0,-1)
}

function clearAll(){
    screen.value = ""
}