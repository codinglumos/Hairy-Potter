export const firePottery = (pots, firingTemp) => {
    pots.fired = true
    if (firingTemp > 2200) {
        pots.cracked = true
    } if (firingTemp <= 2200 ) {
        pots.cracked = false
    }
return pots
    
}