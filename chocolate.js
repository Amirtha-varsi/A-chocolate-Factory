function Factory(arr) {
    let count = 0; 
    let n = arr.length;


    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }

    
    while (count < n) {
        arr[count] = 0;
        count++;
    }

    return arr;
}


let chocolates = [4, 5, 0, 1, 9, 0, 5, 0];
console.log(Factory(chocolates));

