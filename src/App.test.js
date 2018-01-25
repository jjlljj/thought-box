import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', ()=> {
  it('renders App with className app', () => {
    const renderedContent = shallow(<App />)

    expect(renderedContent.hasClass('app')).toEqual(true)
  });

  it('initial state starts with an empty array', () => {
    const renderedContent = mount(<App />)
    expect(renderedContent.state().thoughts).toEqual([])
    
  });

  it('having 2 thoughts in state should mean there are two thoughtCards', () => {
    const renderedContent = shallow(<App />)
    const thought1 = {
        title: 'a whale walks into a bar',
        body: 'hhhhwwwwww'
      }
    const thought2 = {
        title: 'war',
        body: 'what is it good for'
      }

    renderedContent.setState({thoughts: [thought1, thought2]})

    expect(renderedContent.state().thoughts.length).toEqual(2)

  });

  it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
    const renderedContent = shallow(<App />)
    const thought1 = {
        title: 'a whale walks into a bar',
        body: 'hhhhwwwwww'
      }
    const thought2 = {
        title: 'war',
        body: 'what is it good for'
      }

    renderedContent.instance().createThought(thought1)
    renderedContent.instance().createThought(thought2)

    expect(renderedContent.state().thoughts.length).toEqual(2)
  });
})