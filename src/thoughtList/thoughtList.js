import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';

export const ThoughtList = ({ thoughtList }) => {

  const renderedCards = thoughtList.map(card => <ThoughtCard card={card} />)

  return (
    <div>
      { 
        thoughtList &&
        renderedCards 
      }
    </div>
  );
}
