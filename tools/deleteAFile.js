import fs from 'fs';
// const fs = require("fs");

const deleteAFile = (fileName) => {
    fs.unlinkSync(`./root/${fileName}`);
};

export default deleteAFile;
