/* CLEAN UP THE persons.json DATA TO MAKE IT EASIER 
TO MAKE FETCH REQUESTS FOR COUNTRIES AND COORDINATES 
(LATITUDE, LONGITUDE) AND COMPARE AND MATCH THEM */

import { people } from "../assets/persons"

// Removed all the brackets, extra spaces, symbols and unnecessary stuff from country names
/**
 * An array of country names cleaned from the `people` data.
 * It removes brackets, non-alphabetic characters (except for specific latin characters),
 * and extra whitespaces.
 *
 * @type {string[]}
 */
const allCountryNamesCleaned = people.map(person => {
  return (
    person.location.country
      //removes brackets and everything inside brackets.
      // lot of people have added (Available for remote work) or similar in brackets
      ?.replace(/ *\([^)]*\) */g, "")
      // removes anything other than alphabets and latin/other letters éáíúçèk stuff
      .replace(/[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+/g, "")
      // replaces 2 or more whitespaces with one
      .replace(/  +/g, " ")
      .trim()
    // .toLowerCase()
  )
})

// Used switch to fix country names to get proper country latitude and longitude
// TODO: But some strict rules should be made for adding country names so that this wont be necessary
// And whoever merges pull requests for adding new users should make sure the data is clean before merging

// This will contain duplicate country names
// that are removed in the next function - removeDuplicateCountryNames
/**
 * An array of country names normalized to match API naming conventions.
 * It maps common variations and abbreviations to standard country names.
 *
 * @type {string[]}
 */
const allCountryNamesFixedToMatchAPINames = allCountryNamesCleaned.map(
  country => {
    switch (country) {
      case "US":
        return "United States of America"
      case "USA":
        return "United States of America"
      case "United States":
        return "United States of America"
      case "United States Of America":
        return "United States of America"
      case "UAE":
        return "United Arab Emirates"
      case "UK":
        return "United Kingdom"
      case "INDIA":
        return "India"
      case "IN":
        return "India"
      case "RU":
        return "Russian Federation"
      case "Russia":
        return "Russian Federation"
      case "CH":
        return "China"
      case "Perú":
        return "Peru"
      case "SriLanka":
        return "Sri Lanka"
      case "NIGERIA":
        return "Nigeria"
      default:
        return country
    }
  }
)

// This function will return an object with country name and the number of developers from that country
// It adds the number of developers as it comes across duplicate country names

/**
 * Counts the occurrences of each country name in an array.
 *
 * @param {string[]} countryArrayWithDuplicateValues - An array of country names, potentially containing duplicates.
 * @returns {Object.<string, number>} An object where keys are country names and values are the count of developers from that country.
 */
function removeDuplicateCountryNames(countryArrayWithDuplicateValues) {
  let deduplicatedCountries = countryArrayWithDuplicateValues.reduce(
    (prev, curr) => {
      // console.log("prev", prev, "current", curr);
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    },
    {}
  )

  return deduplicatedCountries
}

/**
 * An object containing normalized country names as keys and the number of developers from each country as values.
 * Derived from the `people` data in `../assets/persons`.
 *
 * @type {Object.<string, number>}
 */
export const countriesWithNumOfDevsObj = removeDuplicateCountryNames(
  allCountryNamesFixedToMatchAPINames
)
