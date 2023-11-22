import { createSlice } from "@reduxjs/toolkit";

export const movieSlice=createSlice({
	name:'movie',
	initialState:{
		movies:[],
		
	},
	reducers:{
		getMovies:(state,action)=>{
			state.movies=action.payload;
		},
		// addFavourite:(state,action)=>{
		// 	state.favourite.push(action.payload);
		// },
		// removeFavourite:(state,action)=>{
		// 	state.favourite=state.favourite.filter(item=>item.id!=action.payload.id)
		// }
	}
})

export const { getMovies }=movieSlice.actions
export default movieSlice.reducer;