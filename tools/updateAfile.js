import fs from "fs";
// const fs = require("fs");

const updateAfile = (fileName, newName, content) => {
    fs.writeFileSync(`./root/${fileName}`, content);
    fs.renameSync(`./root/${fileName}`, `./root/${newName}`)
};

export default updateAfile