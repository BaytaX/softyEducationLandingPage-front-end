import React from "react";

type BlogBoxPropsType = {
  data: {
    id: number;
    title: string;
    description: string;
    created_at: string;
    tags: string[];
    img: string;
    link: string;
  };
};

export default function BlogBox({ data }: BlogBoxPropsType) {
  const { title, description, created_at, tags, img, link } = data;
  return (
    <div className="w-full">
      <div
        className="h-[28rem] rounded-t-[1rem] bg-cover "
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${img})`,
        }}
      ></div>
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <p className="text-gray-500 text-[1.7rem]">{created_at}</p>
          <p className="text-[2rem] text-color-blue-1 font-semibold cursor-pointer hover:opacity-85 leading-[2.8rem] transition-all">
            {title}
          </p>
        </div>
        <p className="text-[1.7rem] text-gray-500 font-light">{description}</p>

        <div className="flex gap-4 mt-2 flex-wrap">
          {tags?.slice(0, 2)?.map((tag) => (
            <div
              className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
