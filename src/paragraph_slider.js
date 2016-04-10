import React from 'react';

const ParagraphSlider = (props) => {
  // why do I need a return here but not in hero container?
  return(
    <div className="num-paragraphs-slider">
      <h4>{ props.paragraphs }</h4>
      <form action="#">
        <p>
          <input type="range" id="test5" min="0" max="100" value={ props.paragraphs } onChange={ props.inputChange } />
        </p>
      </form>
    </div>
  );
};

export default ParagraphSlider;
