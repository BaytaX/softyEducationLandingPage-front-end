import { BASE_URL } from "@/constants/backend";

export const getCourseById = async function ({
  courseId,
  locale,
}: {
  courseId: string | string[];
  locale: string;
}) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/courses?filters[uuid][$eq]=${courseId}&locale=${locale}&populate[0]=instructor.avatar&populate[1]=sub_courses.contents&populate[2]=img&populate[3]=category&populate[4]=technologies`,
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

// `${BASE_URL}/api/courses/${courseId}?populate[sub_courses][populate][0]=contents`,
// populate[0]=instructor&populate[1]=sub_courses.contents&populate[2]=instructor.img
