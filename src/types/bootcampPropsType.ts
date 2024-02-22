interface bootcampPropsType {
  title: string;
  description: string;
  field: string;
  learningProgram: string;
  price: number;
  skills: string;
  level: string;
  duration: string;
  howManyTimes: string;
  where: string;
  nextSession: string;
  pre_requirements: string;
  objectives_description: string;
  what_learn: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  category: {
    data: {
      id: number;
      attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    };
  };
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
          medium: {
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
  courses: {
    data: {
      id: number;
      attributes: {
        title: string;
        description: string;
        where: string;
        link: string | null;
        learn: string;
        starting_date: string;
        time_from: string;
        time_to: string;
        mini_description: string;
        video_link: string;
        duration: string;
        howManyTimes: string;
        pre_requirements: string;
        new_session: string;
        original_price: number;
        discount_price: number;
        numLectures: string;
        numSections: string;
        duration_hours: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        objectives_description: string;
        popular: boolean;
      };
    }[];
  };
  localizations: {
    data: any[]; // Update this type based on the actual structure of the "data" array
  };
}

export default bootcampPropsType;
