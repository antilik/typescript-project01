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
tom10.name = 'Tom';
console.log('tom10.name: ', tom10.name);;
