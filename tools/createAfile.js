import fs from 'fs';
// const fs = require("fs");

const createAfile = (fileName, fileData) => {
    fs.writeFileSync(`./root/${fileName}`, fileData);
};

export default createAfile;
