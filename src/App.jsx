import React, { createContext, useState } from 'react';

import { Problem1, Problem2, Problem3 } from './components';
import { store } from '../store';
import './styles/index.scss';

export const AppContext = createContext(null);

const PROBLEMS = {
  1: Problem1,
  2: Problem2,
  3: Problem3,
};


export default function App() {
  const [page, setPage] = useState(3);

  const goToPage = (pageNo) => () => {
    setPage(pageNo);
  }

  if (!page) return (
    <div className="menu">
      {Object.keys(PROBLEMS).map((p) => <button key={p} onClick={goToPage(p)}>{`Solution ${p}`}</button>)}
    </div>
  );

  const Comp = PROBLEMS[page];
  return (
    <AppContext.Provider value={store}>
      <div onClick={goToPage(null)} className="cursor">Go to Main</div>
      <Comp />
    </AppContext.Provider>
  )
}
