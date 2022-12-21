import { identity, pickBy } from 'lodash';

class Url {
  static getQueryString() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }

  static objectToQueryString(obj) {
    const objectUrl = pickBy(obj, identity);
    return new URLSearchParams(objectUrl).toString();
  }
}

export default Url;
