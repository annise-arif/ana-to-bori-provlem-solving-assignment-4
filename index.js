// Problem 1: ana to vori convert
function anaToVori(ana){
    let vori = ana / 16;
    if(ana <= 0){
    return "Please Enter a Positive Number";
    }
    return vori;
    };
    console.log(anaToVori(32));
    // Problem 2: panda cost
    function pandaCost(singara, somosa, jilapi){
    if(singara <= 0 && somosa <= 0 && jilapi <= 0){
    return "Please take any fruit";
    }
    let singaraCost = singara * 7;
    let somosaCost = somosa * 10;
    let jilapiCost = jilapi * 15;
    const allCost = singaraCost + somosaCost + jilapiCost;
    return allCost;
    };
    console.log(pandaCost(2, 2, 2));
    // problem 3: picnic budget
    function picnicBudget(people){
    const amount1 = 5000;
    const amount2 = 4000;
    const amount3 = 3000;
    if(people <= 0){
    return "Please Enter a Valid Number"
    }
    else if(people <= 100){
    const count = people * amount1;
    return count;
    }
    else if(people <= 200){
    const first100Budget = 100 * amount1;
    const restAmount = people - 100;
    const second200budget = restAmount * amount2;
    const totalAmount = first100Budget + second200budget;
    return totalAmount;
    }
    else if(people <= 300){
    const first100Budget = 100 * amount1;
    const second200budget = 100 * amount2;
    const secondRestbudget = people - 200;
    const third300budget = second200budget * amount3;
    const totalAmount = first100Budget + second200budget + third300budget;
    return totalAmount;
    }
    else if (people > 300){
    return console.log("Please Enter a Valid Number 1 To 300,");
    }
    else {
    return console.log("Please Enter a Positive Number");
    }
    };
    const allBudget = picnicBudget(101);
    console.log(allBudget);
    // Problem 4: find a odd latters name's friend
    function oddFriend(names){
    if(names.length <= 0){
    return "Please Enter a Valid Name Or Array";
    }
    let oddName = [];
    for(let i = 0; i < names.length; i++){
    let countlength = names[i].length;
    if( countlength % 2 !==0){
    countlength = names[i];
    if(oddName.length === 0 ) {
    oddName.push(countlength);
    }
    }
    }
    return oddName;
    };
    let names = ["mariya", "somaya", "omaya", "jomaya", "jorna", "beb"];
    console.log(oddFriend(names));