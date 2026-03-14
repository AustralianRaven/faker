import { department as commerceDepartment } from './department';
import { isbn as commerceIsbn } from './isbn';
import { price as commercePrice } from './price';
import { product as commerceProduct } from './product';
import { productAdjective as commerceProductAdjective } from './product-adjective';
import { productDescription as commerceProductDescription } from './product-description';
import { productMaterial as commerceProductMaterial } from './product-material';
import { productName as commerceProductName } from './product-name';
import { upc as commerceUpc } from './upc';

export const commerceModule = {
  department: commerceDepartment,
  isbn: commerceIsbn,
  price: commercePrice,
  product: commerceProduct,
  productAdjective: commerceProductAdjective,
  productDescription: commerceProductDescription,
  productMaterial: commerceProductMaterial,
  productName: commerceProductName,
  upc: commerceUpc,
};
