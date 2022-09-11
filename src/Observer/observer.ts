export { }

interface ISubject {
  subscribe(observer: Observer):void
  unsubscribe(observer: Observer):void
  notify():void
}

interface IObserver {
  update():void
}

class Subject implements ISubject {
    private observers:Observer[] = [];

    subscribe(observer:Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer.id === element.id
        })
    }
    notify() {
        this.observers.forEach(observer => {
            observer.update();
        })
    }
}

class Observer implements IObserver {
    constructor(public readonly id:string) {}
    update() {
       console.log(`Observer ${this.id} is updating...`)
       console.log(`Do whatever action necessary`)
    }
}

const firstObserver = new Observer('UserRegister');
const secondObserver = new Observer('UserManagement');

const subject = new Subject();

subject.subscribe(firstObserver);
subject.notify();
console.log("-----")
subject.subscribe(secondObserver);
subject.notify();
console.log("-----")
subject.unsubscribe(secondObserver);
subject.notify();