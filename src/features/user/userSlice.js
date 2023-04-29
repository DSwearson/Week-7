import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: false
};


export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    userLogin: (state, action) => {
        console.log("user coming in?",action.payload);
        state.value = {...action.payload}
    }

  }

});


export const { userLogin, userLogout} = userSlice.actions;


export const selectUser = (state) => {
    return state.user.value
};
//this has to match from initial value
// state.[store name][key from initial]


export default userSlice.reducer;
