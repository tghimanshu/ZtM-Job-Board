import React from "react"

import "../styles/BasicButton.css"

/**
 * A basic styled button component.
 *
 * @param {Object} props - The component props.
 * @param {function} props.action - The function to call when the button is clicked.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @returns {JSX.Element} The rendered button component.
 */
const BasicButton = ({ action, children, disabled }) => {
  return (
    <div className="flex items-center justify-center pa4 custom--basic-button">
      <button
        className={
          "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box b--dark-gray br2 " +
          (disabled ? "disabled" : "")
        }
        onClick={action}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

export default BasicButton
