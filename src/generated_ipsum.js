import React, { Component } from 'react';
import Clipboard from 'clipboard';

class GeneratedIpsum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Click to Copy'
    }
  }
  render() {
    const { speech, paragraphs} = this.props;
    const ipsumChunks = [];
    const clipboard = new Clipboard('.copy-btn');

    clipboard.on('success', (e) => {
      this.setState({
        buttonText: 'Copied!'
      })
    });

    for(var i = 0; i < paragraphs; i++) {
      let index = 0;
      let length = speech.length

      if ( i < length) {
        index = i;

      } else {
        let remainder = i % length;
        index = remainder;
      }

      let paragraph = <p key={i}>{speech[index]}</p>
      ipsumChunks.push(paragraph);
    }

    return(
      <div className='generated-ipsum'>
        <h4>3. Copy Pasta</h4>
        <a href='#!' data-clipboard-target='#speech-text' className='copy-btn btn red lighten-1 waves-effect waves-red-lighten-4'>
          { this.state.buttonText }
        </a>
        <div className='card-panel' id='speech-text'>
          { ipsumChunks }
        </div>
      </div>
    );
  }
}

export default GeneratedIpsum;
