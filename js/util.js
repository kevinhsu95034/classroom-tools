function randomInt(a, b){
    return Math.floor(Math.random()*(b-a))+a
}

function randomFromList(list){
    return list[randomInt(0, list.length)]
}