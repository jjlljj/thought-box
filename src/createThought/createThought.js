import React, { Component } from 'react';

export default class CreateThought extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  handleInput = (e) => {
    const { value, name } = e.target

    this.setState({[name]: value})
  }

  submitIdea = (e) => {
    e.preventDefault()
    this.props.createThought(this.state)
    this.setState({title: '', body: ''})
  }


  render() {
    return(
      <form
        onSubmit={this.submitIdea}>
        <input type="text"
          onChange={this.handleInput}
          name="title"
          value={this.state.title}
           />
        <input type="text"
          onChange={this.handleInput}
          name="body"
          value={this.state.body}
           />
        <button>submit</button>
      </form>
    );
  }

}
