const getObjectAcceptArrayKey = (queryAccept, option) => {
  // eslint-disable-next-line consistent-return
  return queryAccept.reduce((accumulator, currentValue) => {
    if (option[currentValue]) {
      return {
        ...accumulator,
        [currentValue]: option[currentValue],
      };
    }
  }, []);
};

export default getObjectAcceptArrayKey;
