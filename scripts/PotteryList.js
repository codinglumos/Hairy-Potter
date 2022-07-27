import { usePottery } from "./PotteryCatalog"

export const PotteryList= () => {
let readyPots = usePottery()

for (pots of readyPots) {
   potteryhtml += `<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">
    ${pots.shape}</h2>
    <div class="pottery__properties">
      Item weighs ${pots.weight} grams and is ${pots.height} cm in height
    </div>
    <div class="pottery__price">
    Price is $${pots.price}</div>
  </section>`
}
 potteryhtml += `</section>`
 return potteryhtml
}

console.log(PotteryList())