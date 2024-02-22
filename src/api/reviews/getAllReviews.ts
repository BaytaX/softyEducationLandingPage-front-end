import { BASE_URL } from "@/constants/backend";

export const getAllReviews = async function () {
  try {
    const res = await fetch(`${BASE_URL}/api/reviews?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};
