import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const renderedContent = shallow(<ThoughtList thoughtList={[]}/>)
    expect(renderedContent).toBeDefined()
  });

  it('has multiple ThoughtCard class fields', () => {
    const mockCards = [
      { title: 'blah', body: 'blah' },
      { title: 'blah', body: 'blah' },
      { title: 'blah', body: 'blah' } ]
    const renderedContent = mount(<ThoughtList thoughtList={ mockCards } />)

    expect(renderedContent.find('.thought-card').length).toEqual(3)  
  });

});
