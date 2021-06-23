import React from 'react';
import Color from './Color';
import Brand from './Brand';
function Selector(props) {
  return (
    <div className="row" style={{ justifyContent: 'space-around' }}>
      <Color />
      <Brand />
    </div>
  );
}

export default Selector;
