import { BASE_URL } from "@/constants/backend";

export const getBootcampById = async function ({
  bootcampId,
  locale,
}: {
  bootcampId: string | string[];
  locale: string;
}) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/bootcamps?filters[slug][$eq]=${bootcampId}&locale=${locale}&populate[0]=img&populate[1]=category&populate[2]=courses.sub_courses.contents`,
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
