import React, { lazy, Suspense } from 'react';

function loadable(importFunc, { fallback = null } = { fallback: null }) {
  const LazyComponent = lazy(importFunc);
  function result(props) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  }
  return result();
}

export default loadable;
