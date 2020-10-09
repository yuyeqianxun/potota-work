import React, { FC } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from './router';
import './App.less';

const App: FC = () => (
  <Router>
    {renderRoutes(routes)}
  </Router>
);

export default App;