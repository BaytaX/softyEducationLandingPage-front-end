import React from "react";

type TagBoxPropsType = {
  tag: string;
  size?: string;
};

export default function TagBox({ tag, size }: TagBoxPropsType) {
  return (
    <div className={`py-2 border  text-gray-500 rounded-full ${size} `}>
      {tag}
    </div>
  );
}
