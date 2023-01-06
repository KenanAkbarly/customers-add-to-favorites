import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';
const initialState = {
  favItems:localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) :[],
  favTotalQuantity: 0,
  favTotalAmount: 0,
}
export const Favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {

    addToFav(state,action){
      const itemIndex = state.favItems.findIndex((item)=> item.id === action.payload.id)
      if(itemIndex >= 0){
        state.favItems[itemIndex].cartQuantity +=1;
        toast.info('increased prodduct quantity',{
          position:"bottom-left"
        })
      }else{
        const tempProduct = {...action.payload, cartQuantity:1};
       state.favItems.push(tempProduct);
       toast.success(`${action.payload.companyName} added to favorites`,{
        position:"bottom-left"
      })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.favItems))
    }
  }
})
export const {addToFav} = Favorite.actions;

export default Favorite.reducer;