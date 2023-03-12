const username: string = 'khaelDev'

const sum = (a: number, b: number): number => {
  return a+b
}

sum(1, 3)

// class Person {

//   private age: number
//   lastname: string

//   constructor(age: number, lastname: string) {
//     this.age = age
//     this.lastname = lastname
//   }
// }

class Person {
  constructor(private age: number, public lastname: string){ }
}

const nico = new Person(15, 'kenny')

