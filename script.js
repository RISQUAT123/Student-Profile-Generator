// Create an array of student objects
const students = [
    {
      firstName: "Risquat",
      lastName: "Adekoya",
      age: 22,
      score: 92,
      subjectss: ["Chemistry", "Mathematics", "Biology"]
    },
    {
      firstName: "Aisha",
      lastName: "Tauheed",
      age: 22,
      score: 85,
      subjects: ["English-language", "Mathematics", "Psychology"]
    },
    {
      firstName: "Aisha",
      lastName: "Ismail-Ibrahim",
      age: 21,
      score: 97,
      subjects: ["Physics", "Chemistry", "Biology"]
    },
    {
      firstName: "Amina",
      lastName: "Abdullahi",
      age: 23,
      score: 78,
      subjects: ["Commerce", "Economics", "Civic-Education"]
    },
    {
      firstName: "Tawakalt",
      lastName: "Yisa",
      age: 20,
      score: 91,
      subjects: ["CRS", "Economics", "Civic-Education"]
    }
  ];
  
  // 1. Using destructuring to extract values from each student object
  console.log("--- Student Information (Using Destructuring) ---");
  students.forEach(student => {
    // Destructuring the student object
    const { firstName, lastName, age, score, subjects } = student;
    
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Score: ${score}`);
    console.log(`Courses: ${Array.isArray(subjects) ? subjects.join(", ") : "None"}`);
    console.log("---");
  });
  
  // 2. Using .map() to create a new array of strings describing each student
  const studentDescriptions = students.map(student => {
    // Destructuring the student object with default values
    const { firstName = "", lastName = "", age = 0, score = 0, subjects = [] } = student;
    // Using template literal to create a description
  const pronoun = firstName === "Emma" || firstName === "Sophia" || firstName === "Aisha" ? "She" : "He";
  return `${firstName} ${lastName} is ${age} years old and scored ${score}. ${pronoun} is taking: ${Array.isArray(subjects) ? subjects.join(", ") : "None"}`;
});
  
  // 3. Using .forEach() to log each student's details
console.log("\n--- Student Descriptions (Using map and forEach) ---");
studentDescriptions.forEach((description, index) => {
  console.log(`Student ${index + 1}: ${description}`);
});