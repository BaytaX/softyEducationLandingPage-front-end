import React from "react";

export default function RecentBlogs() {
  return (
    <div className="mt-44">
      <h2 className="text-[3.2rem]">Recent blog posts</h2>
      <div className="flex gap-24 items-center w-full h-fit mt-8 ">
        <div className=" w-1/2">
          <div
            className="h-[45rem] rounded-t-[2rem] bg-cover "
            style={{
              backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${"/blog_imgs/blog.jpg"})`,
            }}
          ></div>
          <div className="flex flex-col gap-6 mt-12">
            <div>
              <p className="text-gray-500 text-[1.7rem]">October 21, 2023</p>
              <p className="text-[2.4rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
                Converstation with expert UX researcher{" "}
              </p>
            </div>
            <p className="text-[1.7rem] text-gray-500 font-light">
              The in-between is the collection of passive moments after you’ve
              done what you can do and the only thing left is to wait and
              maintain faith that eventually someone will..
            </p>
            <div className="flex gap-4 mt-4">
              <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                Web design
              </div>
              <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                Research{" "}
              </div>
              <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                Interviews{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-1/2">
          <div className=" w-full h-[20rem] flex gap-8">
            <div
              className="w-1/2 rounded-l-[2rem] bg-cover "
              style={{
                backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${"/blog_imgs/blog.jpg"})`,
              }}
            ></div>
            <div className="flex flex-col w-1/2 justify-between">
              <div>
                <p className="text-gray-500 text-[1.7rem]">October 21, 2023</p>
                <p className="text-[2rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
                  How to a successful business with your partner
                </p>
              </div>
              <p className="text-[1.6rem] text-gray-500 font-light">
                The in-between is the collection of passive moments after you’ve
                done what you ...
              </p>
              <div className="flex gap-4 mt-4">
                <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                  Web design
                </div>
                <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                  Research{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-[20rem] flex gap-8">
            <div
              className="w-1/2 rounded-l-[2rem] bg-cover "
              style={{
                backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${"/blog_imgs/blog.jpg"})`,
              }}
            ></div>
            <div className="flex flex-col w-1/2 justify-between">
              <div>
                <p className="text-gray-500 text-[1.7rem]">October 21, 2023</p>
                <p className="text-[2rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
                  How to a successful business with your partner
                </p>
              </div>
              <p className="text-[1.6rem] text-gray-500 font-light">
                The in-between is the collection of passive moments after you’ve
                done what you ...
              </p>
              <div className="flex gap-4 mt-4">
                <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                  Web design
                </div>
                <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                  Research{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-[20rem] flex gap-8">
            <div
              className="w-1/2 rounded-l-[2rem] bg-cover "
              style={{
                backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${"/blog_imgs/blog.jpg"})`,
              }}
            ></div>
            <div className="flex flex-col w-1/2 justify-between">
              <div>
                <p className="text-gray-500 text-[1.7rem]">October 21, 2023</p>
                <p className="text-[2rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
                  How to a successful business with your partner
                </p>
              </div>
              <p className="text-[1.6rem] text-gray-500 font-light">
                The in-between is the collection of passive moments after you’ve
                done what you ...
              </p>
              <div className="flex gap-4 mt-4">
                <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                  Web design
                </div>
                <div className="py-2 px-12 border border-gray-500 text-[1.4rem] text-gray-500 rounded-full">
                  Research{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
