import { BASE_URL } from "@/constants/backend";

export const getFilteredCourses = async function (
  searchCourse: string,
  isFilterCatgory: number[],
  isFilterTech: number[],
  isFilterDuration: number[],
  isFilterPrice: any,
  locale: string | string[]
) {
  let query = `${BASE_URL}/api/courses?populate=*&locale=${locale}${
    searchCourse !== "" ? `&filters[title][$contains]=${searchCourse}` : ""
  }`;
  try {
    if (isFilterPrice?.length) {
      query += `&filters[original_price][$gte]=${isFilterPrice[0]}&filters[original_price][$lte]=${isFilterPrice[1]}`;
    }
    if (isFilterCatgory?.length) {
      query += `${isFilterCatgory.map(
        (ele, i) => `&filters[category][id][$in][${i}]=${ele}&`
      )}`;
    }
    if (isFilterTech?.length) {
      query += `${isFilterTech.map(
        (ele, i) => `&filters[technologies][id][$in][${i}]=${ele}&`
      )}`;
    }
    if (isFilterDuration?.length) {
      query += `${isFilterDuration.map(
        (ele, i) => `&filters[between_duration][id][$in][${i}]=${ele}&`
      )}`;
    }
    const res = await fetch(query, {
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
