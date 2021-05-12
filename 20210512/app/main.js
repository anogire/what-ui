import { data } from './data.js';

function getProducts(data) {
  const fields = ["ID", "PRODUCT_NAME", "MANUFACTURE", "CATEGORY", "INGRIDIENTS", "AMOUNT", "UNITS", "PRICE", "IMG_LINK"];
  const quantityFields = fields.length;

  const entryJson = data["feed"]["entry"];
  const products = [];
  let product = {};
  let i = 0;


  for (const key in entryJson) {
    if (i % quantityFields !== 0 || i == 0) {
      product = {
        ...product,
        [fields[i++]]: entryJson[key]["content"]["$t"]
      };
    } else {
      products.push(product);
      product = {};
      i = 0;
      product = {
        ...product,
        [fields[i++]]: entryJson[key]["content"]["$t"]
      };
    }
  }
  products.push(product);
  return products.splice(1);
}



console.log(getProducts(data));