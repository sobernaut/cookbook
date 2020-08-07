import React, { useState, useCallback, useContext } from 'react';


export default function History({ data }) {
  if (!data.length) return <div className="history" />;

  const colors = data.map((color, idx) => <p className="color" key={`${color}${idx}`} style={{ color }}>{color}</p>)

  return (
    <div className="history">
      <div className="history--header">Rendered Colors:</div>
      <div>{colors}</div>
    </div>
  );
}
