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
        <h3>Dead Prez Ipsum</h3>
        <div className="select-prez">
          <label>President</label>
          <select name='select' onChange={ this.selectChange.bind(this) } value={ this.state.prez }>
            <option value='lincoln'>Abraham Lincoln</option>
            <option value='jfk'>John F Kennedy</option>
          </select>
        </div>
        <br/>
        <div className="num-paragraphs">
          <label>Paragraphs:</label>
          <input type="text" value={ this.state.paragraphs } onChange={ this.inputChange.bind(this) } />
        </div>
        <div className='generated-ipsum'>
          <GeneratedIpsum paragraphs={ this.state.paragraphs } speech={ this.fetchSpeech() } />
        </div>
      </div>
    );
  }
}

export default Home;
