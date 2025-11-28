# ZtM-Job-Board

[![TravisCI Build Status](https://travis-ci.org/zero-to-mastery/ZtM-Job-Board.svg?branch=master)](https://travis-ci.org/zero-to-mastery/ZtM-Job-Board)

A place for developers from the [**Zero To Mastery Community**](https://zerotomastery.io/?utm_source=github&utm_medium=ZtM-Job-Board) to show recruiters that they are available for hire. Feel free to contribute and improve this in any way you see fit.

## Purpose

The main purpose of this project is to provide a platform for Zero To Mastery students to showcase their profiles to potential employers. It serves as a job board where users can filter developers by name, job title, or location.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/zero-to-mastery/ZtM-Job-Board.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to add your name to the list

To add your name to the list, simply open `persons.json` file in the `src/assets` folder, and then add your own row at the bottom, using the below template:
( **Don't include the square brackets "[ ]" !!! They are just there to indicate an example placeholder.** )

```json
  ,{
    "id": [PREVIOUS_PLUS_ONE],
    "name": "[YOUR_FULL_NAME]",
    "img": "[YOUR_IMG_URL]",
    "links": {
      "website": "[YOUR_WEBSITE_URL]",
      "linkedin": "[YOUR_LINKEDIN_URL]",
      "github": "[YOUR_GITHUB_URL]"
    },
    "jobTitle": "[YOUR_TITLE]",
    "location": {
      "city": "[YOUR_CITY]",
      "state": "[YOUR_STATE_OR_PROVINCE]",
      "country": "[YOUR_COUNTRY]"
    }
  }
```

### Please note!
- Profile pictures and/or images are allowed.
- If you do not want to fill some of the fields, leave them blank (e.g. `state: "",`).
- Your pull request will only be accepted if it follows the example above. It **cannot** have anything else.

Please submit a Pull Request for your row to be added to this list. If you are unsure how to do this, please check out *Contributing To Open Source* video in the course curriculum.

## Resources
All icons have been sourced from [Material Design Icons](https://materialdesignicons.com) and [Octicons](https://octicons.github.com/)
