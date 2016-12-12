class Element {
	render() {}
}

class GraySpan extends Element {
	constructor(html) {
    super();
		this.html = html
	}
	render(){
		return "<span style='background: #EEEEEE;'>" + this.html + "</span>";      
	}
}

class Decorator extends Element {
	constructor(element){
    super();
		this.element = element
	}
	render() {
		this.element.render();
	}
}

class CoolBorderDecorator extends Decorator {
	constructor(element) {
		super(element);
	}

	render() {
		return "<div style='border: 2px dashed #AAAAAA;'>" + 
				this.element.render() +
			"</div>";
	}
}

var span = new GraySpan("My span");
document.write(span.render());
var decoratedSpan = new CoolBorderDecorator(span);

document.write(decoratedSpan.render());