import express from 'express';
import  createAfile from './tools/createAfile.js';
import getAFile from './tools/getAFile.js';
import getAllFiles from './tools/getAllFilename.js';
import updateAfile from './tools/updateAfile.js';
import deleteAFile from './tools/deleteAFile.js';
const app = express();
const port = 8000;

app.use(express.json());

app.get(`/file`, (req, res) => {
  const data = getAllFiles();
  res.status(200).send({files: data});
})

app.get(`/file/:fileName`, (req, res) => {
  let {fileName} = req.params;
  fileName = fileName.slice(1);
  const data = getAFile(fileName);
  res.status(200).send({fileContent: data, message:"File does not exist"})
})

app.post("/file/create", (req, res) => {
  const data = req.body;
  createAfile(data.fileName, data.fileData);
  res.status(200).send({message: "File created successfully"})
})

app.put(`/file/:fileName`, (req, res) => {
  let {fileName} = req.params;
  fileName = fileName.slice(1);
  const {updatedFileName, fileData} = req.body;
  updateAfile(fileName, updatedFileName, fileData)
  res.status(200).send({message: "File updated successfully"});
})

app.delete(`/file/:fileName`, (req, res) => {
  let {fileName} = req.params;
  fileName = fileName.slice(1);
  console.log(fileName)
  deleteAFile(fileName);
  res.status(200).send({message: "File deleted successfully"});
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
