interface IDomElement {
  print();
}

/**
 * TextNode defines a text DOM element
 */
class TextNode implements IDomElement {
  private text: string;

  constructor(textContent: string) {
    this.text = textContent;
  }  

  print() {
    console.log(this.text);
  }
}

class DomElement implements IDomElement {
  private text: string;
  private element: string;
  elements: IDomElement[];

  constructor(element: string, text?:string) {
    this.element = element;
    this.text = text;
    this.elements = [];
  }

  print() {
    console.log('<${this.element}>');
    if (this.text) {
      console.log(this.text);
    }

    for (let element of this.elements) {
      element.print();
    }
    console.log('<${this.element}>');
  }
}