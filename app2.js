// SINGLETON

const singleton = (() => {
  let instance;

  const createInstance = () => {
    const object = new Object({ id: 1, name: 'Gabriel' });
    return object;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

// singletons are made to return a single instance of an object

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();
console.log(instanceA === instanceB);