//1.

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

//2. 

const findMin = (...arguments) => Math.min(...arguments);

//3. 

const mergeObjects = (ob1, ob2) => ({ ...ob1, ...ob2 });

//4.

const doubleAndReturnArgs = (arr, ...arguments) => [...arr, ...arguments.map(value => value * 2)];

//5.

const removeRandom = items => {
    let randomIdx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIdx), ...items.slice(randomIdx + 1)];
};

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
};

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
};