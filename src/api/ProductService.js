export default {
  defaultCode() {
    return {
      country: 0,
      company: 1234,
      product: 5678
    };
  },
  parseCode(code) {
    if (code) {
      var str = "" + code;
      return {
        country: str.substring(0, 1),
        company: str.substring(1).substring(0, str.length / 2 - 1),
        product: str.substring(1).substring(str.length / 2, str.length - 1)
      };
    } else {
      return this.defaultCode();
    }
  },
  getProductDetails(code) {
    if (code) {
      // todo
      return {
        image: "",
        name: "product name",
        company: "company name",
        code: this.parseCode(code),
        localisation: {
          lon: 0,
          lat: 0
        }
      };
    } else {
      return {
        image: "",
        name: "product name",
        company: "company name",
        code: this.parseCode(code),
        localisation: {
          lon: 0,
          lat: 0
        }
      };
    }
  }
};
