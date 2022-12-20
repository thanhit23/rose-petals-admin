class Url {
  static getQueryObject() {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }

  static convertToQueryString(options) {
    const currentQuery = this.getQueryObject();
    const obj = { ...currentQuery, ...options };
    return new URLSearchParams(obj).toString();
  }
}

export default Url;
