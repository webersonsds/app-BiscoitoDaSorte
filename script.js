const butonBicoito = document.querySelector('.quebrarBiscoito')
const butonNovoBiscoito = document.querySelector('.novoBiscoito')

let mudaFrase = document.querySelector('.frase')

let frase = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais que muito conhecimento.',
    'O risco é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvavel e conquiste  imposivel.',
    'Acredite em milagres, mas nao dependa deles.',
    'A maior barreira para o sucesso e o medo do fracasso.'
    ];
    

    function quebraBiscoito(){

        let numeroaleatoreo = Math.floor(Math.random() * frase.length)

        mudaFrase.innerHTML =  (frase[numeroaleatoreo])

        document.querySelector(".img").src="./src/biscoitoAberto.png"
        }

        
        function biscoitoNovo (){

            document.querySelector(".img").src="./src/biscoito.png"
            mudaFrase.innerHTML =  " veja sua sorte"

        }

