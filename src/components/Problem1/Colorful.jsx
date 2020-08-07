import React, { useState, useCallback, useContext, useEffect } from 'react';

import { registerColor, resetHistory } from '../../../store';
import { getRandomColor } from '../../utils';

import { AppContext } from '../../App.jsx';
import History from './History.jsx';


export default function Colorful() {
  const [color, setColor] = useState(() => getRandomColor());
  const store = useContext(AppContext);

  const handleClick = () => {
    store.dispatch(registerColor(color));
    setColor(getRandomColor(color));
  };

  useEffect(() => () => store.dispatch(resetHistory()), []);

  return (
    <>
      <button
        className="colorful"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        Delete Internet
      </button>
      <History data={store.getState()} />
    </>
  )
}
