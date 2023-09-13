interface LowerInterface {
  work(): void;
}
class Lower1 implements LowerInterface {
  work(){
    console.log('lower1')
  }
}
class Lower2 implements LowerInterface {
  work(){
    console.log('lower2')
  }
}
class Upper {
  lower: LowerInterface ;
  setLower(l: LowerInterface) {
    this.lower = l
  }
	// 统一调用
	work () {
    this.lower.work()
  }
}

let u:Upper = new Upper()
u.setLower(new Lower1())
u.work()
u.setLower(new Lower2())
u.work()