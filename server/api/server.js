import products from "../dbModels/product"

export default defineEventHandler( async (event) => {
  try{
    const productArr = await products;

    return {
      productArr
    }
  }
catch(err){ 
  console.log(err);
  return{ 
    err
  }
}
  })
  