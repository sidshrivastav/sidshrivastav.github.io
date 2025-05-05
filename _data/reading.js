const fs = require("fs");
const { parse } = require("csv-parse/sync");

module.exports = () => {
  const fileContent = fs.readFileSync("data/reading.csv", "utf-8");

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  return {
    all: records,
    current: records.filter(book => book.status === "Reading"),
    backlog: records.filter(book => book.status === "Want to Read"),
    read: records.filter(book => book.status === "Read"),
  };
};