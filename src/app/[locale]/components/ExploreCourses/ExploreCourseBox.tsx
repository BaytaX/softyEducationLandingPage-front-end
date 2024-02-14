import React from "react";

type ExploreCourseBoxPropsType = {
  data: {
    link: string;
    title: string;
    img: any;
    description: string;
  };
};
// bg-[linear-gradient(to_right_bottom,#00003099,#00003099),url("https://s3-alpha-sig.figma.com/img/c83f/0957/c8d81811e843b6070c5160b9521340d2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaxWzcAqb~s479V-WnziRmRU7KwIJ5aY--DUCBF28xVvbrE67FIRn1dg5RBrOyb8E44EBa8KA~84XLSmUf1OoUZkZdcDOW~NdgcXC~3200TL5U1jYEdmVBTvFqXN9LytIpyB~T1TWJgZnPNJxOttMPj~36I3Lh2jC3fIYlPDrGcdeMhXJkrYWQFa9p0TCXajrBXs-NT7hTaMSdETT3Ssa~ujErySWcTvwyge2hj26gceUymsfFZ1XfOYl8Y3YGU1zVv683hT6pteZGictCyZh9pdm08zuoBBQlvtoxMjtfOtueb60tsLLXWZ-rFDToxQNq2vrlVtliDlW7c15VeDyw__")] bg-cover

export default function ExploreCourseBox({ data }: ExploreCourseBoxPropsType) {
  const { title, description, img, link } = data;
  return (
    <div className="	w-full h-[75rem] overflow-hidden">
      <div></div>
      <div
        style={{
          backgroundImage: `linear-gradient(#00003099,#00003099),url(${img})`,
        }}
        className={` p-10 gap-44 w-full h-full  bg-cover flex flex-col justify-center items-center    hover:scale-125 transition-all duration-300 	 `}
      >
        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="text-white text-center text-[2.6rem]">{title}</p>
          <p className="text-white text-center text-[1.4rem] w-10/12 font-thin">
            {description}
          </p>
        </div>
        <button className="hover:opacity-90 cursor-pointer rounded-full px-32 py-3 bg-transparent  border-2 border-white text-white text-[1.6rem] ">
          View More
        </button>
      </div>
    </div>
  );
}
