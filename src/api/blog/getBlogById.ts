import { BASE_URL } from "@/constants/backend";

export const getBlogById = async function ({
  blogId,
  locale,
}: {
  blogId: string | string[];
  locale: string | string[];
}) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/blogs?filters[slug][$eq]=${blogId}&locale=${locale}&populate[0]=img&populate[1]=tags&populate[2]=sub_titles.imgs`,
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
