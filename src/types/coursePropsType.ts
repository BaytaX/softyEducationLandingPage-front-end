interface CourseAttributes {
  title: string;
  description: string;
  where: string;
  link: string | null;
  learn: string;
  starting_date: string;
  time_from: string;
  time_to: string;
  mini_description: string;
  category: string;
  video_link: string;
  duration: string;
  howManyTimes: string;
  pre_requirements: string;
  new_session: string;
  original_price: string;
  discount_price: string;
  numLectures: string;
  numSections: string;
  duration_hours: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  objectives_description: string;
  img: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
          thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string | null;
            width: number;
            height: number;
            size: number;
            url: string;
          };
          small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string | null;
            width: number;
            height: number;
            size: number;
            url: string;
          };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
  instructor: {
    data: {
      id: number;
      attributes: {
        full_name: string;
        job: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
      };
    };
  };
  sub_courses: {
    data: {
      id: number;
      attributes: {
        title: string;
        numLectures: number;
        duration: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
      };
    }[];
  };
  localizations: {
    data: any[]; // Update this type based on the actual structure of the "data" array
  };
}

export default CourseAttributes;
