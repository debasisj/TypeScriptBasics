enum langKnown{eng, spanish, hindi}
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
       console.log(element.name)
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