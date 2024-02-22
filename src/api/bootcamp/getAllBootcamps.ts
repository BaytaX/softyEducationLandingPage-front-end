import { BASE_URL } from "@/constants/backend";

export const getAllBootcamps = async function ({
  searchBootcamp,
  sortValue,
  locale,
}: {
  searchBootcamp?: string;
  sortValue?: string;
  locale: string | string[];
}) {
  let query = `${BASE_URL}/api/bootcamps?populate=*&locale=${locale}${
    searchBootcamp !== "" ? `&filters[title][$contains]=${searchBootcamp}` : ""
  }`;
  try {
    if (sortValue) {
      let kindSort = sortValue.split("-")[0];
      let typeSort = sortValue.split("-")[1];
      query += `&sort[0]=${kindSort}${typeSort === "desc" ? ":desc" : ""}`;
    }
    console.log(query);
    const res = await fetch(query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
