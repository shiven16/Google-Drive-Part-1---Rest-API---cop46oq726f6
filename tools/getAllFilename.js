import fs from 'fs';
// const fs = require("fs");

const getAllFiles = () => {
   return fs.readdirSync("./root");
}

export default getAllFiles;
