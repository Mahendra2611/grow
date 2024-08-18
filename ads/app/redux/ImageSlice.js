'use client'
import { createSlice } from "@reduxjs/toolkit";

const ImageSlice = createSlice({
    name: "imageSlice", 
    initialState: {
        img:{
            files: [],  // Store the File objects here
            link: [],   // Store the URLs for rendering previews
            name: [],
            premium: [],
        },
        bgimg:{
            bgfiles: [],  // Store the File objects here
            bglink: [],   // Store the URLs for rendering previews
            bgname: [],
            bgpremium: [],
        }
    },
    reducers: {
        addimg: (state, action) => {
            const file = action.payload.files;
            const fileURL = URL.createObjectURL(file);

            state.img.files.push(fileURL); 
            state.img.link.push(file); 
            state.img.name.push(action.payload.tags); 
            state.img.premium.push(action.payload.type); 
        },
        addbgimg: (state, action) => {
            const file = action.payload.files;
            const fileURL = URL.createObjectURL(file);

            state.bgimg.bgfiles.push(fileURL); 
            state.bgimg.bglink.push(file); 
            state.bgimg.bgname.push(action.payload.tags); 
            state.bgimg.bgpremium.push(action.payload.type); 
        },
    }
});

export default ImageSlice.reducer;
export const {
   addimg,
   addbgimg
} = ImageSlice.actions;
