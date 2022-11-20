const evenArr = [2,4,6,8,10];
const oddArr = [1,2,3,4,6,8];
const zeroArr = [0,2,5,7,9,3];
const onlyOdd = [1,3,5,7,9];
const dup = [1,2,3,4,2,6];
const ob = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasOddNumber(arr){
    return arr.some(function(num){ return num % 2 !== 0})

}

function hasAZero(arr){
    return arr.some(function(num){return num === 0})
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){return num % 2 !== 0})
}

function hasNoDuplicates(arr){
    return arr.every(function(num){return arr.indexOf(num) === arr.lastIndexOf(num)})
}

function hasCertainKey(arr, x){
    return arr.every(function(val){return x in val })
}