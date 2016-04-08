import React, { Component} from 'react';
import President from './president';

class PresidentSelector extends Component {
  render() {
    const { presidents } = this.props

    const presidentDivs = presidents.map((prez) => {
      return (
        <President key={ prez.displayName }
                   displayName={ prez.displayName }
                   prez={ prez.name }
                   selected={ prez.selected }
                   selectPrez={ this.props.selectPrez } />
      )
    });

    return(
      <div className="president-selector">
        <h3>Steps to Generate Presidential Ipsum</h3>
        <br/>
        <br/>
        <h4>1. Select a Prez</h4>
        <div className="select-prez row">
          { presidentDivs }
        </div>
      </div>
    );
  }
}

export default PresidentSelector;
