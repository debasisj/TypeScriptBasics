enum langKnown{eng, spanish, hindi}
///////////Interface///////
interface PersonInfo{
    Name: string
    Age:Number
    Address: string
    Language: langKnown
}
interface studentInfo{
    Name:string,
    Age: number,
    Language:string
}
let student:studentInfo = {Name:"dugu", Age:3, Language:langKnown[langKnown.eng]} 
let studentList:studentInfo[] = [{Name:"deb", Age:36, Language: langKnown[langKnown.eng]},
                   {Name: "prag", Age:31, Language:langKnown[langKnown.spanish]}]
studentList.push(student)
function GetStudentList(students:any[]){
   students.forEach(element => {
       console.log(element.Name)
   });
}
GetStudentList(studentList);

//rest parameters 
function GetAge(...nums: number[]){
    nums.forEach(element => {
        console.log(element)
    });
}
GetAge(1,5,6,8,8)
/////////////////////////////
let DisplayFullname =  function(firstName:string, lastName:string){
    return (console.log(firstName+"....."+lastName));
}
DisplayFullname("deb", "jagadev");

let DispayWifeFulleName = (firstNameW:string, lastNameW:string) =>{return(console.log(firstNameW+"...."+lastNameW))}
DispayWifeFulleName("Prag","Routaray")

//******************classes/**************/////

//define class and methods 
class PersonalInfo{


    constructor(private dl,private state){

    }

    GetPersonalInfo():string{
        return this.dl +"-"+this.state;
    }
}

let personalInfo = new PersonalInfo(12234,"NSW");
console.log(personalInfo.GetPersonalInfo());

