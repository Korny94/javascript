// MOSH JavaScript Beginner Tutorial YouTube


// Link JavaScript file to HTML

/*
    <head>
        <script defer src="/js/script.js"></script>
    </head>

        // OR

    <body>
        <script src="/js/script.js">

        </script>
    </body>
*/


// console.log()

    console.log("This will show in the console")
    // Output: This will show in the console


// VARIABLES

    /* 
    RULES

        - Cannot be a reserved keyword like "if" or "true"
        - Should be meaningful, firstName yes, firNam no!
        - Cannot start with a number like 1name
        - Cannot contain a space or hyphen -
        - Use camelNotation for variable names = firstName, lastNameForMen
    */

    // let (changeable variable)

        let firstNames = "Karl";
        let lastNames = "Nøkling";

        console.log(firstNames, lastNames);
        // Output: Karl Nøkling

    // const (unchangeable variable)

        const speedOfLight = 299792.458;
        const space = " "
        const kilometersPerSecond = "km/s"

        console.log("The speed of light is", speedOfLight + space + kilometersPerSecond);
        // Output: The speed of light is 299792.458 km/s

    // var (don't use this)


// VARIABLE TYPES (Primitive / Value types)

    
        // - String, text between ""
            let name = "Karl";

        // - Number, a number
            let ages = 28;

        // - Boolean, true or false
            let isCool = true; 

        // - Undefined, not defined. (Both a type and value)
            let lifePurpose; 

        // - Null, purposely not defined
            let passedSemesterProject = null;


// REFERENCE TYPES

    // object {}, is like an object in real life. (Instead of multiple var on a person, make a person object)
        let person = {
            name: "Karl",
            age: 28
        };

        console.log(person);
        // Output: {name: "karl", age: 28}

            // Change the value of the properties using "dot . notation"
                person.name = "Magnus";

                console.log(person);
                // Output: {name: 'Magnus', age: 28}

    // array

    // function


// OPERATORS 

    // typeof, tells you what type of variable it is
        console.log(typeof isCool);
        // Output: boolean

        console.log(typeof passedSemesterProject);
        // Output: object


// DOT . NOTATION

        /* 
            Change a property
            
            var.key = "new value";
            console.log(var);
                Output: new value
        */

    
