import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showModal: false,
	modalData: null,
};

const postModalSlice = createSlice({
	name: "postModal",
	initialState,
	reducers: {
		closePostModal: (state) => {
			state.postModal = false;
			state.modalData = null;
		},
		openPostModal: (state, action) => {
			state.postModal = true;
			state.modalData = action.payload.modalData;
		},
	},
});

export const { openPostModal } = postModalSlice.actions;
export default postModalSlice.reducer;
