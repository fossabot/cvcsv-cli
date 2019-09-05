import inquirer, {InputQuestion} from 'inquirer';
import {blue} from 'kleur';
import fs from 'fs';

const directoryQuestion: inquirer.Question<InputQuestion> = {
  name: 'directory',
  type: 'input',
  message: `${blue("Enter the root directory: ")}`,
  default: './',
  validate: value => {
    if(fs.existsSync(value)) {
      return true;
    }

    return "😱 Sorry! The directory doesn't exist, please try again"
  }
}  

export default directoryQuestion;
