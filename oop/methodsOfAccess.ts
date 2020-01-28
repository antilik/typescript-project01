// Methods for access (get, set)
class User9 {
  name: string;
}

let tom9 = new User9();
tom9.name = 'Tom';
console.log('tom9.name: ', tom9.name);

class User10 {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }
}

let tom10 = new User10();
tom10.name = 'Took';
console.log('tom10.name: ', tom10.name);;


// Properties for read only
// ==================================

class User11 {
  readonly id: number;
  name: string;
  constructor(userId: number, userName: string) {
    this.id = userId;
    this.name = userName;
   }
}

let tom11: User11 = new User11(2, 'Tim');
console.log('tom11.id: ', tom11.id, 'tom11.name: ', tom11.name);

// short approach
class User12 {
  name: string;
  constructor(readonly id: number, userName: string) {
    this.name = userName;
  }
}

let tom12 = new User12(1, 'Bill');
console.log('tom12.id: ', tom12.id, 'tom12.name: ',tom12.name )