import React, { useState, useCallback, useContext } from 'react';

import { COLORS } from '../../constants'


export default function History({ data }) {
  if (!data.length) return <div className="history" />;

  const colors = data.map((d, i) => {
    const color = COLORS[d];
    return <p className="color" key={`${d}${i}`} style={{ color }}>{color}</p>
  })

  return (
    <div className="history">
      <div className="history--header">Rendered Colors:</div>
      <div>{colors}</div>
    </div>
  );
}
