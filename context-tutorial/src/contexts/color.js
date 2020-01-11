/**
 * 15.2.1 새 context 만들기
 */

import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;
