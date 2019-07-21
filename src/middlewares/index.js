import checker from './checker';
import logger from './logger';
import thunk from './thunk';

import { applyMiddleware } from 'redux';

export default applyMiddleware(
    thunk,
    checker,
    logger
)