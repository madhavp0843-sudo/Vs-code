var fs = require("fs");

var content = "Books are a uniquely portable magic.";
fs.writeFile("book.txt", content, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("Writing completed successfully.");

    // Read from file after writing
    fs.readFile("book.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        console.log("Reading completed successfully.");
        console.log("File Content:", data);
    });
});