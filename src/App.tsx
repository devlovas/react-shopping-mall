import React, { memo, Suspense, useEffect } from 'react';
import { useSelectedTab, useTabHidden } from '@/store'
import { useHistory, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import DLTabbar from '@/components/DLTabbar'
import Loading from '@/components/Loading'
import routes from '@/router'
import Style from './App.module.scss'

export default withRouter(memo(function App() {
  const history = useHistory()
  const [, setSelectedTab ] = useSelectedTab()
  const [, setTabHidden ] = useTabHidden()

  useEffect(() => {
    const pathName = history.location.pathname.substr(1)
    if (pathName === 'home' ||
        pathName === 'cart' ||
        pathName === 'category' ||
        pathName === 'me') {
        setSelectedTab(pathName)
        setTabHidden(false)
    }
    else {
      setTabHidden(true)
    }
  })

  return (
    <div className={ Style.wrapper }>
      <main>
        <Suspense fallback={<Loading />}>
        { renderRoutes(routes) }
        </Suspense>
      </main>

      {<DLTabbar />}
    </div>
  )
}));
