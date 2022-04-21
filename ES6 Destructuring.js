//1.

//8
//1846

//2.

//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//3.

//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//your name is undefined and you like green

//4.

//Maya
//Marisa
//Chi

//5.

//'Raindrops on roses'
//'whiskers on kittens'
// ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

//6.

//[10,30,20]

//7.

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { a, b } = obj.numbers;

//8.

[arr[0], arr[1]] = [arr[1], arr[0]]

//9.
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });
