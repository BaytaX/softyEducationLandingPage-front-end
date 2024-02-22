import { BASE_URL } from "@/constants/backend";

export const getSuggestedBlogs = async function ({
  blogId,
  locale,
}: {
  blogId: string | string[];
  locale: string | string[];
}) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/blogs?locale=${locale}&filters[suggested][$eq]=true&filters[id][$ne]=${blogId}&sort[0]=createdAt:desc&populate=*`,
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
