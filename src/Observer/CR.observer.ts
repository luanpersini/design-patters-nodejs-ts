export { }

interface ISubject {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(news:String):void
}

interface IObserver {
    update(news:string):void
}

class CR7SocialMedia implements ISubject {
    private observers:Observer[] = [];
    subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer.name !== element.name
        })
    }
    notify(news:string) {
        this.observers.forEach(observer => {
            observer.update(news);
        })
    }
}

class Observer implements IObserver {
    constructor(public readonly name:string) {}
    private feed:string[] = []; 
    update(news:string) {
        this.feed.push(news)
       console.log(`${this.name} recieved  a news`)
    }
    showFeed() {
        console.log(this.name + ":" + this.feed)
    }
}

const firstFan = new Observer("alice");
const secondFan = new Observer("bob");

const cr7 = new CR7SocialMedia();

cr7.subscribe(firstFan);
cr7.subscribe(secondFan);
cr7.notify("CR7 has sent off");
cr7.unsubscribe(secondFan);
cr7.notify("CR7 scored a goal against Inter Milan.");
firstFan.showFeed();
secondFan.showFeed()