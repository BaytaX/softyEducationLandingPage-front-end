import { BASE_URL } from "@/constants/backend";

export const getRelatedBootcamps = async function (categoryId: number) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/categories/${categoryId}?populate[0]=bootcamps.img`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
