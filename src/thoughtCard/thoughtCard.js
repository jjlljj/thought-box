import React from 'react';

export const ThoughtCard = ({ card, removeThought }) => {
  const { title, body, id } = card
  return (
    <div className="thought-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => {  removeThought(id) }} >delete</button>
    </div>
  )
}
