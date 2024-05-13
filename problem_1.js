
// --------Q1---------

result = (mark) => {
    if (mark < 0) {
        return "Failed"
    }
    else if (mark >= 0 && mark < 40){
        return "C grade"
    }
    else if (mark >= 40 && mark < 60){
        return "B grade"
    }
    else if (mark >= 60 && mark < 70){
        return "A- grade"
    }
    else if (mark >= 70 && mark < 80){
        return "A grade"
    }
    else if (mark >= 80 && mark <= 100){
        return "A+ grade"
    }
    else{
        return "Invalid Input"
    }
}

console.log(result(154));


// --------Q2---------

evenOdd = (num) => {
    if (num % 2 == 0) {
        console.log("Even Number")
    }
    else {
        console.log("Odd Number")
    }
}

evenOdd(24)


// --------Q3---------

sort = (a) => {
    for (let i=0; i<a.length; i++){
        for (let j=i+1; j<a.length; j++){
            if (a[i] > a[j]){
                let temp4 = a[i];
                a[i] = a[j];
                a[j] = temp4;
            }
        }
    }
    return a;
}

var a = [12, 1, 17, 10, 16, 7, 3, 11, 19, 14, 4, 15, 8, 5, 20, 6, 9, 13, 18, 2];
console.log(sort(a));

// --------Q4---------

leapYear = (num) => {
    if (num % 4 == 0) {
        console.log("Leap Year")
    }
    else {
        console.log("Not Leap Year")
    }
}

leapYear(2024)


// --------Q5---------

divisible = () => {
    const arr = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(divisible());



// --------Q6---------

bigName = (friends) => {
    let temp = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > temp.length) {
            temp = friends[i];
        }
    }
    return temp;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(bigName(friends));



// --------Q7 and Q8---------

uniqueNumbers = (numbers) => {

    const num = new Set(numbers);
    const uniqueArray = [...num];
    return uniqueArray;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(uniqueNumbers(numbers));
console.log(Math.max(...uniqueNumbers(numbers)));



// --------Q9---------

console.log("========================")

monthlySavings = (payments, cost) => {

    if (typeof (payments) == "object" && typeof (cost) == "number") {
        const money = payments.map(pay => {
            if (pay >= 3000) {
                let temp1 = pay
                return temp1 - pay * 0.2;
            }
            else {
                return pay;
            }
        })

        let sum = 0;

        for (let i = 0; i < money.length; i++) {
            sum += money[i];
        }

        if (sum - cost >= 0) {
            return sum - cost;
        }
        else {
            return "Earn More";
        }
    }
    else{
        return "Invalid Input";
    }

}

// const payments = [1000, 2000, 3000];
// const payments = [1000, 2000, 2500];
const payments = [900, 2700, 3400];
const cost = 10000;
console.log(monthlySavings(payments, cost));
// console.log(monthlySavings(cost, payments));



