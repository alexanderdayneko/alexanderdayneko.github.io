class HeroAbstractFactory {
	constructor() {}

	createWarrior() {}
	createWizard() {}
}

class HumanFactory extends HeroAbstractFactory {
	constructor(){
		super()
		console.log("Creating new human.")
	}
	createWarrior() {
		return new HumanWarrior();
	}
	createWizard() {
		return new HumanWizard();
	}
}

class ElfFactory extends HeroAbstractFactory {
	constructor(){
		super()
		console.log("Creating new elf.")
	}
	createWarrior() {
		return new ElfWarrior();
	}
	createWizard() {
		return new ElfWizard();
	}
}
class AbstractWarriorFactory {
    constructor() {}
}

class AbstractWizardFactory {
    constructor() {}
}

class ElfWarrior extends AbstractWarriorFactory {
	constructor(){
		super()
		console.log("Elven warrior created.")
	}
}

class HumanWarrior extends AbstractWarriorFactory {
	constructor(){
		super()
		console.log("Human warrior created.")
	}
}

class ElfWizard extends AbstractWizardFactory {
	constructor(){
		super()
		console.log("Elven wizard created.")
	}
}

class HumanWizard extends AbstractWizardFactory {
	constructor(){
		super()
		console.log("Human wizard created.")
	}
}


var elfFactory = new ElfFactory();
var elvenWizard = elfFactory.createWizard();

var humanFactory = new HumanFactory();
var humanWarrior = humanFactory.createWarrior();