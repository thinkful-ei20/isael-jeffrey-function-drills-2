function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

let output = jediName('Isael', 'Lizama');
console.log(output);