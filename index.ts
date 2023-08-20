// class student {
//   public name: string;
//   public readonly email: string;
//   public count: number;
//   private age?: number;
//   protected height?: number = 7;
//   static total: number = 0;

//   constructor(name: string, email: string, age?: number, height?: number) {
//     this.height = height;
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     student.total++;
//   }

//   get getStudent() {
//     return {
//       name: this.name,
//       email: this.email,
//       age: this.age,
//       height: this.height,
//     };
//   }

//   set changeHeight(value: number) {
//     this.height = value;
//   }

//   set changeAge(value: number) {
//     this.age = value;
//   }
// }

// class studentSet extends student {
//   public set: number;

//   constructor(name: string, email: string, height: number, set: number) {
//     super(name, email, height);
//     this.set = set;
//   }

//   set changeHeight(value: number) {
//     this.height = value;
//   }

//   get getStudentSet() {
//     return {
//       name: this.name,
//       email: this.email,
//       height: this.height,
//       set: this.set,
//     };
//   }
// }

// console.clear();
// let studentA = new student("Peter", "peter@test.com");
// let studentB = new student("Peter", "peter@test.com");

// let studentSetA = new studentSet("Peter", "peter@test.com", 5, 8);

// console.log();
// console.log(studentA.getStudent);

// console.log();
// // studentA.age = 69
// console.log((studentA.changeHeight = 29));

// console.log(studentA.getStudent);

// console.log();
// console.log((studentA.changeAge = 20));

// console.log(studentA.getStudent);

// console.log("reading total student Entry: ", student.total);

// const counter = (value: number) => {
//   value--;
//   return value;
// };

// console.log("reading: ", counter(2));

console.clear();

interface iPoint {
  name: string;
  xPoint: number;
  yPoint: number;
}

interface iResult {
  nameA: string;
  nameB: string;
  point: number;
}

interface iResultData {
  myName: string;
  yourName: string;
  point: number;
}

class studentPoint {
  name: string;
  xPoint: number;
  yPoint: number;
  static total: number = 0;
  static totalStudent: studentPoint[] = [];

  constructor(name: string, xPoint: number, yPoint: number) {
    this.name = name;
    this.xPoint = xPoint;
    this.yPoint = yPoint;
    studentPoint.total++;
    studentPoint.totalStudent.push(this);
  }

  get getStudent() {
    return { name: this.name, xPoint: this.xPoint, yPoint: this.yPoint };
  }

  set changeXPoint(value: number) {
    this.xPoint = value;
  }

  set changeYPoint(value: number) {
    this.xPoint = value;
  }

  static getStudentDistance(studentA: iPoint, studentB: iPoint) {
    let newPointX = studentA.xPoint - studentB.xPoint;
    let newPointY = studentA.yPoint - studentB.yPoint;

    let point = Math.sqrt(Math.pow(newPointX, 2) + Math.pow(newPointY, 2));

    return { nameA: studentA.name, nameB: studentB.name, point };
  }

  static getMyPositionFromStudent() {
    const myDataSample = studentPoint.totalStudent;
    // let myDetail = myDataSample[0];
    let result: iResultData[] = [];

    for (let i of myDataSample) {
      if (i.name === studentPoint.totalStudent[0].name) {
        console.log("");
      } else {
        let changeInX = studentPoint.totalStudent[0].xPoint - i.xPoint;
        let changeInY = studentPoint.totalStudent[0].yPoint - i.yPoint;

        let point = Math.sqrt(Math.pow(changeInX, 2) + Math.pow(changeInY, 2));

        result.push({
          myName: studentPoint.totalStudent[0].name,
          yourName: i.name,
          point: parseFloat(point.toFixed(2)),
        });
      }
    }

    let mainResult = result.filter((el: iResultData) => el.yourName === "Joan");

    return mainResult[0];
  }

  static getMyPositionFromStudentDynamic(studentA: string, studentB: string) {
    const myDataSample = studentPoint.totalStudent;
    // let myDetail = myDataSample[0];
    let result: iResultData[] = [];

    // let myData = studentPoint.totalStudent.filter((el) => {
    //   return el.name === studentA;
    // });

    // return myData;

    let myData = studentPoint.totalStudent.filter((el) => {
      return el.name === studentA;
    });

    for (let i of studentPoint.totalStudent) {
      if (i.name === studentPoint.totalStudent[0].name) {
        console.log("");
      } else {
        let changeInX = studentPoint.totalStudent[0].xPoint - i.xPoint;
        let changeInY = studentPoint.totalStudent[0].yPoint - i.yPoint;

        let point = Math.sqrt(Math.pow(changeInX, 2) + Math.pow(changeInY, 2));

        // console.log(point);

        result.push({
          myName: studentPoint.totalStudent[0].name,
          yourName: i.name,
          point: parseFloat(point.toFixed(2)),
        });
      }
    }

    let mainResult = result.filter((el: iResultData) => el.yourName === "tobi");

    // console.log(mainResult);

    return mainResult;
  }

  static getMyPositionofTheFarthestStudent() {
    const myDataSample = studentPoint.totalStudent;
    // let myDetail = myDataSample[0];
    let result: iResultData[] = [];

    for (let i of myDataSample) {
      if (i.name === studentPoint.totalStudent[0].name) {
        console.log("");
      } else {
        let changeInX = studentPoint.totalStudent[0].xPoint - i.xPoint;
        let changeInY = studentPoint.totalStudent[0].yPoint - i.yPoint;

        let point = Math.sqrt(Math.pow(changeInX, 2) + Math.pow(changeInY, 2));

        result.push({
          myName: studentPoint.totalStudent[0].name,
          yourName: i.name,
          point: parseFloat(point.toFixed(2)),
        });
      }
    }

    return result;
  }
}

let peter = new studentPoint("Peter", 3, 8);
let joan = new studentPoint("joan", 7, 4);
let stanley = new studentPoint("stanley", 1, 5);
let daniel = new studentPoint("daniel", 8, 3);
let prince = new studentPoint("prince", 5, 6);
let tobi = new studentPoint("tobi", 10, 4);
let habeeb = new studentPoint("habeeb", 19, 7);

let result: iResult = studentPoint.getStudentDistance(prince, daniel);

console.log();
// console.log(
//   `The distance between ${result.nameA} and ${
//     result.nameB
//   } is ${result.point.toFixed(2)}m `,
// );

//  Find the Distance of Tobi from Joan.

console.clear();
console.log();
console.log("starting...");
// console.log(

//   `The Distance of ${
//     studentPoint.getMyPositionFromStudent().yourName
//   } from me is: ${studentPoint.getMyPositionFromStudent().point}m`,
// );

console.log();
console.log(studentPoint.getMyPositionofTheFarthestStudent());

let arr = [6, 8.9, 3.5, 8, 0.4];
let arrMap = [
  { myName: "Peter", yourName: "joan", point: 5.66 },
  { myName: "Peter", yourName: "stanley", point: 3.61 },
  { myName: "Peter", yourName: "daniel", point: 7.07 },
  { myName: "Peter", yourName: "prince", point: 2.83 },
  { myName: "Peter", yourName: "tobi", point: 8.06 },
  { myName: "Peter", yourName: "habeeb", point: 16.03 },
];

let newMap = arrMap.map((el) => {
  return el.point;
});

let arr1 = [6, 8.9, 3.5, 8, 0.4, 9, 2, 11];
// console.log(Math.max(...newMap));

console.log(
  arrMap.sort((a: any, b: any) => {
    return b.point - a.point;
  }),
);
