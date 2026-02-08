const student = [
    {firstName:"Mohan", lastName:"Kumar", age:35},
    {firstName:"Mohan", lastName:"Kumar", age:29},
    {firstName:"Mohan", lastName:"Kumar", age:49},
    {firstName:"Mohan", lastName:"Kumar", age:29}
]

const map_output = student.map(function displayFullName(arr){
    return arr.firstName+" "+arr.lastName
} )
console.log(map_output)