var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
let current = Season.Summer;
console.log("current", current);
let currentValue = Season[2];
console.log("currentValue[]", currentValue);
current = Season.Autumn;
console.log("current", current);
currentValue = Season[3];
console.log("currentValue", currentValue);
//# sourceMappingURL=enum.js.map