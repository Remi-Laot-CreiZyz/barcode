export default {
  get(key) {
    var tmp = localStorage.getItem(key);
    if (tmp) {
      try {
        return JSON.parse(tmp);
      } catch (e) {
        localStorage.removeItem(key);
        return undefined;
      }
    } else {
      return undefined;
    }
  },
  delete(key) {
    localStorage.removeItem(key);
  },
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
