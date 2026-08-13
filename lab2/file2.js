import { readFile, appendFile, writeFile } from "fs/promises";

const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log(e.message);
    console.log("File not found");
  } finally {
    console.log("Read data finished");
  }
};

const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content, "utf-8");
  } catch (error) {
    console.log(error.message);
  }
};
const deleteFile = async (filename) => {
  try {
    await unlink(filename);
  } catch (error) {
    console.log("file not found");
  }
};

const appendData = async (filename, content) => {
  await appendFile(filename, content, "utf-8");
};

// If a function uses await keyword then the function must be async

const data = await readData("file2.js");
console.log(data);
