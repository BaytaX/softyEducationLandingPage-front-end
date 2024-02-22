import { BASE_URL } from "@/constants/backend";

export const getPriceRange = async function () {
  try {
    const res = await fetch(`${BASE_URL}/api/price-range`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
