var fs = require("fs");
var writeStream = fs.createWriteStream("full_report.txt");
var introStream = fs.createReadStream("intro.txt");
introStream.pipe(writeStream, { end: false });

introStream.on("end", () => {
    var conclusionStream = fs.createReadStream("conclusion.txt");
    conclusionStream.pipe(writeStream);

    conclusionStream.on("end", () => {
        console.log("Merging complete!");
    });

    conclusionStream.on("error", (err) => {
        console.log("Error reading conclusion.txt:", err);
    });
});

introStream.on("error", (err) => {
    console.log("Error reading intro.txt:", err);
});