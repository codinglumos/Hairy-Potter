soldPottery = []

export const toSellOrNotToSell = (potteryObject) => {
for (potteryObject of pottery) {
    if (pots.weight >= 6) {
        pots.price = 40
    } if (pots.weight < 6) {
        pots.price = 20
    } if (pots.cracked = true) {
        pots.price = 0
    } if (pots.cracked = false)
    soldPottery.push(potteryObject)
}
return potteryObject
}

export const usePottery = () => {
    return [...soldPottery]
}