import axios from "axios";

export const UploadImage = async (image) => {
  try {
    const formdata = new FormData();
    formdata.append("image", image);

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.VITE_IMG_API_KEY}`, formdata);

    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
