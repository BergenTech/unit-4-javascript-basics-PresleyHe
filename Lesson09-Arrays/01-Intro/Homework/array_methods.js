// Concat 
let cities = ['Paris', 'Tokyo', 'New York', 'London'];
// - Merges two or more arrays
// - Creates a NEW array without modifying existing arrays
// - Useful for combining arrays without mutation
let coastalCities = ['Sydney', 'Vancouver'];
let allCities = cities.concat(coastalCities);
console.log(allCities)


// Slice

// - Extracts a portion of an array
// - Returns a NEW array
// - Does not modify the original array
// - Takes start and end indexes (end index is exclusive)

let selectedCities = cities.slice(1, 3);
console.log(selectedCities);

// Splice

// - Changes array by removing or replacing existing elements
// - Can add new elements
// - Modifies the original array
// - Parameters: (start index, delete count, items to add)

cities.splice(2,   1,   'Rome');
console.log(cities)
cities = ['Paris', 'Tokyo', 'New York', 'London'];
cities.splice(2,   2, );
console.log(cities)

// Iteration
cities = ['Paris', 'Tokyo', 'New York', 'London'];
// - Executes a provided function once for each array element
// - Does not return a new array
// - Cannot break out of the loop
cities.forEach(city => { console.log(city.toUpperCase()); })

// sort
cities = ['Paris', 'Tokyo', 'New York', 'London'];
cities.sort()
console.log(cities)

