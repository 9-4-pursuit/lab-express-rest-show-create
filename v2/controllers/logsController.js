const express = require("express");
const logsV2 = express.Router();
const logsArray = require("../../models/log.js");

logsV2.get("/", (req, res) => {
  res.send(`<ul>
    ${logsArray.map((log, index) => {
      return (`<li><a href="/v2/logs/${index}" >${log.title} by ${log.captainName}</a></li>`);
    })}
  </ul>`);
});



module.exports = logsV2;