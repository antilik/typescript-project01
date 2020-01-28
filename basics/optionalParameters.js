function getName1(firstName, lastName) {
    return firstName + " " + lastName;
}
let name1 = getName1("Иван", "Кузнецов");
function getName2(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
;
let nameGetName2_01 = getName2('Иван', 'Кузнецов');
console.log('nameGetName2_01', nameGetName2_01);
let nameGetName2_02 = getName2('Вася');
console.log("nameGetName2_02", nameGetName2_02);
//# sourceMappingURL=optionalParameters.js.map