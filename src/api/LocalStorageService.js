export default {
  getHistory() {
    var tmp = localStorage.getItem("followUpHistory");
    if (tmp) {
      try {
        return JSON.parse(tmp);
      } catch (e) {
        localStorage.removeItem("followUpHistory");
        return [];
      }
    } else {
      return [];
    }
  },
  saveHistory(values) {
    localStorage.setItem("followUpHistory", JSON.stringify(values));
  }
};
