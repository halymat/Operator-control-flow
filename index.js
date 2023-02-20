// IF...ELSE ASSIGNMENT

let bolatitoSubjects = "ART";

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let artSubjects = "Government, Economics, Literature, History";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let generalSubjects = "English, Mathematics";

if (bolatitoSubjects === "SCIENCE") {
    console.log(scienceSubjects);
} else if (bolatitoSubjects === "ART") {
    console.log(
        "The subjects Bolatito will be taking are: " +
        "" +
        generalSubjects +
        ", " +
        artSubjects +
        "."
    );
} else if (bolatitoSubjects === "SOCIAL SCIENCE") {
    console.log(socialScienceSubjects);
} else {
    console.log(generalSubjects);
}

// The subjects Bolatito will be taking are: English, Mathematics, Government, Economics, Literature, History.

// Program that takes two positive number and find the power of 2 nearest to the number

let pwr = 0;
let num = 40;
for (let index = num; index >= 1; index--) {
    // If index is a power of 2
    if ((index & (index - 1)) == 0) {
        pwr = index;
        break;
    }
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");

// The number 32 is the power of 2 nearest to 40.