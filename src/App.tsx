import React, { memo, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import DLTabbar from '@/components/DLTabbar'
import Loading from '@/components/Loading'
import routes from '@/router'

import style from './App.module.scss'

export default memo(function App() {
  return (
    <div className={style.wrapper}>
      <Suspense fallback={<Loading />}>
        <Router>
          { renderRoutes(routes) }
        </Router>
      </Suspense>

      <DLTabbar />
    </div>
  )
});
