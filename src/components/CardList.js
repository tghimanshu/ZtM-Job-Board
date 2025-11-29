import React from "react"
import Card from "./Card"

/**
 * Renders a list of Card components.
 *
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.persons - An array of user objects to display.
 * @returns {JSX.Element} The rendered list of Card components.
 */
const CardList = ({ persons }) => {
  return (
    <>
      {persons.map((user, i) => (
        <Card key={i} user={user} />
      ))}
    </>
  )
}

export default CardList
