import { BASE_URL } from "@/constants/backend";

export const getAllBlogs = async function ({
  tagId,
  locale,
}: {
  tagId: number;
  locale: string | string[];
}) {
  let query = `${BASE_URL}/api/blogs?sort[0]=createdAt:desc&populate=*&locale=${locale}`;
  try {
    if (tagId)
      query = `${BASE_URL}/api/tags/${tagId}?populate[0]=blogs.img&populate[1]=blogs.tags`;
    const res = await fetch(query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();
    if (tagId)
      return data?.attributes?.blogs?.data?.filter(
        (blog: any) => blog?.attributes?.locale === locale
      );
    else {
      return data;
    }
  } catch (err) {
    return err;
  }
};
