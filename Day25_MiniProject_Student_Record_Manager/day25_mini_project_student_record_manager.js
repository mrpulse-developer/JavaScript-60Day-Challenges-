// 💛 JavaScript code for Mini Project: Student Record Manager (Day 25)

const students = [];

// Add Student
function addStudent(name, grade) {
  students.push({ name, grade });
  console.log(`✔️ Student Added: ${name}`);
}

// List Students
function listStudents() {
  console.log("\n📘 Student Records:");
  students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - Grade: ${student.grade}`);
  });
}

// Search Student
function findStudent(name) {
  const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
  console.log("\n🔍 Search Result:", student || "No student found!");
}

// Update Student
function updateStudent(name, newGrade) {
  const student = students.find(s => s.name === name);
  if (student) {
    student.grade = newGrade;
    console.log(`✏️ Updated ${name}'s grade to ${newGrade}`);
  } else {
    console.log("❌ Student not found!");
  }
}

// Delete Student
function deleteStudent(name) {
  const index = students.findIndex(s => s.name === name);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(`🗑️ Deleted student: ${name}`);
  } else {
    console.log("❌ Student not found!");
  }
}

// Demo
addStudent("Akash", "A");
addStudent("Rahul", "B");
listStudents();
findStudent("Akash");
updateStudent("Rahul", "A+");
deleteStudent("Akash");
listStudents();
