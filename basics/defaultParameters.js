function getNameDefault1(firstName, lastName = 'Иванов') {
    return firstName + ' ' + lastName;
}
;
let nameDefault1 = getNameDefault1('Иван', 'Кузнецов');
console.log('nameDefault1', nameDefault1);
let nameDefault1_2 = getNameDefault1('Вася');
console.log('nameDefault2', nameDefault1_2);
function defaultSurname() {
    return 'Smith';
}
;
function getNameDefault2(firstName, lastName = defaultSurname()) {
    return firstName + ' ' + lastName;
}
;
let nameDefault2 = getNameDefault2('Tom');
console.log('nameDefault2', nameDefault2);
//# sourceMappingURL=defaultParameters.js.map