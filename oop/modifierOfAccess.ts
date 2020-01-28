// * Public class
// class User3 {
//   name: string;
//   year: number;
// }

class User3 {
  public name: string;
  public year: number;
}

//=============================================
// * Private class

class User4 {
  private _name: string;
  private _year: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._year = this.setYear(age);
  }

  private setYear(age: number): number {
    return new Date().getFullYear() - age;
  }

  public displayYear(): void {
    console.log("Год рождения: " + this._year);
  }

  public displayName(): void {
    console.log("name: " + this._name);
  }
}

let tom3 = new User4("Tom", 24);
tom3.displayName();
tom3.displayYear();
// console.log(tom3._name);
// tom3.setYear(45);

//===============================================

// * Protected class

class User5 {
  private name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public displayInfo(): void {
    console.log("name: " + this.name + "; age: " + this.age);
  }
}

class Employee extends User5 {
  private company: string;
  constructor(name: string, age: number, company: string) {
    super(name, age);
    this.company = company;
  }
  public showData(): void {
    console.log("Age: " + this.age);
    console.log(this.company);
    // console.log('Name: ' + this.name); // name is private
  }
}

let employee1 = new Employee("Anton", 22, "Freelance");
employee1.showData();
employee1.displayInfo();
