const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { books } = require('./datasets/books');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { clubs } = require('./datasets/clubs')
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(arr) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

       const result = arr.filter(cat => {
          return  cat.color === 'orange'
        }).map(cat=>{
          return cat.name
        })
        return result

    // Annotation:
    // do not forget to return variable (in this case result)
  },
  sortByAge(Arr) {
    // Sort the kitties by their age
    
      const reArrange = Arr.sort((a,b)  => {
       return b.age - a.age
      })
      return reArrange
    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(Arr) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    /* [{
      name: 'Felicia',
      age: 4,
      color: 'grey'
    },
    {
      name: 'Tiger',
      age: 7,
      color: 'orange'
    },
    ...etc] */
    const increaseAge = Arr.map(cat => {
        return {'name': cat.name, 'age': cat.age+2, 'color': cat.color}
      })
    const sortAge = increaseAge.sort((a,b) => {
        return b.age-a.age
    })
        return sortAge
  }
}

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    /* Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    Create an object whose keys are the names of people, and whose values are
    arrays that include the names of the clubs that person is a part of. e.g.
    {
      Louisa: ['Drama', 'Art'],
      Pam: ['Drama', 'Art', 'Chess'],
      ...etc
    } 
    */
    const getMember = clubs.reduce((acc,curr)=> {
      let addMember
      //reduce arr to object that create key from curr.member arr 
      //forEach need to assign value to variable outside the loop
      curr.members.forEach(el=> {
        addMember = el 
        if(!acc[addMember]){
          acc[addMember]=[]
        }
        acc[addMember].push(curr.club)
        })
      return acc
    },{})
    
  return getMember

    // Annotation:
    // Write your annotation here as a comment
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */
    const result = mods.map((mod)=> {
     
      return {'mod': mod.mod,'studentsPerInstructor': mod.students/mod.instructors }
     })
    return result
//iterate mods array with each object divide number of student by number of instructor
//return array of the result of the math (map)
    // Annotation:
    // Write your annotation here as a comment
  }
  
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    /* Return an array of objects that include just the flavor of the cake and how
    much of that cake is in stock e.g.
    [
       { flavor: 'dark chocolate', inStock: 15 },
       { flavor: 'yellow', inStock: 14 },
       ..etc
    ] */

    /* CODE GOES HERE */
    const cakeInStock = cakes.map((key) =>{
      return {'flavor': key.cakeFlavor, 'inStock': key.inStock}
    })
    return cakeInStock
    // Annotation:
    // Write your annotation here as a comment
    // want to return a new keypair object into an array
    // same number of object 
  },

  onlyInStock() {
    /* Return an array of only the cakes that are in stock
    e.g.
    [
      {
      cakeFlavor: 'dark chocolate',
      filling: null,
      frosting: 'dark chocolate ganache',
      toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
      inStock: 15
    },
    {
      cakeFlavor: 'yellow',
      filling: 'citrus glaze',
      frosting: 'chantilly cream',
      toppings: ['berries', 'edible flowers'],
      inStock: 14
    },
    ..etc
    ] */

    /* CODE GOES HERE */
    const showInStock = cakes.filter((key) => key.inStock > 0)
    return showInStock
    // Annotation:
    // Write your annotation here as a comment
    //only show inStock >0
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */
    const totalStock = cakes.reduce((acc, curr) => {
      acc += curr.inStock;
      return acc;
    }, 0)
    return totalStock
    // Annotation:
    // Write your annotation here as a comment
    // combine inStock number into one numner
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
    
    const getToppings = cakes.map((key) => key.toppings)
    const combineArr = getToppings.reduce((comb, next) => {
      return comb.concat(next)
    },[])
    const unique = combineArr.reduce((first,next)=>{
      if (!first.find((firstEl)=>
       firstEl === next)
      ){ 
        first.push(next)
      }
      return first
    }, [])

    // Annotation:
    // Write your annotation here as a comment
  
    return unique
  },

  groceryList() {
   /*  I need to make a grocery list. Please give me an object where the keys are
    each topping, and the values are the amount of that topping I need to buy e.g.
    {
       'dutch process cocoa': 1,
       'toasted sugar': 3,
       'smoked sea salt': 3,
       'berries': 2,
       ...etc
    } */

    /* CODE GOES HERE */
    const getAllItems = cakes.map((key)=>key.toppings)
    const combItems = getAllItems.reduce((comb,next)=>
    comb.concat(next)
    )
    const makeList = {}
      combItems.forEach((el)=>{
        return makeList[el] = (makeList[el]||0) +1
      })
    return makeList

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    /* Create an array of just the front-end classrooms. e.g.
    [
      { roomLetter: 'A', program: 'FE', capacity: 32 },
      { roomLetter: 'C', program: 'FE', capacity: 27 },
      { roomLetter: 'E', program: 'FE', capacity: 22 },
      { roomLetter: 'G', program: 'FE', capacity: 29 }
    ] */

    /* CODE GOES HERE */
    const result = classrooms.filter((key)=>key.program === "FE")
      return result
    // Annotation:
    // Write your annotation here as a comment
    //iterate on classroom, looking for key pair FE 
    // return arr of object
  },

  totalCapacities() {
    /* Create an object where the keys are 'feCapacity' and 'beCapacity',
    and the values are the total capacity for all classrooms in each program e.g.
    {
      feCapacity: 110,
      beCapacity: 96
    } */

    /* CODE GOES HERE */
    const fe = classrooms.filter((key)=>key.program === "FE").reduce((acc,curr)=>acc += curr.capacity,0)
    const be = classrooms.filter((key)=>key.program === "BE").reduce((acc,curr)=>acc += curr.capacity,0)
    return {'feCapacity': fe, 'beCapacity': be}
  // const be = classrooms.filter((key)=>key.program === "BE")

    // Annotation:
    // Write your annotation here as a comment
    
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
    const result = classrooms.sort((a,b)=> {
      return a.capacity - b.capacity
    })
      return result
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(keyword1,keyword2) {
   /*  Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    return an array of all book titles that are not horror or true crime. Eg:

     ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
      'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
      'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
      'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
      'Catch-22', 'Treasure Island'] */

    /* CODE GOES HERE */
  const findHorror = books.filter((key) => {
    return key.genre !== keyword1 && key.genre !== keyword2
  }).map((key)=> key.title)
  return findHorror
    // Annotation:
    // Write your annotation here as a comment
// interate over book
// look for violence and return not violence
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    /* [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
     { title: 'Life of Pi', year: 2001 },
     { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }] */

    /* CODE GOES HERE */
    const getBooks = books.filter((key)=>{
     return key.published >1990
    })
    const newObject = getBooks.map((key)=>{
      return {'title':key.title, 'year': key.published}
    })
    return newObject
    // Annotation:
    // Write your annotation here as a comment
    // iterate over book,
    // look for years >90 and year > 00 
    // create another key pair with just title and year
  },

  getBooksByYear(books, year) {
   /*  return an array of objects containing all books that were
    published after the specified year without the author or genre data. 
    The published property should be changed to year for the returned books.
    e.g. given 1990, return */

    /* [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
     { title: 'Life of Pi', year: 2001 },
     { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }] */

    /* CODE GOES HERE */
    const getTitle = books.filter((key)=>{
      return key.published > year
      }).map((key)=>{
      return {'title':key.title, 'year': key.published}
      })
    return getTitle
    
    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    const result = weather.map((weather)=>(weather.temperature.high+weather.temperature.low)/2)
    return result
 s 
    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    /* Return an array of sentences of the locations that are sunny
    and mostly sunny. Include the location and weather type. Eg:
    [ 'Atlanta, Georgia is sunny.',
    'New Orleans, Louisiana is sunny.',
    'Raleigh, North Carolina is mostly sunny.' ]
 */
    /* CODE GOES HERE */
    // iterate over the array, seraching for keyword sunny or mostly sunny 
    // return location and interpolate in a string
    const result = weather.filter((key)=>{
    return key.type === 'sunny' || key.type === 'mostly sunny'
   
    })
    return result.map((result) => `${result.location} is ${result.type}.`)
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
/*     Return the location with the highest humidity. Eg:
    {
      location: 'Portland, Oregon',
      type: 'cloudy',
      humidity: 84,
      temperature: { high: 49, low: 38 }
    }
    use sort and then find */

    /* CODE GOES HERE */

    const arrHighHumidity = weather.map((key)=>key.humidity)
    
    const reduce = arrHighHumidity.reduce((acc,curr) => {
      if(acc > curr){
        return acc = acc
      }
      return acc = curr
    },0)

    const result = weather.find((key)=> {
        // return key.humidity === Math.max(...arrHighHumidity)
        return key.humidity === reduce
    })
    
        return result
    // Annotation:
    // Write your annotation here as a comment
      // create array with key temp.high and return array
      // if object contain number match to max value return object

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
  /*   / Return an object containing the names of which parks I need to visit
    and the ones I have already visited eg:
    {
      parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
      parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    } */

    /* CODE GOES HERE */
    const visited = nationalParks.filter((key) => key.visited === true).map((key) => key.name)
    const toVisited = nationalParks.filter((key) => key.visited === false).map((key) => key.name)

      return {'parksToVisit': toVisited, 'parksVisited': visited }
      
    // Annotation:
    // Write your annotation here as a comment
    //separate to visit and visited into array
    // return visited and toVisit park name in an object
    
  },

  getParkInEachState() {
    /* Return an array of objects where the key is the state and the value is its National Park
    eg: [ { Colorado: 'Rocky Mountain' },
    { Wyoming: 'Yellowstone' },
    { Montana: 'Glacier' },
    { Maine: 'Acadia' },
    { Utah: 'Zion' },
    { Florida: 'Everglades' } ] */

    /* CODE GOES HERE */
    const result = nationalParks.map((key)=>{
    const newObj ={}
       newObj[key.location] = key.name
       return newObj
    })
    return result
    // Annotation:
    // Write your annotation here as a comment
    //for each parkObj, use location as a key
     // each key - assign park name
  },

  getParkActivities() {
/*     Return an array of all the activities I can do
    in a National Park. Make sure to exclude duplicates. eg:
    [ 'hiking',
      'shoeshoing',
      'camping',
      'fishing',
      'boating',
      'watching wildlife',
      'cross-country skiing',
      'swimming',
      'bird watching',
      'canyoneering',
      'backpacking',
      'rock climbing' ] */

    /* CODE GOES HERE */
    const parkAct = nationalParks.map((key) =>key.activities)
   
    
    const newActArr = parkAct.reduce((acc,curr)=>{
      return acc.concat(curr)
    },[]
    )
    const result = newActArr.reduce((first,next)=>{
      if(!first.find((firstEl)=>{
        return  firstEl === next
      })) {
        first.push(next)
      }
        return first ;
    }, [])
    return result

/*     const result = parkAct.reduce((acc,curr)=>{
      return acc.concat(curr)
    },[]
  )
    console.log(result)
    return [...new Set(result)] */
    // Annotation:
    // Write your annotation here as a comment
    // iterate on park, to return strings from key activities and put in an array

  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
/*     Return the total beer count of all beers for every brewery e.g.
    40 */
    const allName = breweries.map(brew=> {
      return brew.beers.length
    })
    
    const beerCount = allName.reduce((acc,curr)=>acc+curr)
    
    return beerCount
    // Annotation:
    // use beername.length for number of beer, add them all together
  },

  getBreweryBeerCount() {
   /*  Return an array of objects where each object has the name of a brewery
    and the count of the beers that brewery has e.g.
    [
     { name: 'Little Machine Brew', beerCount: 12 },
     { name: 'Ratio Beerworks', beerCount: 5},
    ...etc.
    ] */

    const brewerBeerCount = breweries.map(brewer=> {
      return {'name': brewer.name,'beerCount': brewer.beers.length
      }
     })
      return brewerBeerCount
  
    // Annotation:
    // Write your annotation here as a comment
    
  },

  getSingleBreweryBeerCount(breweryName) {
/*     Return a number that is the count of beers that the specified
    brewery has e.g.
    given 'Ratio Beerworks', return 5 */

    /* CODE GOES HERE */
    const brewerBeerCount = breweries.map(brewer=> {
      return {'name': brewer.name,'beerCount': brewer.beers.length
      }
     });
    const singleCount = brewerBeerCount.find(brewer => {
      if(breweryName === brewer.name){
      return brewer.beerCount
      }
    })
      return singleCount.beerCount


    // Annotation:
    // Write your annotation here as a comment
    //look for brewer name and use it as a conditio to return number of beer
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
      const sortAllBrewery = breweries.map((brewery) => {
         brewery.beers.sort((a,b) => {
          return b.abv -a.abv
        })
        return brewery.beers[0]
      })
      const result = sortAllBrewery.reduce((acc,curr) => {
        if(acc > curr){
          return acc
        } return curr
      },0)
      return result
    }

    // Annotation:
    // Write your annotation here as a comment

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
/*     Return an array of just the names of the games within a specified type. 
    e.g. given an argument of "strategy", return
    ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"] */

    /* CODE GOES HERE */
    const gameList = boardGames[type].map(key=> key.name)
    return gameList
    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
  /*   Return an array of just the names of the games within a specified 
    type, sorted alphabetically. 
    e.g. given an argument of "childrens", return
    ["Candy Land", "Connect Four", "Operation", "Trouble"] */

    /* CODE GOES HERE */
    const gameList = boardGames[type].map(key=>key.name)
    // .sort((a,b) => b.name - a.name)
    const sortList = gameList.sort((a,b)=> a.localeCompare(b))
    
    return sortList
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */
    const highRateGame = boardGames[type].reduce((acc, next) =>{
      if(acc.rating > next.rating){
        return acc
      } return next
    })
    
    return highRateGame

    // Annotation:
    // Write your annotation here as a comment
    // iterate over boardgame, look for parameter word, 
    // iterate over the rating return the highest
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    const calc = boardGames[type].reduce((avg, value, _, {length}) =>{
      
        return avg + value.rating / length;
        
    }, 0);
    return calc
    
    
   
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    const calc1 = boardGames[type].filter((key)=>key.maxPlayers === maximumPlayers)
    const reduce2 = calc1.reduce((acc,curr,_,{length})=>{
      return acc+curr.rating/length
    },0)
    return reduce2
    // Annotation:
    // Write your annotation here as a comment
    // iterate over object[type], select player match parameter,
    // calculate rating

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
