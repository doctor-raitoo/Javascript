const employees = [{
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020
}];

function addEmployee(name, email, joinYear){
    employees.push({
        name: name,
        email: email,
        joinYear: joinYear
    });
}

addEmployee('Siti', 'Siti@gmail.com', 2021);

console.log(employees);