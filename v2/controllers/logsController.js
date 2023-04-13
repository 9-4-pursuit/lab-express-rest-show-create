const express = require("express");
const logsV2 = express.Router();
const logsArray = require("../../models/log.js");

logsV2.get("/", (req, res) => {
  res.status(202).send(`<ul>
    ${logsArray.map((log, index) => {
      return (`<li><a href="/v2/logs/${index}" >${log.title} by ${log.captainName}</a></li>`);
    })}
  </ul>`);
});

logsV2.get("/:index", (req,res) => {
  const {index} = req.params;

  logsArray[index] ?
  //send the html for the data with a button that send you back to the v2 logs index
  res.status(202).send(`<h1>${logsArray[index].title}</h1>
  <h2>${logsArray[index].captainName}</h2> 
  <p>${logsArray[index].post}</p>
  <button onClick="window.location.href='/v2/logs'" >Back to Logs</button>`):
  res.redirect("/error");
});

module.exports = logsV2;