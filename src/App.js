import React, { Component } from 'react';
import Speeches from './speeches';
import GeneratedIpsum from './generated_ipsum';
import PresidentSelector from './president_selector';
import HeroContainer from './hero_container';
import ParagraphSlider from './paragraph_slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphs: 5,
      prez: 'lincoln',
      presidents: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.setSelectedPrez = this.setSelectedPrez.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  presidents() {
    return(
      [
        {
          name: 'washington',
          displayName: 'George Wasington',
          selected: false
        },
        {
          name: 'lincoln',
          displayName: 'Abraham Lincoln',
          selected: false
        },
        {
          name: 'fdr',
          displayName: 'Franklin D Roosevelt',
          selected: false
        },
        {
          name: 'jfk',
          displayName: 'John F Kennedy',
          selected: false
        }
      ]
    );
  }

  componentDidMount() {
    this.setState({
      presidents: this.setSelectedPrez('lincoln')
    });
  }

  selectPrez(e) {
    let selectedPrez = e.target.value;

    this.setState({
      prez: selectedPrez,
      presidents: this.setSelectedPrez(selectedPrez)
    });
  }

  setSelectedPrez(prezName) {
    let presidentsArray = this.presidents().map((prez) => {
      let newPrez = prez
      if(prez.name === prezName) {
        newPrez.selected = true
      }
      return newPrez
    });

    return presidentsArray
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroContainer />
        <br />
        <br />
        <PresidentSelector selectPrez={ this.selectPrez.bind(this) } presidents={ this.state.presidents }/>
        <br/>
        <ParagraphSlider paragraphs={ this.state.paragraphs } inputChange={ this.inputChange } />
        <br/>
        <br/>
        <GeneratedIpsum paragraphs={ this.state.paragraphs } speech={ this.fetchSpeech() } />
      </div>
    );
  }
}

export default App;
