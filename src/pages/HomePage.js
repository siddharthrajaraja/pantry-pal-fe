



import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout/Layout';
import { useAuth } from '../context/auth';
import axios from "axios";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";



const HomePage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


    //get products
    const getAllProducts = async () => {
      try {
        
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}` + "/api/v1/product/get-product");
        
        setProducts(data.products);
      } catch (error) {
       
        console.log(error);
      }
    };

    useEffect(()=>{
      getAllProducts();
    },[]);

  return (
    <Layout title="All Products - Best offers">
      <div className="row-mt-3">
        <div className="col-md-3">
          <h6 className="text-center">Product Page</h6>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
          {products?.map((p) => (
              
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,25)}</p>
                    <p className="card-text">Rs {p.price}</p>
  
                    <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                      
                      ADD TO CART</button>
                  </div>
                </div>
             
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;



