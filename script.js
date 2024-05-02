var elementos = document.querySelectorAll('[type=radio]');

let respostasCorretas = 0;

let contadorP = 0;

var numPerguntas = document.querySelectorAll('.pergunta');

console.log(numPerguntas.length);
for(var i = 0; i < elementos.length; i++){
    
    elementos[i].addEventListener('change',(e)=>{

       let marcado = e.target.value;

       if(marcado == "correta"){

        respostasCorretas++;
        
        let parentNode = e.target.parentNode;
        parentNode.style.backgroundColor = '#c7e3b3'; //resposta

        let els = parentNode.parentNode.querySelectorAll('[type=radio]'); //pergunta

        for(var n = 0; n < els.length; n++){
            //Desabilitar seleção após 1 item ser selecionado
            els[n].disabled = true;
        }

       } else if(marcado == "incorreta"){
        
        let parentNode = e.target.parentNode;
        parentNode.style.backgroundColor = '#e3bab3'; //resposta

        let els = parentNode.parentNode.querySelectorAll('[type=radio]'); //pergunta

        for(var n = 0; n < els.length; n++){
            //Desabilitar seleção após 1 item ser selecionado
            els[n].disabled = true;
        }

        //Mostrar opção verdadeira caso usuário tenha errado
        let correta = parentNode.parentNode.querySelector('[value=correta]');
        correta.parentNode.style.backgroundColor = '#c7e3b3';
       }

       contadorP++
          if(contadorP == numPerguntas.length){
            let p = document.querySelector('p');
            p.innerHTML = `Você acertou ${respostasCorretas}`;
          }
        
    })
}




    


