class User6 {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  public displayInfo(): void {
    console.log("name: " + this._name + "; age: " + this._age);
  }
}

class User7 {
  constructor(private name: string, private age: number) {}
  public displayInfo(): void {
    console.log("name: " + this.name + "; age: " + this.age);
  }
}

const user6Private = new User6("Bonny", 33);
user6Private.displayInfo();

const user7Private = new User7("Django", 22);
user7Private.displayInfo();

// Подобным образом, если мы хотим сделать свойства публичными, то следует использовать модификатор public:
class User8 {
  constructor(public name: string, public age: number) {}
}
