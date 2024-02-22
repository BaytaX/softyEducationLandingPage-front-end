import { BASE_URL } from "@/constants/backend";

export const getAllTechnologies = async function () {
  try {
    const res = await fetch(`${BASE_URL}/api/technologies?populate=*`, {
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
