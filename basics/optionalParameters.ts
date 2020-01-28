function getName1(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let name1 = getName1("Иван", "Кузнецов");
//let name2 = getName("Иван", "Михайлович", "Кузнецов"); // error TS2554: Expected 2 arguments, but got 3.
//let name3 = getName("Иван"); // error TS2554: Expected 2 arguments, but got 1.

function getName2(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
};

let nameGetName2_01 = getName2('Иван', 'Кузнецов');
console.log('nameGetName2_01', nameGetName2_01); // Иван Кузнецов
let nameGetName2_02 = getName2('Вася'); // Вася
console.log("nameGetName2_02", nameGetName2_02);
