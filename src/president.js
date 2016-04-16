import React, { Component } from 'react';

class President extends Component {
  render() {
    const {displayName, prez, selected} = this.props;
    const klass = selected ? 'z-depth-1' : 'z-depth-3'

    return(
      <div className="col col s12 m6 l3">
        <label>
          <img className={ klass } src={'http://placehold.it/150x150'} />
          <input onClick={ this.props.selectPrez } type='radio' name='prez' id={ prez } value={ prez } />
          <p>{ displayName }</p>
        </label>
      </div>
    )
  }
}

export default President;
