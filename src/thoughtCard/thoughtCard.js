import React from 'react';

export const ThoughtCard = ({ card }) => {
  const { title, body } = card
  return (
    <div className="thought-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <button>delete</button>
    </div>
  )
}
