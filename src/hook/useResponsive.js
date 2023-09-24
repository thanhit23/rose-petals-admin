import { useEffect, useState } from 'react';

const breakpoints = {
  small: '(max-width: 576px)',
  medium: '(min-width: 577px) and (max-width: 992px)',
  large: '(min-width: 993px)',
};

function useResponsive() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(null);

  useEffect(() => {
    const handleMediaQueryChange = event => {
      // eslint-disable-next-line no-restricted-syntax
      for (const breakpoint in breakpoints) {
        if (event.matches && event.media === breakpoints[breakpoint]) {
          setCurrentBreakpoint(breakpoint);
        }
      }
    };
    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (const breakpoint in breakpoints) {
      const mediaQuery = window.matchMedia(breakpoints[breakpoint]);
      if (mediaQuery.matches) {
        setCurrentBreakpoint(breakpoint);
      }
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      // eslint-disable-next-line no-restricted-syntax,guard-for-in
      for (const breakpoint in breakpoints) {
        window.matchMedia(breakpoints[breakpoint]).removeListener(handleMediaQueryChange);
      }
    };
  }, []);

  return {
    isMobile: currentBreakpoint === 'small',
    isStable: currentBreakpoint === 'medium',
    isDesktop: currentBreakpoint === 'large',
  };
}

export default useResponsive;
