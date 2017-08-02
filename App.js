var langKnown;
(function (langKnown) {
    langKnown[langKnown["eng"] = 0] = "eng";
    langKnown[langKnown["spanish"] = 1] = "spanish";
    langKnown[langKnown["hindi"] = 2] = "hindi";
})(langKnown || (langKnown = {}));
var student = { Name: "dugu", Age: 3, Language: langKnown[langKnown.eng] };
var studentList = [{ Name: "deb", Age: 36, Language: langKnown[langKnown.eng] },
    { Name: "prag", Age: 31, Language: langKnown[langKnown.spanish] }];
studentList.push(student);
function GetStudentList(students) {
    students.forEach(function (element) {
        console.log(element.Name);
    });
}
GetStudentList(studentList);
//rest parameters 
function GetAge() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log(element);
    });
}
GetAge(1, 5, 6, 8, 8);
/////////////////////////////
var DisplayFullname = function (firstName, lastName) {
    return (console.log(firstName + "....." + lastName));
};
DisplayFullname("deb", "jagadev");
var DispayWifeFulleName = function (firstNameW, lastNameW) { return (console.log(firstNameW + "...." + lastNameW)); };
DispayWifeFulleName("Prag", "Routaray");
//******************classes/**************/////
//define class and methods 
var PersonalInfo = (function () {
    function PersonalInfo(dl, state) {
        this.dl = dl;
        this.state = state;
    }
    PersonalInfo.prototype.GetPersonalInfo = function () {
        return this.dl + "-" + this.state;
    };
    return PersonalInfo;
}());
var personalInfo = new PersonalInfo(12234, "NSW");
console.log(personalInfo.GetPersonalInfo());
//# sourceMappingURL=App.js.map