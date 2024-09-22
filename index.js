#!/usr/bin/env node
import { program } from "commander";

import chalk from "chalk";

import figlet from "figlet";

const { font } = figlet;

const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const bucket = [...upper, ...lower];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

program
  .version("1.0.0")
  .description("This is random password generator")
  .option(
    "-s,--start",
    chalk.bgGreen.black("This Command start the application."),
    start
  )
  .option(
    "-l,--length <length>",
    chalk.bgGreen.black("Enter the length of the password you want to create."),
    lengthPass
  )
  .option(
    "--clear",
    chalk.bgGreen.black("Clearing screen and fresh start.."),
    clear
  );

function start() {
  console.log("");
  console.log(
    chalk.redBright(
      figlet.textSync("Random Password    Generator", {
        font: "ghost",
        horizontalLayout: "fitted",
        width: 180,
      })
    )
  );

  console.log(
    chalk.cyan.bold(
      "\n-----> Welcome🦁, This is simple CLI Tool in Node JS which give you random password..\n"
    )
  );
}
function lengthPass(length) {
  console.log(`\nThe length of password you want to generate is:${length}`);
  console.log(chalk.bgMagenta.black("\nGenerating your password...\n"));
  let password = "";
  for (let i = 0; i < length; i++) {
    password += bucket[Math.floor(Math.random() * bucket.length)];
  }
  setTimeout(() => {
    console.log(
      chalk.bgWhite.blackBright(
        `The generated password is: "${chalk.red(password)}"\n`
      )
    );
  }, 2000);
}
function clear() {
  console.clear();
}

program.parse(process.argv);
