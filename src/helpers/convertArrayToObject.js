const convertArrayToObject = (ruleOption, option) => {
  // eslint-disable-next-line consistent-return
  return ruleOption.reduce((accumulator, currentValue) => {
    if (option[currentValue]) {
      return {
        ...accumulator,
        [currentValue]: option[currentValue],
      };
    }
  }, []);
};

export default convertArrayToObject;
