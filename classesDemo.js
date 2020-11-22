class Student {
    //void Student(int num, String fname, String lname, float grade){
     //   studentNum = num;
     //   firstName = fname;
     //   lastName = lname;
     //   gpa = grade;
        
     // }

    constructor(num, fname, lname, grade){
        this.studentNum = num
        this.firstName = fname
        this.lastName = lname
        this.gpa = grade
        this.classes = []
    }

    getStudentGpa(){
        return this.gpa;
      }
      
      getStudentNum(){
        return this.studentNum;
      }

     addStudentClasses(classNames){
        for (i = 0; i < classNames.length; i++){
          this.classes = push(classes, classNames[i]);
        }
      }
      
     removeStudentClass(className){
        for (i = 0; i < classes.length; i++){
          if (this.classes[i] == className){
            removeClass(i);
          } 
        }
      }
      
     removeClass(index){
        for (i = index; i < classes.length -1 ; i++ ){
          this.classes[i] = this.classes [i + 1];
        }
        //remove last element of classes array using shorten function
        this.classes = pop(this.classes);
      }
      

      changeStudentNum(newNum){
        this.studentNum = newNum;
        console.log("new student number is "+ newNum);
      }
      
      changeStudentFirstName(newName){
        this.firstName = newName;
      }
      
      printAllStudentInfo(){
        console.log("number: " + this.studentNum);
        console.log("name: " + this.firstName + " " + this.lastName);
        console.log("classes: ");
        console.log(this.classes);
        console.log("gpa: " + this.gpa);
      }
    
}