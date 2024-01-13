/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if(employee.profession === "developer"){
      console.log(employee);
    }
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if(employee.profession === "developer"){
      console.log(employee);
    }
  });
}

function addData() {
  const newEmp = {id: 4 , name: "susan" , age: "20", profession: "intern"};
  arr.push(newEmp);
  console.log(newEmp);
}

function removeAdmin() {
  const filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "abc", age: "18", profession: "developer" },
    { id: 5, name: "xyz", age: "20", profession: "analyst" },
    { id: 6, name: "pqr", age: "19", profession: "admin" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);

}
