// Sample Data
const socialPlatforms = [
    'TikTok',
    'Instagram',
    'YouTube',
    'Snapchat',
    'Discord',
  ];
  
  const gamerProfile = {
    username: 'ProGamer123',
    level: 42,
    isPremium: true,
    favoriteGames: ['Fortnite', 'Minecraft', 'Roblox'],
  };
  
  // ===================================================
  // Question 1: Conventional For Loop
  // ===================================================
  // Task: Create a new array with the socialPlatforms in reverse order
  //
  // Hint: Start from the last element (at index socialPlatforms.length - 1)
  //       and loop backwards until you reach the first element (at index 0).
  
  console.log('Question 1: Conventional For Loop');
  const reversedPlatforms = [];
  // Your code here:
  for(let i = socialPlatforms.length - 1; i >= 0; i--){
    socialPlatforms.push(i)
    console.log(socialPlatforms[i])
  }
 
  // Example structure: for (let i = ...; i >= ...; i--) { ... }
  
  
  // Expected output: ["Discord", "Snapchat", "YouTube", "Instagram", "TikTok"]
  
  // ===================================================
  // Question 2: While Loop
  // ===================================================
  // Task: Find the index of "YouTube" in the socialPlatforms array
  //
  // Hint: Create a loop that continues as long as the current index is within
  //       the array bounds. Inside the loop, check if the current element
  //       equals "YouTube". If it does, set foundIndex to the current index
  //       and break the loop. Otherwise, increment the index.
  
  console.log('\nQuestion 2: While Loop');
  let index = 0;
  let foundIndex = -1;
  console.log(socialPlatforms[2])
  // Your code here:
  while(index <= socialPlatforms.length) {
    if(socialPlatforms[index] === "YouTube"){
      foundIndex = index;
      console.log(foundIndex);
    }
    index++ 
  }
  // Example structure: while (condition) { ... }
  
  console.log(foundIndex);
  // Expected output: 2
  
  // ===================================================
  // Question 3: For...of Loop
  // ===================================================
  // Task: Count how many social platforms have more than 8 characters in their name
  //
  // Hint: For each platform in the array, check if its length is greater than 8.
  //       If it is, increment the longNameCount.
  //       Remember, you can use platform.length to get the length of a string.
  
  console.log('\nQuestion 3: For...of Loop');
  let longNameCount = 0;
  // Your code here:
  console.log(socialPlatforms)
for(const social of socialPlatforms) {
  if(social.length >= 8) {
    longNameCount++
  }
}

  // Example structure: for (const platform of socialPlatforms) { ... }
  
  console.log(longNameCount);
  // Expected output: 2 (Instagram, Snapchat)
  
  // ===================================================
  // Question 4: For...in Loop
  // ===================================================
  // Task: Create an object where each key is a property name from gamerProfile
  //       and each value is the data type of that property
  //
  // Hint: Loop through each property in the gamerProfile object.
  //       For each property, add a new key to profileTypes with the same name,
  //       and set its value to the type of the property using typeof.
  //       Example: profileTypes["username"] = typeof gamerProfile["username"];
  
  console.log('\nQuestion 4: For...in Loop');
  const profileTypes = {};
  // Your code here:
  for(const obj in gamerProfile){
    profileTypes[obj] = typeof gamerProfile[obj]
  }
  // Example structure: for (const key in gamerProfile) { ... }
  
  console.log(profileTypes);
  /* Expected output: 
  {
    username: "string",
    level: "number",
    isPremium: "boolean",
    favoriteGames: "object"
  }
  */