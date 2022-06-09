import axios from "axios";
const BASE_URL = 'http://localhost:8081/cart';

class CartService{

    addCart(data){
        return axios.post(`${BASE_URL}/create`, data)
      }
      deleteContact(cartId) {
        return axios.delete(`${BASE_URL}/delete/${cartId}`); 
      }
      getAllCart() {
        return axios.get(`${BASE_URL}/getAll`);
      }
      getCart(cartId) {
        return axios.get(`${BASE_URL}/getById/{cartId}`);
      }
      updateQuantity(cartId,quantity){
        return axios.put(`${BASE_URL}/UpdateQunatity/${cartId}/${quantity}`);
      }
}
export default new CartService();