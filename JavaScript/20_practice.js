const student = [
  { firstName: "Mohan", lastName: "Kumar", age: 35 },
  { firstName: "Mohan", lastName: "Kumar", age: 29 },
  { firstName: "Mohan", lastName: "Kumar", age: 49 },
  { firstName: "Mohan", lastName: "Kumar", age: 29 },
];

const map_output = student.map(function displayFullName(arr) {
  return arr.firstName + " " + arr.lastName;
});
console.log(map_output);

function fullName(obj_collection) {
  return obj_collection.firstName + " " + obj_collection.lastName;
}

function fetch_data(collection, operation) {
  output_collection = [];
  collection.reduce(
    (acc, corr) => output_collection.push(operation(corr)),
    output_collection,
  );
  return output_collection;
}

console.log(fetch_data(student, fullName));
