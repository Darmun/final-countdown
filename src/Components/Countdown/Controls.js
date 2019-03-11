import React from 'react';
import Control from './Control';

export default ({pause, onPauseToggle}) =>
  <section className="field is-grouped is-grouped-centered">
   <Control 
    disabled={pause}
    onClick={onPauseToggle}
    btnType="success">
    Resume
    </Control>
      <Control 
    disabled={!pause}
    onClick={onPauseToggle}
    btnType="danger">
    Pause
    </Control>
  </section>