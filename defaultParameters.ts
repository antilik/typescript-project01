function getNameDefault1(firstName: string, lastName: string='Иванов'){
  return firstName + ' ' + lastName;
};

let nameDefault1 = getNameDefault1('Иван', 'Кузнецов');
console.log('nameDefault1', nameDefault1);

let nameDefault2 = getNameDefault1('Вася');
console.log('nameDefault2', nameDefault2);

// transfer value as the result of other function
function defaultSurname(): string{
  return 'Smith';
}