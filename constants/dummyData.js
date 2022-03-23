const books = [
  {
    id: 1,
    title: "Action Word Game",
    description:
      "Each word card reinforces the 100 words that children need to know – and it helps them master comprehension, spelling, writing, and usage of each word.",
    price: 10000,
    image: require("../assets/books/BookLover.jpg"),
  },
  {
    id: 2,
    title: "Creative Thinking Workbook",
    description:
      "Discover how a growth mindset can help you achieve your goals―activities for kids 8 to 13. \n\nA Creative Thinking Workbook can help you develop your abilities to tackle just about anything. Creative Thinking Workbook for Kids is a fun and engaging activity book, for ages 8 to 13, that can help you train your brain and develop creative problem-solving skills through practice and perseverance.",
    price: 10000,
    image: require("../assets/books/CREATIVE_THINKING_WORKBOOK_1.max-350x225.png"),
  },
  {
    id: 3,
    title: "Level 3 Book Package",
    description:
      "This compilation of 3 tales from the Moran Publishers aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. Accompanied …",
    price: 30000,
    image: require("../assets/books/BOOK_PACKAGE_LEVEL31_HZLjJS8.max-350x225.png"),
  },
  {
    id: 4,
    title: "Level 1 Book Package",
    description:
      "This compilation of 3 tales from the Moran Publishers aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. Accompanied …",
    price: 25000,
    image: require("../assets/books/Level_1BookPackage.png"),
  },
  {
    id: 5,
    title: "Level 2 Book Package",
    description:
      "This compilation of 3 tales from the Moran Publishers aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. Accompanied …",
    price: 25000,
    image: require("../assets/books/BOOK_PACKAGE_LEVEL23.max-350x225.png"),
  },
  {
    id: 6,
    title: "Kavuyo",
    description:
      "• GET TO KNOW UGANDA BETTER: You think you know your country? Think again! Our KAVUYO Game is a great chance to spend quality time with your loved ones while getting to know places, people and foods like you never did before! \n• PLAY IT ANYTIME, ANYWHERE: Make any occasion exciting and light-hearted with our card game that you can play for a romantic evening, drinking sessions, meeting with friends, family gatherings, and more! ",
    price: 20000,
    image: require("../assets/books/KAVUYO_1.max-350x225.png"),
  },
  {
    id: 7,
    title: "Adult Coloring Book",
    description:
      "Why You Will Love this Book. \n\n • Relaxing Coloring Pages. Every page you color will pull you into a relaxing world where your responsibilities will seem to fade away... \n• Beautiful Illustrations. We’ve included 100 unique images for you to express your creativity and make masterpieces.",
    price: 15000,
    image: require("../assets/books/AdultColoring.jpg"),
  },
  {
    id: 8,
    title: "Children's Coloring Book",
    description:
      "• CHILDREN'S COLORING BOOK: Features 50 Coloring Pages and 25 drawing pages. \n• CHILDREN'S COLORING PAGES: Let little ones color and decorate their favorite characters from Different children movies. ",
    price: 10000,
    image: require("../assets/books/CHILDRENColoring_1.max-350x225.png"),
  },
  {
    id: 9,
    title: "UnBound",
    description:
      "#Unbound is your ultimate guide to self-discovery and awareness. \n\nIt is a practical workbook with life lessons and personal activities on career, money management, mental health, entrepreneurship, relationships and everything between that. \n\nIt is nothing like you have seen before.",
    price: 25000,
    image: require("../assets/books/Unbound.jpg"),
  },
];

const courses = [
  {
    id: 1,
    course_title: "Conducting User Research",
    course_image: require("../assets/courses/ConductingUserResearch.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "User Research",
    description:
      "Are you in the process of developing a product and designing a service? Find out what you need to do in order to develop the right product and service for your target market.",
    content:
      " What is User Research?\n\n Why you need to do research\n\n How to conduct research\n\nWho is your target group?\n\n Choosing Research questions\n\n Building a Persona",
  },
  {
    id: 2,
    course_title: "Blogging and Writing",
    course_image: require("../assets/courses/Blogging_and_Writing.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Blogging and Writing",
    description:
      "Are you a writer that is wondering how to go about setting up your blog?\n\nHere are a few tips on how to get started on your writing journey.",
    content:
      "What is blogging?\n\nWhy blogging?\n\nWhat your blog says\n\nChoosing a blog topic\n\nFeatures of a blog 1\n\nFeatures of a blog 2\n\nDriving Traffic 1\n\nDriving Traffic 2\n\nMonetizing your blog 1\n\nMonetizing your blog 2\n\nTravel writing\n\nShow and do not tell\n\nBlogging and Photography\n\nBlogging and Photography 2",
  },
  {
    id: 3,
    course_title: "Building Effective Teams",
    course_image: require("../assets/courses/Building_Effective_Teams.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Building Effective Teams",
    description: "",
    content:
      "What is teamwork?\n\nImportance of teamwork\n\nElements of Teamwork\n\nTips for effective teamwork\n\nMore tips\n\nRemember!",
  },
  {
    id: 4,
    course_title: "Risk and Safeguarding",
    course_image: require("../assets/courses/Risk_and_Safeguarding.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Effectively mitigating Risk",
    description:
      "This module will help you know why Safeguarding is a very important element of the work that we do.\n\nWhat risk is and what it involves.\n\nWhat to do in cases of safeguarding issues.",
    content:
      "Introduction to Safeguarding\n\nWhat is Safeguarding?\n\nWho are the vulnerable people?\n\nIn the case of Helping Hand\n\nThe importance of safeguarding\n\nWhat is Risk?\n\nWhat risks exist?\n\nHow to identify risk\n\nWhere does Helping Hand start?\n\nIn case of a safeguarding concern...",
  },
  {
    id: 5,
    course_title: "Marketing your brand",
    course_image: require("../assets/courses/Marketing_your_brand.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Marketing your brand",
    description:
      "Are you a business owner wondering how to get your product to the market? Here is how you can.",
    content:
      "Focus on the current content or product\n\nDo your research\n\nOnline channels\n\nBe relationship oriented\n\nBuild partnerships",
  },
  {
    id: 6,
    course_title: "Create a Business Plan - 30 Minutes",
    course_image: require("../assets/courses/Create_a_Business_Plan_30_Minutes.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Business Ideation",
    description: "",
    content:
      "Problem solving\n\nFind the cause\n\nKnow your target market\n\nWhat's the evidence?\n\nThe solution\n\nHow different are you?\n\nKeeping your clients\n\nSustainability plan",
  },
  {
    id: 7,
    course_title: "Financial Literacy for Beginners",
    course_image: require("../assets/courses/Financial_Literacy_for_Beginners.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Financial Literacy",
    description: "",
    content:
      "Track your Spending\n\nDevelop a savings culture\n\nThink long term\n\nBenefits of Financial Literacy\n\nRemember!\n\nMake Financial Goals\n\nIdentify alternative sources of income\n\nNeeds and Wants",
  },
  {
    id: 8,
    course_title: "Digital Literacy to Accelerate Your Career",
    course_image: require("../assets/courses/Digital_Literacy_to_Accelerate_Your_Career.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Digital Literacy Tips",
    description:
      "We live in an era of constant use of technology and social media platforms around the world. However, how you use these digital platforms matter. This course will help you find out how best you can utilize your online presence.",
    content:
      "Think Think Think\n\nRespect for people\n\nKeep it private\n\nUse your name\n\nBe cautious\n\nBuild your brand\n\nBeware!",
  },
  {
    id: 9,
    course_title: "How to Ace That Online Job Application",
    course_image: require("../assets/courses/How_to_Ace_That_Online_Job_Application.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Having an impressive application",
    description:
      "Wondering how to apply for a job, internship, scholarship or volunteer opportunity online? This course is a guide to help you get all the vitals right.",
    content:
      "Application form\n\nWord Limit\n\nWhile you submit your application\n\nCover Letter\n\nGrammar",
  },
  {
    id: 10,
    course_title: "Email Communication Skills to Give You an Edge",
    course_image: require("../assets/courses/Email_Communication-Skills-to-Give-You-an-Edge.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Email Writing",
    description:
      "These short tips will help you know how to communicate effectively via email writing.",
    content:
      "Email Writing Tips\n\nCc vs Bcc\n\nReply vs Reply All\n\nEmail Signature",
  },
  {
    id: 11,
    course_title: "Skills for Public Speaking and Pitching",
    course_image: require("../assets/courses/Skills-for-Public-Speaking-and-Pitching.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Public Speaking and Presentation Skills",
    description:
      "This course will guide you on how to adequately prepare for presentations. You will be equipped with what to take note of and what to exclude while speaking and making presentations.",
    content: "Public Speaking and Presentation Skills",
  },
  {
    id: 12,
    course_title: "Personality Types For Career Advancement",
    course_image: require("../assets/courses/Personality-Types-For-Career-Advancement.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "What are personality types?",
    description:
      "This course will help you identify what kind of personality you have and how you can relate with people of different personality types.",
    content:
      "Know your personality type\n\nWhy are Personality Types Important?\n\nWe are all different\n\nOh! And Remember",
  },
  {
    id: 13,
    course_title: "Personal Leadership for Professional Growth",
    course_image: require("../assets/courses/Personal-Leadership-for-Professional-Growth.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Defining Leadership",
    description:
      "This course will guide you on how to take charge of your life while taking on other responsibilities in your life.",
    content:
      "Defining Leadership\n\nWhat is Personal Leadership?\n\nWhat do I need?\n\nWrapping it up\n\nCreate your vision plan",
  },
  {
    id: 14,
    course_title: "Career Mapping For Students",
    course_image: require("../assets/courses/Career-Mapping-For-Students.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Goal Setting for Career",
    description:
      "This activity enables the participant to assess their skill-set and know what they need to do, to improve as they plan out their careers",
    content:
      "Goal Setting for Career\n\nNeed Forecasting\n\nSelf-Assessment\n\nOpportunity Scoping",
  },
  {
    id: 15,
    course_title: "How to Nail That Job Interview",
    course_image: require("../assets/courses/How-to-Nail-That-Job-Interview.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Interview preparation",
    description:
      "Get equipped with simple tips on how to nail your job interviews and leave the interviewers impressed",
    content: " Interview preparation\n\nInterview Day",
  },
  {
    id: 16,
    course_title: "How to Write a Winning CV",
    course_image: require("../assets/courses/How-to-Write-a-Winning-CV.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "CV Content",
    description:
      "This course will guide you on how to write and formulate a winning curriculum vitae that will get you a job interview or even better your dream job.",
    content:
      "Always Remember\n\nReferees\n\nWork Experience\n\nEducation experience\n\nBio Data\n\nCV Length",
  },
];

const coursesData = [
  {
    id: 1,
    course_title: "Conducting User Research",
    course_image: require("../assets/courses/ConductingUserResearch.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "User Research",
    description:
      "Are you in the process of developing a product and designing a service? Find out what you need to do in order to develop the right product and service for your target market.",
    content:
      " What is User Research?\n\n Why you need to do research\n\n How to conduct research\n\nWho is your target group?\n\n Choosing Research questions\n\n Building a Persona",
  },
  {
    id: 2,
    course_title: "Blogging and Writing",
    course_image: require("../assets/courses/Blogging_and_Writing.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Blogging and Writing",
    description:
      "Are you a writer that is wondering how to go about setting up your blog?\n\nHere are a few tips on how to get started on your writing journey.",
    content:
      "What is blogging?\n\nWhy blogging?\n\nWhat your blog says\n\nChoosing a blog topic\n\nFeatures of a blog 1\n\nFeatures of a blog 2\n\nDriving Traffic 1\n\nDriving Traffic 2\n\nMonetizing your blog 1\n\nMonetizing your blog 2\n\nTravel writing\n\nShow and do not tell\n\nBlogging and Photography\n\nBlogging and Photography 2",
  },
  {
    id: 3,
    course_title: "Building Effective Teams",
    course_image: require("../assets/courses/Building_Effective_Teams.png"),
    progress: "0%",
    topics: "1 Topics",
    title: "Building Effective Teams",
    description: "",
    content:
      "What is teamwork?\n\nImportance of teamwork\n\nElements of Teamwork\n\nTips for effective teamwork\n\nMore tips\n\nRemember!",
  },
];

const resources = [
  {
    id: 1,
    resource_title: "Vision Tracker",
    resource_image: require("../assets/Vision_Tracker_Poster.png"),
    description:
      "Do you have a dream? Here is a tracker for beginners, to help you bring it to life.",
    link: "https://www.thementoronline.org/documents/2/Vision_Tracker_Boundless_Minds.pdf",
  },
  {
    id: 2,
    resource_title: "Career Map Template",
    resource_image: require("../assets/Career_Map_Poster.png"),
    description:
      "Are you trying to figure out what to do next? Where to go, and how to get there? Here is a map to guide you.",
    link: "https://www.thementoronline.org/documents/4/Career_Mapping_Template.pdf",
  },
  {
    id: 3,
    resource_title: "Business Ideation Canvas Template",
    resource_image: require("../assets/Canvas_Poster.png"),
    description:
      "Do you have an idea? Use this Ideation canvas as a basic business plan!",
    link: "https://www.thementoronline.org/documents/5/Ideation_Canvas_Template.pdf",
  },
  {
    id: 4,
    resource_title: "Sample CV Template",
    resource_image: require("../assets/CV_poster.png"),
    description:
      "CV writing for job applications can be a daunting task. Let's make it easy for you!",
    link: "https://www.thementoronline.org/documents/6/Sample_CV_Template.pdf",
  },
  {
    id: 5,
    resource_title: "Concept Note Template",
    resource_image: require("../assets/Concept_Note_Poster.png"),
    description:
      "Do you struggle with writing concept notes and proposals? Let us us make it easy for you with this 1 pager template.",
    link: "https://www.thementoronline.org/documents/7/Concept_Note_Template.pdf",
  },
];

const scholarships = [
  {
    id: 1,
    title:
      "• Maastricht University Holland High Potential Scholarship 2022/2023 for International Students",
    link: "https://www.maastrichtuniversity.nl/support/your-studies-begin/coming-maastricht-university-abroad/scholarships/maastricht-university",
  },
  {
    id: 2,
    title:
      "• Columbia Law School Human Rights LL.M. Fellowship 2022/2023 for International Students",
    link: "https://www.law.columbia.edu/admissions/graduate-admissions/llm/financial-aid-fellowships-and-scholarships/human-rights-fellowship",
  },
  {
    id: 3,
    title:
      "• Gates Cambridge Scholarships (Fully-funded Masters & PhD) in UK 2022/2023 for International Students",
    link: "https://www.gatescambridge.org/apply/eligibility/",
  },
  {
    id: 4,
    title:
      "• WAAW Foundation Undergraduate STEM Scholarships 2022 for Young African Women",
    link: "https://waawfoundation.org/scholarships./",
  },
  {
    id: 5,
    title:
      "• Cambridge Trust Undergraduate and Graduate Scholarships 2020/2021 for International Students",
    link: "https://www.cambridgetrust.org/scholarships/",
  },
  {
    id: 6,
    title:
      "• University of Michigan African Presidential Scholars Programme (UMAPS) 2022/2023",
    link: "https://ii.umich.edu/asc/umaps.html",
  },
  {
    id: 7,
    title:
      "• Equity and Merit Scholarships for international master’s students",
    link: "https://www.manchester.ac.uk/study/masters/funding/international/equity-merit-scholarships/",
  },
];

const internships = [
  {
    id: 1,
    title:
      "• ABSA Global Markets Graduate Programme 2021 for Graduate Africans",
    link: "https://absa.wd3.myworkdayjobs.com/en-US/ABSAcareersite/job/Sandton/Global-Markets-Graduate_R-15923138",
  },
  {
    id: 2,
    title:
      "• Opening Soon: United Nations University Office of the Rector Junior Fellows Internship Programme 2022 – Japan",
    link: "https://unu.edu/about/internship/junior-fellows-internship-programme.html#overview",
  },
];

const fellowships = [
  {
    id: 1,
    title:
      "• Harvard I Tatti/DHI Rom Joint Fellowship for African Studies 2022/2023",
    link: "http://itatti.harvard.edu/i-tatti-dhi-rom-joint-fellowship-african-studies",
  },
  {
    id: 2,
    title:
      "• European Union Global Cultural Relations Programme 2021 for Young Leaders",
    link: "https://www.cultureinexternalrelations.eu/2021/09/01/apply-for-the-global-cultural-relations-programme-2021/",
  },
  {
    id: 3,
    title:
      "• Mo Ibrahim Foundation Leadership Fellowship Programme (Fully-funded to work at AfDB or ITC) 2022/2023",
    link: "https://mo.ibrahim.foundation/fellowships",
  },
];
const contests = [
  {
    id: 1,
    title:
      "• Bournemouth Uni New Media Writing Prize 2021 for Students and Professionals",
    link: "https://newmediawritingprize.co.uk/",
  },
  {
    id: 2,
    title: "• Commonwealth Short Story Prize 2022 for Commonwealth Countries",
    link: "https://www.commonwealthwriters.org/shortstoryprize/info/",
  },
  {
    id: 3,
    title: "• WFP Innovation Accelerator 2021 for Solutions to Hunger",
    link: "https://innovation.wfp.org/apply",
  },
  {
    id: 4,
    title:
      "• USAID Youth Excel: Our Knowledge, Leading Change Program 2021 for Young Africans",
    link: "http://afterschoolafrica.com/58181/usaid-youth-excel-our-knowledge-leading-change-program-2021-for-young-africans/",
  },
];

const entrepreneurship = [
  {
    id: 1,
    title:
      "• Ultimate List: 40+ Business Funding Opportunities & Awards for African Entrepreneurs",
    link: "https://www.afterschoolafrica.com/9200/business-plan-competitions-and-awards-for-african-entrepreneurs/",
  },
];

// ########################################

const book1 = {
  id: 1,
  title: "Action Word Game",
  description:
    "Each word card reinforces the 100 words that children need to know – and it helps them master comprehension, spelling, writing, and usage of each word.",
  price: 10000,
  image: require("../assets/books/BookLover.jpg"),
};

const book2 = {
  id: 2,
  title: "Creative Thinking Workbook",
  description:
    "Discover how a growth mindset can help you achieve your goals―activities for kids 8 to 13. \n\nA Creative Thinking Workbook can help you develop your abilities to tackle just about anything. Creative Thinking Workbook for Kids is a fun and engaging activity book, for ages 8 to 13, that can help you train your brain and develop creative problem-solving skills through practice and perseverance. You’ll learn how to foster a “can-do” attitude and celebrate your mistakes as a path to ultimate success.\n\nPacked with awesome activities and easy exercises, this complete workbook addressing growth mindset for kids is a great way to master just about anything with a little effort and encouragement. The real and rewarding work of dreaming big, making missteps, and expanding your mind (like a muscle) starts now. Let’s find out what amazing things you can do―a growth mindset for kids is mission possible!",
  price: 10000,
  image: require("../assets/books/CREATIVE_THINKING_WORKBOOK_1.max-350x225.png"),
};

const book3 = {
  id: 3,
  title: "Level 3 Book Package",
  description:
    "This compilation of 3 tales from the Moran Publishers aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. Accompanied …",
  price: 30000,
  image: require("../assets/books/BOOK_PACKAGE_LEVEL31_HZLjJS8.max-350x225.png"),
};

const myCart = [
  {
    ...book1,
    qty: 1,
  },
  {
    ...book2,
    qty: 1,
  },
  {
    ...book3,
    qty: 1,
  },
];

const courses_details = {
  id: 0,
  title: "The Ultimate Ui/Ux Course Beginner to Advanced",
  number_of_students: "33.5k Students",
  duration: "2h 30m",
  instructor: {
    name: "ByProgrammers",
    title: "Full Stack Programmer",
  },
  videos: [
    {
      title: "1. Introduction",
      duration: "1:37",
      size: "10 MB",
      progress: "100%",
      is_playing: false,
      is_complete: true,
      is_lock: false,
      is_downloaded: false,
    },
    {
      title: "2. User Interface",
      duration: "1:15:00",
      size: "200 MB",
      progress: "100%",
      is_playing: true,
      is_complete: false,
      is_lock: false,
      is_downloaded: true,
    },
    {
      title: "3. User Experience",
      duration: "1:27:00",
      size: "230 MB",
      progress: "0%",
      is_playing: false,
      is_complete: false,
      is_lock: true,
      is_downloaded: false,
    },
  ],
  students: [
    {
      id: 0,
      name: "Student 1",
    },
    {
      id: 1,
      name: "Student 2",
    },
  ],
  files: [
    {
      id: 0,
      name: "UI Fundamentals",
      author: "Shared by ByProgrammers",
      upload_date: "13th Sep 2021",
    },
    {
      id: 1,
      name: "UX Checklist",
      author: "Shared by ByProgrammers",
      upload_date: "11th Sep 2021",
    },
    {
      id: 2,
      name: "Sketch File",
      author: "Shared by ByProgrammers",
      upload_date: "7th Sep 2021",
    },
  ],
  discussions: [
    {
      id: 0,
      // profile: require("../assets/images/profile.png"),
      name: "ByProgrammers",
      no_of_comments: "11 comments",
      no_of_likes: "72 likes",
      posted_on: "5 days ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replies: [
        {
          id: 0,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "4 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          id: 1,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "4 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          id: 2,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "4 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          id: 3,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "4 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
    {
      id: 1,
      // profile: require("../assets/images/profile.png"),
      name: "ByProgrammers",
      no_of_comments: "21 comments",
      no_of_likes: "372 likes",
      posted_on: "14 days ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replies: [
        {
          id: 0,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "7 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          id: 1,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "7 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          id: 2,
          // profile: require("../assets/images/student_1.png"),
          name: "ByProgrammers",
          posted_on: "7 days ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
  ],
};

const Heading1 = {
  heading:
    "Take advantage of free resources to guide you on your learning or teaching journey",
};

const Heading2 = {
  heading:
    "Explore entry-level jobs, funding and training opportunities, fellowships, scholarships and volunteer opportunities",
};
export default {
  // categories,
  // courses_list_1,
  // courses_list_2,
  courses,
  books,
  coursesData,
  resources,
  myCart,
  courses_details,
  Heading1,
  Heading2,
  scholarships,
  internships,
  fellowships,
  contests,
  entrepreneurship,
};
