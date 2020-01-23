enum Season {
  Winter,
  Spring,
  Summer,
  Autumn
}

let current: Season = Season.Summer;
console.log("current", current);
let currentValue: string = Season[2];
console.log("currentValue[]", currentValue);
current = Season.Autumn;
console.log("current", current);
currentValue = Season[3];
console.log("currentValue", currentValue);
