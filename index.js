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

let num = 60;

for (let i = 0; i ** 2; i++) {
    num += i;
}
console.log(num);