import LocalStorageService from "@/api/LocalStorageService.js";
import GeoService from "@/api/GeoService.js";

LocalStorageService.delete("fu-products");

var store = LocalStorageService.get("fu-products");
if (typeof store == "undefined") store = {};

var companyNames = [
  "Tradilège"
];

var productNames = [
  "Dés de jambon"
];

var divers = [
  "Porc élevé en batterie"
];

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
  isValid(product) {
    return (
      typeof product.image != "undefined" &&
      typeof product.name != "undefined" &&
      typeof product.company != "undefined" &&
      typeof product.code != "undefined" &&
      typeof product.divers != "undefined" &&
      typeof product.location != "undefined" &&
      typeof product.location.lon != "undefined" &&
      typeof product.location.lat != "undefined"
    );
  },
  getProductDetails(code) {
    if (code) {
      if (typeof store[code] != "undefined") {
        return store[code];
      } else {
        var location = GeoService.getRandomLocation();
        var object = {
          image: "https://static.openfoodfacts.org/images/products/366/111/209/6496/front_fr.10.400.jpg",
          divers: divers[Math.floor(Math.random() * divers.length)],
          name: productNames[Math.floor(Math.random() * productNames.length)],
          company:
            companyNames[Math.floor(Math.random() * companyNames.length)],
          code: this.parseCode(code),
          location: location.location,
          distance: location.distance
        };
        store[code] = object;
        LocalStorageService.save("fu-products", store);
        return object;
      }
    } else {
      return {
        image: "",
        name: "product name",
        company: "company name",
        code: this.defaultCode(),
        location: {
          lon: 0,
          lat: 0
        },
        divers: "informations diverses"
      };
    }
  }
};
