import fs from 'fs';
// const fs = require("fs");

const getAFile = (fileName) => {
    return fs.readFileSync(`./root/${fileName}`, "utf-8");
}

export default getAFile;