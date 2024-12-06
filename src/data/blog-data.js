import img_1 from "../../public/assets/img/blog/14.jpg";
import img_2 from "../../public/assets/img/blog/2.jpg";
import img_3 from "../../public/assets/img/blog/4.jpg";

import author_img_1 from "../../public/assets/img/blog/blog-avata-1.png";
import author_img_2 from "../../public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "../../public/assets/img/blog/blog-avata-3.png";

import img_4 from "../../public/assets/img/blog/blog-4-1.jpg";
import img_5 from "../../public/assets/img/blog/blog-4-2.jpg";

const blog_data = [
  // home 03
  {
    id: 1,
    img: img_1,
    category: "Design, Architecture",
    color: "1",
    date: "28 April, 2024",
    title:
      "Navigating the Future: How Strategic Consultancy Drives Sustainable Growth",
    author_img: author_img_1,
    author_name: "Seth Godin",
    job_title: "An entrepreneur and public speaker",
  },
  {
    id: 2,
    img: img_2,
    category: "Architecture",
    color: "2",
    date: "12 July, 2024",
    title:
      "Unlocking Market Insights: The Power of Research in Driving Business Decisions",
    author_img: author_img_2,
    author_name: "Rudra Ghosh",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 3,
    img: img_3,
    category: "Urbanism",
    color: "3",
    date: "01 November, 2024",
    title:
      "Public Sector Transformation: How Effective Governance and Reform Impact Economic Development",
    author_img: author_img_3,
    author_name: "Ryan Holiday",
    job_title: "Marketing Director at the American Apparel",
  },

  // home 04
  {
    id: 4,
    img: img_4,
    category: "Blog",
    color: "",
    date: "10 min",
    title: <>Building for the real world</>,
    description: (
      <>
        How friends from college went on to build one powerful platform (hint:
        it was ours).
      </>
    ),
    author_img: author_img_3,
    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },
  {
    id: 5,
    img: img_5,
    category: "Blog",
    color: "",
    date: "24 min",
    title: <>High Returns on Investment</>,
    description: (
      <>
        How friends from college went on to build one powerful platform (hint:
        it was ours).
      </>
    ),
    author_img: author_img_3,
    author_name: "Penny Tool",
    job_title: "Founder & CEO Dulalix",
  },

  // anything here
];
export default blog_data;
