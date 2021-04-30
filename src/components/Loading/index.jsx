import React, { memo, useState, useEffect } from 'react'

export default memo(function Loading (): React.ReactElement {
  const [loading, setLoading] = useState('Loading');

  useEffect(() => {
    const timer: number = setInterval(() => {
      let len: number = loading.length;
      let nowLoading: string =  ((str: string) => {
        str = len < 8 ? '.' : len < 9 ? '..' :len < 10 ? '...' : '';
        return len < 10 ? (loading + str) : 'Loading'
      })('')

      setLoading(nowLoading);
    }, 200);

    return () => clearInterval(timer);
  })

  return (
    <div className='loading'>
      <h1>{ loading }</h1>
    </div>
  )
});
