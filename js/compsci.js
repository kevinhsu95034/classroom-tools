function toBase(n, b){
    result = ""
    while(n>0){
        if(n%b<10)
            result = n%b + result
        else
            result = String.fromCharCode(n%b-10+65) + result
        n = Math.floor(n/b)
    }
    return result
}

function gate(a, b, type){
    switch(type){
        case "AND":
            return a & b
        case "OR":
            return a | b
        case "XOR":
            return a ^ b
        case "NAND":
            return (a & b) == 1?0:1
        case "NOR":
            return (a | b) == 1?0:1
        case "XNOR":
            return (a ^ b) == 1?0:1
    }
}