// Task 2: Build a Right-Angled Triangle Using *
// set variable for a number between 1 and 10. Print that many rows of *, forming a triangle.
// Example: Input: 4 -> Output (4 lines):
// *
// **
// ***
// ****

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line


let rows = 4; // INPUT
for (let i = 1; i <= rows; i++)
{
    let count=0
    let line = ""
    while(count<i){
        line= line +"*"
        count++
        }
    console.log(line)
}