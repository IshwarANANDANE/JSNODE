let student= {
    name:"Marie",
    age:20,
    courses:[]
};

student.age= 21;
student.grade= "A";
student.courses.push("Math","Physics","Chemistry");
let physicsIndex = student.courses.indexOf("Physics");
let NewCoursesArray =student.courses.slice(0,2);

console.log("Objet student modifié :", student);
console.log("Index de 'Physics' :", physicsIndex);
console.log("Nouveau tableau de matieres extraites :", NewCoursesArray);

