// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
//import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 6)
    //console.log(mug)
let plate = makePottery("plate", 6, 8)
    //console.log(plate)
let bowl = makePottery("bowl", 6, 2)
    //console.log(bowl)
let art = makePottery("art", 1, 1)
    //console.log(art)
let planter = makePottery("planter", 3, 2)
console.log(planter)

// Fire each piece of pottery in the kiln
let mugNkiln = firePottery(mug, 2000)
let plateNkiln = firePottery(plate, 2500)
let bowlNkiln = firePottery(bowl, 2100)
let artNkiln = firePottery(art, 1800)
let planterNkiln = firePottery(planter, 1950)
console.log(mugNkiln)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell (mugNkiln)
let sellPlate = toSellOrNotToSell (plateNkiln)
let sellBowl = toSellOrNotToSell (bowlNkiln)
let sellArt = toSellOrNotToSell (artNkiln)
let sellPlanter = toSellOrNotToSell (planterNkiln)
console.log(sellPlanter)
 
//PARENT HTML comment here
const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = potteryList(usePottery())

