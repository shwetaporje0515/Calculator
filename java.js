let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventlistener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTMl == 'DELETE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{ string += e.target.innerHTMl;
            input.value =string;
        }
    })
})