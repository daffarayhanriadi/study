import { readFile } from "fs";

readFile("./sampleForMainErrorHandlingWithCallback2.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data.toString()
    .replace("%name%", "Dicoding")
    .replace("%your_name%", "JavaScript");

  console.log(greeting);
});
