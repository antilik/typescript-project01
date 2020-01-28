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
tom10.name = 'Took';
console.log('tom10.name: ', tom10.name);
;
class User11 {
    constructor(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
}
let tom11 = new User11(2, 'Tim');
console.log('tom11.id: ', tom11.id, 'tom11.name: ', tom11.name);
class User12 {
    constructor(id, userName) {
        this.id = id;
        this.name = userName;
    }
}
let tom12 = new User12(1, 'Bill');
console.log('tom12.id: ', tom12.id, 'tom12.name: ', tom12.name);
//# sourceMappingURL=methodsOfAccess.js.map