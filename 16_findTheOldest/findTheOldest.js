const currYear = 2025;

/**
 * 
 * @param {Array} people 
 */
const findTheOldest = function(people) {
    return people.reduce((prevOldest, currPerson) => {
        let prevAge = prevOldest.yearOfDeath === undefined ? currYear - prevOldest.yearOfBirth : prevOldest.yearOfDeath - prevOldest.yearOfBirth,
            currAge = currPerson.yearOfDeath === undefined ? currYear - currPerson.yearOfBirth : currPerson.yearOfDeath - currPerson.yearOfBirth;

        return prevAge < currAge ? currPerson : prevOldest;
    }, {yearOfBirth: 1, yearOfDeath: 0});
};

console.log(findTheOldest([
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]));
console.log(findTheOldest([
    {
    name: "Carly",
    yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]));
console.log(typeof findTheOldest([
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]));

// Do not edit below this line
module.exports = findTheOldest;
