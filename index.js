function fibonacciGenerator(n) {

    var output = [];

    if (n === 1) {

        output = [0];

    } else if (n === 2) {

        output = [0, 1];

    }

    else {
        
        output = [0,1];

        while(output.length < n){
        
            output.push(output[(output.length - 2)] + output[(output.length - 1)]);

        }
    }

    return output

}
