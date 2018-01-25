import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';

export const ThoughtList = ({ thoughtList, removeThought }) => {

  const renderedCards = thoughtList.map(card => <ThoughtCard card={card} removeThought={removeThought} />)

  return (
    <div>
      { 
        thoughtList &&
        renderedCards 
      }
    </div>
  );
}
