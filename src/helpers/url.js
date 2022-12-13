class Url {
  static getQueryString() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }

  static objectToQueryString(obj) {
    return new URLSearchParams(obj).toString();
  }
}

export default Url;
