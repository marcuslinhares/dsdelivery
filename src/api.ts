import axios from 'axios';
import { OrderPayload } from './Orders/types';

export function fetchProducts() {
  return axios("https://backenddsdelivery.onrender.com/products");
}

export function fetchLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/S%C3%A3o%20Paulo.json?access_token=pk.eyJ1IjoibWFyY3VzbGluaGFyZXMiLCJhIjoiY20waXMwMnk5MHBodTJscTJvNGFmaXd6ZyJ9.wm64iTEnGm4npT9tYr63Zw`,
  );
}

export function saveOrder(payload: OrderPayload) {
  return axios.post("https://backenddsdelivery.onrender.com/orders", payload);
}
