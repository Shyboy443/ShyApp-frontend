import axios from "axios";
import { BACKEND_URL } from "../../../services/authService";




// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(`${BACKEND_URL}/api/products`, formData);
  return response.data;
  
};


// Get All Products
const getProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/products`);
  return response.data;
  
};
// Delete a Product
const deleteProducts = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/api/products/${id}`);
  return response.data;
  
};

// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/api/products/${id}`);
  return response.data;
};

// Update Product

const updateProducts = async (id, formData) => {
  const response = await axios.patch(`${BACKEND_URL}/api/products/${id}`,formData);
  return response.data;
  
};

 const productService = {
    createProduct,
    getProducts,
    deleteProducts,
    updateProducts,
    getProduct,
 }

 export default productService;
