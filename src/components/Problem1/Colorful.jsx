import React, { useState, useCallback, useContext, useEffect } from 'react';

import { registerColor, resetHistory } from '../../../store';
import { COLORS } from '../../constants'
import { getRandomIdx } from '../../utils';

import { AppContext } from '../../App.jsx';
import History from './History.jsx';

export default function Colorful() {
  const [currIdx, setCurrIdx] = useState(() => getRandomIdx(COLORS.length));
  const store = useContext(AppContext);

  const handleClick = () => {
    const newIdx = getRandomIdx(COLORS.length, currIdx);

    store.dispatch(registerColor(currIdx));
    setCurrIdx(newIdx);
  };

  useEffect(() => () => store.dispatch(resetHistory()), []);

  return (
    <>
      <button
        className="colorful"
        onClick={handleClick}
        style={{
          backgroundColor: COLORS[currIdx],
        }}
      >
        Delete Internet
      </button>
      <History data={store.getState()} />
    </>
  )
}
