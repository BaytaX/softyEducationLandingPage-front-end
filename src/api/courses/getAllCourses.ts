import { BASE_URL } from "@/constants/backend";

export const getAllCourses = async function ({ locale }: { locale: string }) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/courses?populate=*&locale=${locale}`,
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
    return err;
  }
};
