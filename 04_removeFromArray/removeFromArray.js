const removeFromArray = function(array, ...args) {
    // let item = array.indexOf(element1)
    // if (array.includes(element1)){
    //     array.splice(item, 1)
    // }

    // if(array.includes(element2)){
    //     item2 = array.indexOf(element2)
    //     array.splice(item2, 1)
    // }
    // return array

    //   return array.filter(val => !args.includes(val))


    let filteredArray = []

    array.forEach((item) => {
        if(!args.includes(item)){
            filteredArray.push(item);
        }
    });

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
