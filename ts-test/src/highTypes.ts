interface Bird {
  fly(): void;
}
interface Fish {
  swim(): void;
}



function Duck(b: Bird, f: Fish): Bird & Fish {
  let res = <Bird & Fish>{};
  for (let s in b) {
    res[s] = b[s]
  }
  for (let s in f) {
    res[s] = f[s]
  }
  return res;
}


function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}