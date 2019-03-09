import React from 'react';

export default ({pause, onPauseToggle}) =>
  <section className="field is-grouped is-grouped-centered">
    <p className="control">
      <button className="button is-success is-outlined is-rounded is-medium"
        disabled={!pause}
        onClick={onPauseToggle}
        >
        Resume
      </button>
    </p>
    <p className="control">
      <button className="button is-danger is-outlined is-rounded is-medium"
        disabled={pause}
        onClick={onPauseToggle}
        >
        Pause
      </button>
    </p>
  </section>