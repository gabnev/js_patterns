// constructor function
function EventObserver() {
  // collection of functions
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`${fn.name} is subscribed`);
  },
  unsubscribe: function(fn) {
    // filter OUT from the list WHATEVER matches the callback function.
    // If there is no match, the callback gets to stay on the list.
    // The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`${fn.name} is unsbscribed`);
  },
  fire: function() {
    this.observers.forEach((item) => {
      item.call();
    })
  }
}

const click = new EventObserver();

// Event listeners

document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrentMs);  
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMs);  
});

document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurrentSec);  
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentSec);  
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// click handler
const getCurrentMs = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSec = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}