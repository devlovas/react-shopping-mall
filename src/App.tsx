import React, { memo, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Loading from '@/components/Loading'
import routes from '@/router'

export default memo(function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          { renderRoutes(routes) }
        </Router>
      </Suspense>
    </div>
  )
});
