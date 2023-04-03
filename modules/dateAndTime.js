/* Importing the date variable from the variables.js file and the DateTime function from
the luxon.js file. */
import { date } from './variables.js';
import { DateTime } from './luxon.js';

// It takes the current date and time and displays it in the DOM
const dateAndTime = () => {
  date.forEach((dt) => {
    const now = DateTime.now();
    dt.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
  });
};

// Exporting the dateAndTime function to be used in the app.js file.
export default dateAndTime;