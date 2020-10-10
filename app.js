// create module

const UIctrl = (function () {
  // private access
  const _text = 'Hello World';
  const changeText = () => {
    document.querySelector('h1').innerText = _text;
  }

  // public access
  return {
    callChangeText: () => {
      changeText();
      console.log(_text);
    }
  }
})();

UIctrl._text = 'Hi!';
console.log(UIctrl._text)

UIctrl.callChangeText();

console.log('');

// Using revealing module
const PersonCtrl = (() => {
  const arr = [];

  const add = person => arr.push(person);

  const get = id => {
    return arr.find(person => {
      return person.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

PersonCtrl.add({id: 1, name: 'Gabriel'});
console.log(PersonCtrl.get(1));

// *************
// The difference between both?
// In the module you can add functions and actions without having to "map" each action inside the object that is public! But the revealing method is much cleaner.