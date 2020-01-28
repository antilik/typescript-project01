class User9 {
}
let tom9 = new User9();
tom9.name = 'Tom';
console.log('tom9.name: ', tom9.name);
class User10 {
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
}
let tom10 = new User10();
tom10.name = 'Tom';
console.log('tom10.name: ', tom10.name);
;
//# sourceMappingURL=methodsOfAccess.js.map