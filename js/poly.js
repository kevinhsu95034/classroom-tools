function makeFraction(a, b){
    function gcd(a,b){
        return b ? gcd(b, a%b) : a;
    }

    if (a % b == 0)
        return a/b
    else{
        let g = gcd(a,b);
        if (a/b > 0)
            return "\\frac{" + a/g + "}{" + b/g + "}"
        else
            return "-\\frac{" + Math.abs(a/g) + "}{" + Math.abs(b/g) + "}"
    }
}

function makePolynomial(n, limit=true){
    let poly = []
    for(let i=0;i<=n;i++){
        poly[i] = Math.floor(Math.random()*20)-10
    }
    if(limit)
        while(poly[n]==0 || poly[n] > 2 || poly[n] < -2 )
            poly[n] = Math.floor(Math.random()*4)-2
    else
        while(poly[n]==0)
            poly[n] = Math.floor(Math.random()*20)-10

    return poly
}

function displayPolynomial(coeff){
    function term(coefficient, x, power){
        let result = ""
        if(coefficient==0)
            result = ""
        else if (coefficient==1)
            result = ""
        else if (coefficient==-1)
            result = "-"
        else
            result = coefficient

        if(power==0)
            if(coefficient == 1)
                return 1
            else if (coefficient == -1)
                return -1
            else
                return coefficient
        else if(power==1)
            result += x
        else
            result += x + "^" + power
        return result
    }

    let latex = ""
    for(let i=coeff.length-1;i>=0;i--){
        if(coeff[i]==0)
            continue

        if(latex != "" && coeff[i]>0)
            latex += "+"

        latex += term(coeff[i], "x", i)
    }

    return latex
}

function polyOfX(poly, x){
    let result = 0
    for(let i=poly.length-1;i>=0;i--){
        result += poly[i]*Math.pow(x, i)
    }

    return result
}

function randomInt(a, b){
    return Math.floor(Math.random()*(b-a))+a
}

function randomFromList(list){
    return list[randomInt(0, list.length)]
}

function polyMultiplication(poly1, poly2){
    let result = []

    for(let a=0;a<poly1.length;a++){
        for(let b=0;b<poly2.length;b++){
            if(isNaN(result[a+b]))
                result[a+b] = poly1[a] * poly2[b]
            else
                result[a+b] += poly1[a] * poly2[b]
        }
    }

    return result
}

function polyDerivative(poly){
    let result = []
    for(let i=1;i<poly.length;i++){
        result[i-1] = poly[i]*i
    }

    return result
}