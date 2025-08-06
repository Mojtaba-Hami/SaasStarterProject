"use server";
export const addProduct = async (id) => {
  try {
    const response = await fetch("...");
    const data = response.json();

    if (data.data) {
      return { productRes: data.data };
    }
  } catch (err) {
    console.log(err);
    return { productErr: err };
  }
};
