/**
 * Analyzes text messages and provides basic statistics
 * @param {string} message - The text message to analyze
 * @return {object} Analysis results including word count, character count, etc.
 */
function analyzeMessage(message) {
    // TODO1: Check for empty messages and handle appropriately
    // If message is empty or not a string, return an appropriate error object
    if(message == ""){
        return{
            message: "Error! Please enter something!"
        }
    }
    
    // TODO2: Count total characters
    // Hint: The length property of strings gives the character count
const characterCount = message.length;

    // TODO3: Count words (separated by spaces)
    // Hint: Split the string by spaces and get the length of the resulting array
    const words = message.split(" ")
    const wordCount = words.length
    console.log(words)
    console.log(wordCount)
    // TODO4: Calculate average word length
    // Hint: Add up all word lengths and divide by the number of words
    let totalWorth = 0
    for(let word of message){
        totalWorth += word.length
    }
    console.log(totalWorth)
    let average = totalWorth / wordCount
    console.log(average)
    // TODO5: Check if message exceeds standard SMS length (160 chars)
    // Compare total character count to 160
    const SMSlimit = wordCount < 160
    console.log(SMSlimit)
    // TODO6: Return the complete analysis object
    // Return an object with all required properties
    
    return {
        // Placeholder values - replace with actual calculations
        characterCount: characterCount,
        wordCount: wordCount,
        averageWordLength: average,
        exceedsStandardSMS: SMSlimit
    };
}
// Test cases
console.log(analyzeMessage("Hello world!"));
/* Expected output:
{
    characterCount: 12,
    wordCount: 2,
    averageWordLength: 5.5,
    exceedsStandardSMS: false
}
*/

console.log(analyzeMessage("This message has multiple words with varying lengths to test the average calculation."));
/* Expected output similar to:
{
    characterCount: 82,
    wordCount: 12,
    averageWordLength: ~6.83,
    exceedsStandardSMS: false
}
*/

console.log(analyzeMessage("This is a very long message that goes on and on and on. It contains many words and characters. The purpose is to test whether our function correctly identifies messages that exceed the standard SMS character limit of 160 characters. This should be long enough to trigger that flag."));
/* Expected output similar to:
{
    characterCount: 251,
    wordCount: 42,
    averageWordLength: ~5.98,
    exceedsStandardSMS: true
}
*/

// Add more test cases as needed