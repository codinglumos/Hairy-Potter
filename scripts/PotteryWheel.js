let id = 1

export const makePottery = (potShape, potWeight, potHeight) => {
let pottery = {
    id: id++,
    shape: potShape,
    weight: potWeight,
    height: potHeight,
}
    return pottery
}
//console.log(pottery)
//module.exports = makePottery() 