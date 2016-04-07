import React, { Component } from 'react';
import Speeches from './speeches';
import GeneratedIpsum from './generated_ipsum';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphs: 5,
      prez: "lincoln"
    };
  }

  selectChange(e) {
    this.setState({
      prez: e.target.value
    });
  }

  inputChange(e) {
    this.setState({
      paragraphs: e.target.value
    });
  }

  fetchSpeech() {
    return(
      Speeches()[this.state.prez]
    );
  }

  render() {
    return(
      <div className='container'>
        <br/>
        <br/>
        <div className='hero-text'>
          <h4>
            We Need a Reminder What Presidential Sounds Like!
            <br/>
            <br/>
            Ipsum Text of Some of the Greatest Speeches by some of the Greatest U.S. Presidents
          </h4>
        </div>
        <br/>
        <br/>
        <div className="presidents">
          <h3>Steps to Generate Presidential Ipsum</h3>
          <br/>
          <br/>
          <h4>1. Select a Prez</h4>
          <div className="select-prez row">
            <div className="col col s12 m6 l3">
              <img className="z-depth-3" src={'http://placehold.it/150x150'} />
              <p>George Washington</p>
            </div>
            <div className="col col s12 m6 l3">
              <img className="z-depth-1" src={'http://placehold.it/150x150'} />
              <p>Abraham Lincoln</p>
            </div>
            <div className="col col s12 m6 l3">
              <img className="z-depth-3" src={'http://placehold.it/150x150'} />
              <p>Franklin D Roosevelt</p>
            </div>
            <div className="col col s12 m6 l3">
              <img className="z-depth-3" src={'http://placehold.it/150x150'} />
              <p>John F Kennedy</p>
            </div>
          </div>
        </div>
        <div className="select-prez">
          <h4>2. Select Number of Paragraphs</h4>
          <select name='select' onChange={ this.selectChange.bind(this) } value={ this.state.prez }>
            <option value='lincoln'>Abraham Lincoln</option>
            <option value='jfk'>John F Kennedy</option>
          </select>
        </div>
        <br/>
        <div className="num-paragraphs">
          <h4>{ this.state.paragraphs }</h4>
          <form action="#">
            <p class="range-field">
              <input type="range" className="red" id="test5" min="0" max="100" value={ this.state.paragraphs } onChange={ this.inputChange.bind(this) } />
            </p>
          </form>
        </div>
        <br/>
        <br/>
        <div className='generated-ipsum'>
          <h4>3. Copy Pasta</h4>
          <a href="#!" className="btn red lighten-1 waves-effect waves-red-lighten-4">Click to Copy</a>
          <GeneratedIpsum paragraphs={ this.state.paragraphs } speech={ this.fetchSpeech() } />
        </div>
      </div>
    );
  }
}

export default Home;
