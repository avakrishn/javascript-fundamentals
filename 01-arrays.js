'use strict';
/* ARRAY METHODS */

const inventorsList = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, //
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const peopleList = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
    // Call filter method on an array and pass it a function that loops over every item in the array and will only keep the  items from the array that satisfy the condition/ return true 

        const inventorsBornIn1500s = inventorsList.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
         // keeps the inventor when true is returned 
           
        
        //   console.table(inventors1500); // Converts array of objects into table where keys are the columns - visualize in developer tools
        console.log("------------------------------------------------")
        console.log("inventorsBornIn1500s: ", inventorsBornIn1500s);
        console.log("------------------------------------------------")

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
    // Call map method on an array and pass it a function that performs an action on the array and returns a new array of the same length as the original array

    const firstAndLastNames = inventorsList.map(inventor => `${inventor.first} ${inventor.last}`);

    console.log("firstAndLastNames: ", firstAndLastNames);
    console.log("------------------------------------------------")


  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
    // Call sort method on an array and pass it a function with 2 items from the array. Sort the two items by comparing their values to each other. By returning 1 or -1 will either bubble the items up and down within the array

    const oldestToYoungestInventors = inventorsList.sort((inventorOne, inventorTwo) => inventorOne.year - inventorTwo.year);

    const oldestToYoungestInventorsAlt = inventorsList.sort((inventorOne, inventorTwo) => inventorOne.year > inventorTwo.year ? 1 : -1);

    console.log("oldestToYoungestInventors: ", oldestToYoungestInventors);
    console.log("------------------------------------------------")

    console.log("oldestToYoungestInventorsAlt: ", oldestToYoungestInventorsAlt);
    console.log("------------------------------------------------")



    /*
        sorting in ascending order from least to greatest or oldest to newest:
            const result = arr.sort((a,b) => a-b);

        sorting in descending order from greatest to least or newest to oldest:
            const result = arr.sort((a,b) => b-a);

        if(a > b)  return 1; 
        else return -1;

        function(a, b){return a - b}

        When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

        If the result is negative a is sorted before b.

        If the result is positive b is sorted before a.

        If the result is 0 no changes is done with the sort order of the two values.

    
    */


  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
    // Call reduce method on an array and pass in a function that takes in two arguments: an argument to keep track of the running total or result of the operation/ action and another argument which is each element in the array. Returns a total number after performing the same operation (through the function). Reduces the array to a single value. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    
  

    const yearsLivedByInventors = inventorsList.reduce((total, inventor) => {return total + (inventor.passed - inventor.year)}, 0);
    // Here 0 is initializing total to 0
    

    console.log("yearsLivedByInventors: ", yearsLivedByInventors);
    console.log("------------------------------------------------")


  // 5. Sort the inventors by years lived

    const inventorsByYearsLived = inventorsList.sort((inventorOne, inventorTwo) => {
        let inventorOneYears = inventorOne.passed - inventorOne.year;
        let inventorTwoYears = inventorTwo.passed - inventorTwo.year;

        return (inventorOneYears > inventorTwoYears) ? -1 : 1;

    })

    console.log("inventorsByYearsLived: ", inventorsByYearsLived);
    console.log("------------------------------------------------")


  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  /*
      Run the follwing code in the console of the above link
  */
    // const links = Array.from(document.querySelectorAll(".mw-category a"));

    // const links = [...document.querySelectorAll(".mw-category a")];
    // const boulevards = links
    //                         .map(link => link.textContent)  // could use innerText or innerHTML or text
    //                         .filter(text => text.includes("de"));

    // console.log("Boulevards containing de: ", boulevards);
    // console.log("------------------------------------------------")



  // 7. sort Exercise
  // Sort the people alphabetically by last name

    const sortPeopleByLastName = peopleList.sort((personOne, personTwo) => {

         // one way
         const personOneLastName = personOne.split(", ")[0];
         const personTwoLastName = personTwo.split(", ")[0];
 
         return (personOneLastName < personTwoLastName) ? -1 : 1;


        // Another way

        // let length = (personOne.length < personTwo.length) ? personOne.length : personTwo.length;
        // // let index = 0;
        // for(let i = 0; i < length; i++){
        //     if(personOne[i] !== personTwo[i]){
        //         if(personOne[i] < personTwo[i]){
        //             return -1;
        //         }else{
        //             return 1;
        //         }
        //     }
        // }
        
        // Another way

        // let personOneEndIndex = personOne.indexOf(",");
        // let personTwoEndIndex = personTwo.indexOf(",");
        
        // let personOneLastName = personOne.slice(0,personOneEndIndex);
        // let personTwoLastName = personTwo.slice(0, personTwoEndIndex);
        
        // return (personOneLastName < personTwoLastName) ? -1 : 1; 

       
        
    })

    console.log("Sort people by last name: ", sortPeopleByLastName);
    console.log("------------------------------------------------")


  // 8. Reduce Exercise
  // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const tally = data.reduce((instances, item) => {
        
        if(!instances[item]) instances[item] = 0;
        instances[item]++;

        return instances;

        // Another way
        // if(instances[item]) instances[item]++;
        // else instances[item] = 1;
        // return instances

    }, {});

    console.log("Instances: ", tally);
    console.log("------------------------------------------------")
