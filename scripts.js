
const buttunConvert = document.querySelector(".bt-primeiro") /**button memoria */
const correncySelector = document.querySelector(".convertySelector") /*selector memori */

function convertValuer() {
    const inputValur = document.querySelector(".information-input").value; /*informações do input */
    const toBeConverted = document.querySelector(".currency-value") /* rel */
    const wasConverted = document.querySelector(".currency-value-dolar") /* dolar/euro */

    console.log(correncySelector.value) /**vai pesquisar o selector */
    const dolar = 5.69 /*valor do dolar */
    const euro = 6.45

    if (correncySelector.value == "dolar") { /**se o select estiver em dolar isso vai funcionar */

         wasConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
         }).format(inputValur / dolar) /*vai mudar o valor do <p></p> */ /*basicamente a mesma coisa do de cima */
    }

    if (correncySelector.value == "euro") { /**se o select estiver em euro isso vai funcionar */
        
         wasConverted.innerHTML = new Intl.NumberFormat("de-DE",{
         style: "currency",
         currency: "EUR",
         }).format(inputValur / euro)
    }

    toBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValur) /*vai mudar o valor do <p></p> */ /*para dar certo tem que ser desse jeito para ficar na moeda br */


    console.log(inputValur) /*pesquisador do input */
}
function changeEuro() {
   const primeiroparagraafo = document.querySelector(".currency-reall") /**para trocar de dolar para euro no paragrafo */
   const currencyImg = document.querySelector(".imgtroca")

   if (correncySelector.value == "dolar") {
    primeiroparagraafo.innerHTML = "Dólar Americano"
    currencyImg.src = "img/unidos.png"; 
   }

    if (correncySelector.value == "euro") { 
    primeiroparagraafo.innerHTML = "Euro"
    currencyImg.src = "img/euro.png"; 
   }
   convertValuer()
}

correncySelector.addEventListener("change", changeEuro)
buttunConvert.addEventListener("click", convertValuer)

