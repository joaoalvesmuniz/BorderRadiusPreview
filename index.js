let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let radio4 = document.getElementById("radio4");
let box = document.getElementById("box")
let inputs = document.querySelectorAll('input[type="number"');
let showValue = document.getElementById("show-value");
let botao =  document.getElementById("botao")






for(let i = 0 ; i < inputs.length; i++){


    inputs[i].addEventListener('input',()=>{

         if(inputs[i].value > 150){

            inputs[i].value = 150;
         }else if(inputs[i].value === 0 || inputs[i].value < 0 ){

            inputs[i].value = 0;
         }
            
        let propiedade = `border-radius: ${radio1.value}px ${radio2.value}px ${radio3.value}px ${radio4.value}px;`


        showValue.innerText = propiedade;
        console.log(propiedade)
        box.style =  propiedade;

    });

}


botao.addEventListener('click', ()=>{

   navigator.clipboard.writeText(showValue.innerText);
   alert("Copied the text: " + showValue.innerText);

});

