import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
//   let products = [];
  let [products, setProducts] = useState([]);
  let [temp, setTemp] = useState(true);

//   console.log(temp);
  async function getData() {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res);
    setProducts(res.data.products);
  }

    useEffect(()=>{
        getData();
    }, [temp])


  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}
      <button onClick={()=>{
        setTemp(prev => !prev);
      }}>Click</button>
      <ul>
        {products.map(product => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  );
};

export default Products;
