import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  userName: "Jack",
  viewType: "listView",
  viewToggleLoader: false,
  feedbackForm: {
    firstname: "",
    lastname: "",
    address: "",
    country: "",
    email: "",
    phonenumber: "", 
  },
  feedbackFormDrawer: false
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.data = action.payload;
    },
    removeElement: (state, action) => {
      const idToRemove = action.payload;
      state.data = state.data.filter(item => item.id !== idToRemove);
    },
    setListView: (state, action) => {
      state.viewType = action.payload;
    },
    setViewToggleLoader: (state, action) => {
      state.viewToggleLoader = action.payload;
    },
    updateFeedbackField: (state, action) => {
      const { name, value } = action.payload;
      state.feedbackForm[name] = value;
    },
    resetFeedbackForm: (state) => {
      state.feedbackForm = {
        firstname: "",
        lastname: "",
        address: "",
        country: "",
        email: "",
        phonenumber: "",
      };
    },
    setFeedbackFormDrawer: (state, action) => {
      state.feedbackFormDrawer = action.payload;
    }
  }
});

export const {
  setAllData,
  removeElement,
  setListView,
  setViewToggleLoader,
  updateFeedbackField,
  resetFeedbackForm,
  setFeedbackFormDrawer
} = dataSlice.actions;

export default dataSlice.reducer;
