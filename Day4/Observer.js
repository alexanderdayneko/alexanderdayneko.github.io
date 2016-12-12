class Subject {
    constructor() {}

    Attach (Observer){
        this.observers.push(Observer);
        console.log('Observer attached')
    }

    Dettach (Observer){
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
        console.log('Observer deattached')
    }

    Notify (){
        console.log('Notification')
        for(var i in this.observers){
            this.observers[i].Update(this);
        }
    }
}

class ConcreteSubject extends Subject {
    constructor() {
        super()
        this.subjectState = null
        this.observers = []
        console.log('ConcreteSubject created')
    }

    GetState() {
        return this.subjectState;
    }

    SetState(state) {
        this.subjectState = state;
        this.Notify()
    }
}

class Observer {
    constructor() {}
    Update () {}
}

class ConcreteObserver extends Observer {
    constructor() {
        super()
        this.observerState = '';
        console.log('ConcreteObserver created')
    }

    Update (Subject){
        this.observerState = Subject.GetState();
        console.log('Observer new state: ' + this.observerState)
    }
}


    var observer1 = new ConcreteObserver();
    var observer2 = new ConcreteObserver();

    var subjectToBeObserved = new ConcreteSubject();

    subjectToBeObserved.Attach(observer1);
    subjectToBeObserved.Attach(observer2);
    subjectToBeObserved.SetState('new state');
