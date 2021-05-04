import React, { memo, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import DLTabbar from '@/components/DLTabbar'
import Loading from '@/components/Loading'
import routes from '@/router'

import Style from './App.module.scss'

export default memo(function App() {
  return (
    <div className={ Style.wrapper }>
        <Router>
          <main>
            <Suspense fallback={<Loading />}>
            { renderRoutes(routes) }
            </Suspense>
          </main>

          {<DLTabbar />}
        </Router>
    </div>
  )
});
