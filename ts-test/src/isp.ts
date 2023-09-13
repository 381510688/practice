interface Animal {
  name: string;
  eat(something: string): void;
}
interface Person {
  work(): void;
}
}

class Chinese implements Animal,Person {
  name: 'Chinese';
  eat(something: string) {
    console.log(`中华美食${something}`)
  };
  work() {
    console.log('努力工作')
  };
}

let xiaoming = new Chinese()
xiaoming.work()

