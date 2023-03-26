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

class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function randomTreeFromList(lst){
    let root = new Node(lst[0]);

    for(let i=1;i<lst.length;i++){
        while(true){
            if(Math.random() > 0.5)
                root.left = new Node(lst[i]);
            else
                root.right = new Node(lst[i]);
        }
    }
}