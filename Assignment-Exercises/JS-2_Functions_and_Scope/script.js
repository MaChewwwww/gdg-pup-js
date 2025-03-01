/********************
 Step 1: Create Global Variables
********************/
let globalVar = "I am global";
let anotherGlobalVar = 42;

/********************
 Step 2: Create a Function to Demonstrate Function Scope
********************/
function demoFunctionScope() {
    let localVar = "I am local to demoFunctionScope";
    
    // Log variables to demonstrate scope
    console.log("Inside demoFunctionScope, globalVar:", globalVar);
    console.log("Inside demoFunctionScope, localVar:", localVar);
    
    // Return string containing both variables
    return `Global: ${globalVar}, Local: ${localVar}`;
}

/********************
 Step 3: Call the Function and Log Its Return Value
********************/
let functionResult = demoFunctionScope();
console.log("Function returned:", functionResult);

/********************
 Step 4: Demonstrate Block Scope
********************/
if (true) {
    let blockVar = "I exist only in this block";
    console.log("blockVar inside block:", blockVar);
}

// This will cause an error because blockVar is not accessible here
try {
    console.log("Attempting to access blockVar outside block:", blockVar);
} catch (error) {
    console.log("ReferenceError: blockVar is not defined");
}
