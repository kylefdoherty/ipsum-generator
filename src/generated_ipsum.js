import React, { Component } from 'react';

class GeneratedIpsum extends Component {
  render() {
    var { speech, paragraphs} = this.props;
    var ipsumChunks = [];

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
      <div>
        { ipsumChunks }
      </div>
    );
  }
}

export default GeneratedIpsum;
