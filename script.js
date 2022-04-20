// // Defind object Literal <===

// let user = {
//   // Propertes
//   fristNmae: "Ahmed",
//   lastName: "Mohamed",
//   age: 23,
//   adresses: {
//     egy: "cairo",
//     usa: "broklen",
//     mainAdres: () => `your main adres is in: ${this.egy}`,
//   },
//   // Methods
//   sayMyName: () => `User Full Name: ${this.fristNmae} ${this.lastName}`,

//   ageInDays: () => `Your Age In Days Is: ${user.age * 365}`,
// };

// // Accsessing Object Propertes
// console.log(user.fristNmae); // Dot Notaion
// console.log(user["lastName"]); // Braket Notaion
// console.log(user.adresses.egy);
// console.log(user["adresses"]["usa"]);

// // Accsessing Object Methods
// console.log(user.sayMyName());
// console.log(user.adresses.mainAdres());
// console.log(user.ageInDays());

// ******************************************* //

// // Defind Object With new Keyword <===

// let myUser = new Object();

// myUser.fristNmae = "Ahmed";
// myUser.lastName = "Mohamed";
// myUser["age"] = 23;

// myUser.sayMyName = () => `Your Name Is: ${myUser.fristNmae} ${myUser.lastName}`;

// console.log(myUser.fristNmae);
// console.log(myUser["lastName"]);
// console.log(myUser.sayMyName());

// ******************************************* //

// // Defind Object With Object.creat()

// let mainObj = {
//   hasDiscount: true,
//   showMassage: function () {
//     return `You ${this.hasDiscount ? "" : "Don't "}Have Discount`;
//   },
// };

// console.log(mainObj.hasDiscount);
// console.log(mainObj.showMassage());

// let oterObj = Object.create(mainObj);
// oterObj.hasDiscount = false;
// console.log(oterObj.hasDiscount);
// console.log(oterObj.showMassage());

// let lastObj = Object.create(mainObj);
// console.log(lastObj.hasDiscount);
// console.log(lastObj.showMassage());

// ******************************************* //

// // Defind Object With Object.assign()

// const src1 = {
//   prop1: "value1",
//   prop2: "Value2",
//   method1: function () {
//     return `Method 1`;
//   },
// };

// const src2 = {
//   prop3: "Value3",
//   prop4: "Value4",
//   method2: function () {
//     return `Method 2`;
//   },
// };

// const tearget = {
//   propo5: "Value5",
// };

// //Takes A Copy From One Or More Obeject To Your Target Obeject
// Object.assign(tearget, src1, src2, { prop6: "value6" });
// console.log(tearget);

// // Creat A New Object And Takes A Copy From Oter Object's
// const myObj = Object.assign({}, tearget, { prop7: "Value7" });
// console.log(myObj);

// ******************************************* //

// // Delete Operetor And Freeze, DefineProperty Method's

// const users = {
//   fristName: "Ahmed",
//   lastNmae: "Mohamed",
// };

// // Use It To Delete Object Propertys Only
// delete users.fristName;
// console.log(users);

// // Use It To Prevent Any Modifications In The Object Or Propertys
// const freezedObj = Object.freeze(users);
// console.log(freezedObj);
// console.log(delete users["lastNmae"]);

// // Use It To Declare Object Key And Value & Control There Flags
// const emptyObj = {};
// Object.defineProperty(emptyObj, "a", {
//   value: 1,
//   configurable: false,
// });

// console.log(emptyObj);

// ******************************************* //

// // for... in loop

// let finalData = "";

// const user = {
//   name: "Ahmed",
//   age: 23,
//   country: "Egypt",
// };

// for (let info in user) {
//   finalData += `<div> ${info}: ${user[info]} </div>`;
// }

// document.getElementById("info").innerHTML = finalData;

// ******************************************* //

// // Constructor Function

// // Creat Constructor Function Frist Letter is Captal "Best Practies"
// function User(frisName, lastName, age) {
//   // This Is The Created Object From The Constructor Function
//   this.frisName = frisName;
//   this.lastName = lastName;
//   this.age = age;
// }

// let user = new User("Ahmed", "Mohamed", 23);
// console.log(user);

// ******************************************* //

// // Prototype
// // We Can use It To accsses Inherted Prototype From Constriuctor Function Or Add Method From Our Creation

// function User(name) {
//   this.name = name;
//   this.wellcome = function () {
//     return `Welcome ${this.name}`;
//   };
// }

// let user = new User("Ahmed");
// console.log(user.wellcome());

// User.prototype.addTitle = function () {
//   return `Mr. ${this.name}`;
// };

// console.log(user);

// let obj = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// let obj2 = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// // This Is To Creat Glopal Prototype In Evrey
// Object.prototype.name = "Ahmed";

// console.log(obj);
// console.log(obj2);

// ******************************************* //

// //Class

// class User {
//   constructor(name, email) {
//     (this.name = name), (this.email = email);
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }
// }

// let user1 = new User("balloota", "balloota@gmail.com");
// let user2 = new User("ballo", "ballo@icloud.com");

// console.log(user1);
// console.log(user2.sayHello());

// ******************************************* //

// // Calss static Propertyies & Methods Only Works With Class Not Objects

// class User {
//   // static Propertyies
//   static counter = 0;

//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     User.counter++;
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }

//   // static Methods
//   static countObject = function () {
//     return `${this.counter} Objects Created`;
//   };
// }

// let user1 = new User("balloota", "balloota@gmail.com");
// let user2 = new User("ballo", "ballo@icloud.com");

// console.log(user1);
// console.log(user2.sayHello());

// console.log(User.countObject());

// // Extend
// // Use It When You Want To Inhert Vlaus Value To Anoter

// class Admain extends User {
//   constructor(name, email) {
//     super(name, email);
//   }

//   // Over Write Method From The Parent
//   sayHello() {
//     return `Hello ${this.name} Overe Writing`;
//   }

//   // Get Info Method
//   get showInfo() {
//     return `Name: ${this.name}, Email: ${this.email}`;
//   }

//   // Set Info Method
//   set changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// let admain1 = new Admain("7amoOoO Te5a", "Afeona@gmail.com");

// console.log(admain1.sayHello());

// console.log(admain1.showInfo);

// admain1.changeEmail = "roznama@bangoYaEmad.com";

// console.log(admain1.email);

// ******************************************* //

// Object Meta Data Object.defineProperty(objName, property, descriptor)

// const myObj = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObj, "c", {
//   // To Prevent Any Modiefication To This Value Key
//   writable: false,
//   // To Hide The Value During LoopIng Throw It
//   enumerable: false,
//   // To Prevent Any Modiefication To This Value Or Any Data
//   configurable: false,
//   value: 3,
// });

// // To Declare Multibale Object At Once
// Object.defineProperties(myObj, {
//   d: {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     value: 4,
//   },
//   e: {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     value: 5,
//   },
// });

// console.log(myObj);

// // To See Meta Data For Selected Value
// console.log(Object.getOwnPropertyDescriptor(myObj, "c"));
