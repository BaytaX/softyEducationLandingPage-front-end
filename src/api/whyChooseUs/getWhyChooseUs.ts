import { BASE_URL } from "@/constants/backend";

export const getWhyChooseUs = async function ({
  locale,
}: {
  locale: string | string[];
}) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/why-choose-uses?locale=${locale}`,
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
