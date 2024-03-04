import { BASE_URL } from "@/constants/backend";

type subscribePropsType = {
  data: {
    full_name: string;
    email: string;
    phone_number: string;
  };
};

export const subscribe = async function ({ data: client }: subscribePropsType) {
  try {
    const res = await fetch(`${BASE_URL}/api/news-letters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: client }),
    });
  } catch (err) {
    return err;
  }
};
