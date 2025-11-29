import React from "react"
import ReactDOM from "react-dom"
import WebFont from "webfontloader"
import App from "./App"
import "tachyons"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"

/**
 * Entry point of the application.
 * Loads web fonts, renders the App component into the DOM, and registers the service worker.
 */

WebFont.load({
  google: {
    // families: ["Roboto Condensed:300,400,700", "sans-serif"]
    // families: ["Roboto Condensed:300,400,700&display=swap"]
    families: ["Roboto Condensed:300,400,700&display=swap&subset=latin-ext"]
  }
})

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
