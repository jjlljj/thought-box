import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const mockCard = { title: 'blah', body: 'blah' }
    const renderedContent = shallow(<ThoughtCard card={ mockCard } />)

    expect(renderedContent).toBeDefined()
  });

  it('has a title and body', () => {
    const mockCard = { title: 'blah', body: 'blah' }
    const renderedContent = shallow(<ThoughtCard card={ mockCard }/>)
    
    expect(renderedContent.find('h2').text()).toEqual('blah')
  });

});
