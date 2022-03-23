const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require("../assets/images/burgundy-117.png"),
    bannerImage: require("../assets/images/burgundy-117.png"),
    title: "Explore Online Courses",
    description:
      "All types of educational & professional courses available online.",
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/burgundy-remote-education.png"),
    bannerImage: require("../assets/images/burgundy-remote-education.png"),
    title: "An Online Library At Your Disposal",
    description: "Have unlimited access to mind strengthening content",
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/burgundy-library-1.png"),
    bannerImage: require("../assets/images/burgundy-library-1.png"),
    title: "An Online Store ",
    description:
      "You’ll be able to access awesome books and have them delivered promptly. ",
  },
];

const course_details_tabs = [
  {
    id: 0,
    label: "Description",
  },
  {
    id: 1,
    label: "Content",
  },
  {
    id: 2,
    label: "Discussion",
  },
];

const heading1 = [
  {
    heading:
      "Take advantage of free resoorces to guide you on your learning or teaching journey",
  },
];

export default {
  onboarding_screens,
  course_details_tabs,
  heading1,
};
