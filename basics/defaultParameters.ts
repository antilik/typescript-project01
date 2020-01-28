function getNameDefault1(firstName: string, lastName: string='Иванов'){
  return firstName + ' ' + lastName;
};

let nameDefault1 = getNameDefault1('Иван', 'Кузнецов');
console.log('nameDefault1', nameDefault1);

let nameDefault1_2 = getNameDefault1('Вася');
console.log('nameDefault2', nameDefault1_2);

// transfer value as the result of other function
function defaultSurname(): string{
  return 'Smith';
};

function getNameDefault2(firstName: string, lastName: string = defaultSurname()) {
  return firstName + ' ' + lastName;
};

let nameDefault2 = getNameDefault2('Tom');
console.log('nameDefault2', nameDefault2);
