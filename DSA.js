class Stack {
  #list = [];

  push(item) {
    //implement me
    this.#list.push(item);
  }

  pop() {
    //implement me
    const list = this.#list;
    return list.length ? list.pop() : null;
  }

  peek() {
    //implement me
    const list = this.#list;
    return list.length ? list.at(-1) : null;
  }

  get size() {
    //implement me
    return this.#list.length;
  }
}

const stack = new stackOne();
stack.push('dog');
stack.push('cat');
stack.push('monkey');
console.log(stack.pop());
console.log(stack.peek());

class Queue {
  #list = [];
  #index = 0;

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    const list = this.#list;
    const item = list[this.#index];
    //list.length ? list.shift() : null;
    this.#index++;
    return item;
  }

  hasNext() {
    // return !!list.length;
    return !!this.size;
  }
}

//check syntax, take a string of code
//analyze string of code
//determine if syntax is correctly formatted
//loop string & look at it character by character {}&()
//if statement
//if it's an opening, remember that by adding it to our stack.
//if it's closing, the last thing that was open needs to match that.
//...off the top of the stack
//check stack and see if there is an open without a close
//stack will naturally handle nesting

function checkSyntax(input) {
  const stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push(code[i]);
    }
    if (input[i] === '{') {
      stack.push(input[i]);
    }
    if (input[i] === ')') {
      if (stack.pop() !== '(') return false;
    }
    if (input[i] == '}') {
      if (stack.pop() !== '{') return false;
    }
  }
  return !stack.size;
}
