import React from 'react';
import { printNumber } from '../../utils';

export default function PrintNum() {
  const numbers = printNumber();

  return (
    <div style={{ margin: '50px 20px' }}>{numbers.join(', ')}</div>
  )
}
