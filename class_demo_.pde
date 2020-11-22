class Student {
  int studentNum;
  String firstName;
  String lastName;
  String[] classes = {};
  float gpa;
  
  void Student(int num, String fname, String lname, float grade){
    studentNum = num;
    firstName = fname;
    lastName = lname;
    gpa = grade;
    
  }
  
  float getStudentGpa(){
    return gpa;
  }
  
  int getStudentNum(){
    return studentNum;
  }
  
  void addStudentClasses(String[] classNames){
    for (int i = 0; i < classNames.length; i++){
      classes = append(classes, classNames[i]);
    }
  }
  
  void removeStudentClass(String className){
    for (int i = 0; i < classes.length; i++){
      if (classes [i] == className){
        removeClass(i);
      } 
    }
  }
  
  void removeClass(int index){
    for (int i = index; i < classes.length -1 ; i++ ){
      classes[i] = classes [i + 1];
    }
    //remove last element of classes array using shorten function
    classes = shorten(classes);
  }
  
  void changeStudentNum(int newNum){
    studentNum = newNum;
    println("new student number is "+ newNum);
  }
  
  void changeStudentFirstName(String newName){
    firstName = newName;
  }
  
  void printAllStudentInfo(){
    println ("number: " + studentNum);
    println ("name: " + firstName + " " + lastName);
    print ("classes: ");
    printArray (classes);
    println ("gpa: " + gpa);
  }
  
}
