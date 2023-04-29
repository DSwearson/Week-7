import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value:[
    {
        "title": "Calculus",
        "desc": "some math",
        "author":"Anthony Tomba",
        "img": "book1.jpg",
        "price": 79.99
    },
    {
        "title": "Trigonometry",
        "desc": "some math",
        "author": "Mark Dugopolski",
        "img": "book2.jpg",
        "price": 59.99
    },
    {
        "title": "History",
        "desc": "some history",
        "author":"Holt McDougal",
        "img": "book3.jpg",
        "price": 49.99
    }
]
};


export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updatePrice: (state, action) => {
      console.log("This is the value passing in",action.payload.id, action.payload.newPrice)

      let temp = state.value;
      temp[action.payload.id].price = action.payload.newPrice
      state.value = [...temp]
  }
  }

});


export const { updatePrice } = bookSlice.actions;


export const selectBooks = (state) => state.books.value;
//this has to match from initial value
// state.[store name][key from initial]


export default bookSlice.reducer;
