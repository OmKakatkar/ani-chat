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
			state.showModal = false;
			state.modalData = null;
		},
		openPostModal: (state, action) => {
			state.showModal = true;
			state.modalData = action?.payload?.modalData;
		},
	},
});

export const { openPostModal, closePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;
