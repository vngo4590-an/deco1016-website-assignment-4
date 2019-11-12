// This class will specify phone value
// So it will be easier to print out values with repetition
class Phone {
  constructor(name, colors, colorCode, values, price, imgLink) {
    this.name = name;
    this.values = values;
    this.price = price;
    // This will be a list because there will be a lot of images
    this.imgLink = imgLink;
    this.colors = colors; // Colors will come as HEX or RGB values inside a normal list
    this.colorCode = colorCode;
  }
  setName(name) {
    this.name = name
  }
  setValues(values) {
    this.values = values;
  }
  setPrice(price) {
    this.price = price;
  }
  setImgLink(imgLink) {
    this.imgLink = imgLink;
  }
  setColors(colors) {
    this.colors = colors;
  }
  getColors() {
    return this.colors;
  }
  getName() {
    return this.name;
  }
  getValues() {
    // Value is the list of traits
    return this.values;
  }
  getColorCode () {
    return this.colorCode;
  }
  getPrice() {
    return this.price;
  }
  getImgLink() {
    return this.imgLink;
  }
}

class Plan {
  constructor(name, price, values) {
    this.name = name;
    this.values = values;
    this.price = price;
  }
  setName() {
    this.name = name;
  }
  setValues(values) {
    this.values = values;
  }
  setPrice(price) {
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getValues() {
    // Value is the list of traits
    return this.values;
  }
  getPrice() {
    return this.price;
  }
}