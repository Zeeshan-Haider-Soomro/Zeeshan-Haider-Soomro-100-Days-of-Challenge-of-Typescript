// Question 52
var smartPhone = {
    brand: "Xiaomi",
    model: "2020",
    specification: {
        ram: "4 GB",
        rom: "128 Uf2.0",
        mahBattery: 6000,
    }
};
console.log(smartPhone);
// Question 53
var hireDeveloper = {
    languages: ["javascript", "typescript", "python"],
    frameWork: ["mongoDb", "react.js", "Angular"],
    tools: ["github", "netlify", "baki ka mujhe nahi pata😅"]
};
var languages = hireDeveloper.languages, frameWork = hireDeveloper.frameWork, tools = hireDeveloper.tools;
console.log("languages: ".concat(languages[2], " \n framework: ").concat(frameWork[1], " \n tools: ").concat(tools[1]));
