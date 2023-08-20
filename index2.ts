let studentName: string =
  "Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene Zion Wisdom Delight Stanyley Jessica Ayomide Regina Jemima Khalid Franklin Dennis Emmanuel Chinedu";

interface iData {
  name: string;
  score: number;
}

class school {
  branch: string;
  static count: number = 0;
  static mySchools: school[] = [];

  constructor(branch: string) {
    this.branch = branch;
    school.count++;
    school.mySchools.push(this);
  }

  registerStudents(): any {
    let numb: number = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

    return Array.from({ length: numb }, () => {
      let studentArr: string[] = studentName.split(" ");

      let randNumb: number = Math.floor(Math.random() * studentArr.length);

      let score: number = Math.floor(Math.random() * (100 - 45 + 1)) + 45;

      return { name: studentArr[randNumb], score };
    });
  }

  getTopInstanceResult(...args: any[]) {
    let res = args.flat();
    return res.sort((a, b) => {
      return b.score - a.score;
    })[0];
  }

  static getTopResult(...args: school[][]): iData[] {
    let data: iData[] = [];

    for (let i of args) {
      let x: any = i.sort((a: any, b: any) => {
        return b.score - a.score;
      })[0];
      data.push(x);
    }

    return data.sort((a, b) => {
      return b.score - a.score;
    });
  }

  static getSchoolsAvarageResult(...args: school[][]) {
    let data: number[] = [];

    for (let i of args) {
      let res: number =
        i
          .map((el: any) => {
            return el.score;
          })
          .reduce((a, b) => {
            return a + b;
          }) / i.length;

      data.push(res);
    }

    return data;
  }

  static getSchoolsBadResult(
    ...args: { branch: string; students: school[][] }[]
  ) {
    let data: { branch: string; point: number }[] = [];

    for (let i of args) {
      let res: number =
        i.students
          .map((el: any) => {
            return el.score;
          })
          .reduce((a, b) => {
            return a + b;
          }) / i.students.length;

      data.push({ branch: i.branch, point: parseFloat(res.toFixed(2)) });
    }

    data.sort((a, b) => {
      return b.point - a.point;
    });

    let failedResult = data.filter((el) => el.point <= 70);
    let passedResult = data.filter((el) => el.point >= 70);

    return { failedResult, passedResult };
  }

  playGuessGame() {
    return "computer guessing Game";
  }

  playCarRacing() {
    return "car racing Game";
  }

  startPlaying(choice: string) {
    if (choice === "racing") {
      return this.playCarRacing();
    } else if (choice === "guess") {
      return this.playGuessGame();
    }
  }
}

let schoolA = new school("Tolu");
let schoolB = new school("Wilma");
let schoolC = new school("OjoRoad");

console.clear();
// console.log(schoolA);

console.log(
  school.getTopResult(
    schoolA.registerStudents(),
    schoolB.registerStudents(),
    schoolC.registerStudents(),
  ),
);
// console.log(
//   school.getSchoolsBadResult(
//     { branch: schoolA.branch, students: schoolA.registerStudents() },
//     { branch: schoolB.branch, students: schoolB.registerStudents() },
//     { branch: schoolC.branch, students: schoolC.registerStudents() },
//   ),
// );

// console.log(schoolA.startPlaying("racing"));

// console.log(schoolA.registerStudents());

// let studentArr: string[] = studentName.split(" ");

// (max - min +1) + max

// let randNumb: number = Math.floor(Math.random() * 100);

// console.log(randNumb);
// console.log(studentArr[randNumb]);

// const getNumb = (max: number, min: number) => {
//   let rand = Math.floor(Math.random() * (max - min + 1)) + min;
//   return rand;
// };

// console.log(getNumb(100, 45));

// const arrData = [
//   { name: "Jemima", score: 62 },
//   { name: "Francis", score: 67 },
//   { name: "Stanyley", score: 93 },
//   { name: "Samuel", score: 55 },
// ];

// console.log(
//   arrData
//     .map((el) => {
//       return el.score;
//     })
//     .reduce((a, b) => {
//       return a + b;
//     }) / arrData.length,
// );
