
const defaultSections = {
  faculty: {
    label: "MEET OUR EDUCATORS",
    title: "Guided By Experience. Inspired By Passion.",
    members: [
      {
        name: "Dr. Anjali Sharma",
        role: "Principal",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      },
      {
        name: "Rahul Mehta",
        role: "Academic Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Priya Kapoor",
        role: "Senior Educator",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      },
    ],
  },

  achievements: {
    label: "OUR ACHIEVEMENTS",
    title: "Excellence That Speaks For Itself.",
    items: [
      {
        year: "2026",
        title: "National Academic Excellence",
        detail: "Recognized for outstanding educational performance.",
      },
      {
        year: "2025",
        title: "Outstanding Sports Performance",
        detail: "Celebrating exceptional student achievements in sports.",
      },
      {
        year: "2024",
        title: "Innovation & Creativity Award",
        detail: "Recognized for innovation and creative learning.",
      },
    ],
  },

  gallery: {
    label: "LIFE AT OUR CAMPUS",
    title: "Moments That Make Memories.",
    images: [
      {
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        title: "Learning Together",
      },
      {
        image: "https://images.unsplash.com/photo-1529390079861-591de354faf5",
        title: "Campus Life",
      },
      {
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        title: "Creative Learning",
      },
      {
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
        title: "Student Activities",
      },
      {
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        title: "Celebrating Success",
      },
    ],
  },

  academics: {
    label: "ACADEMIC EXCELLENCE",
    title: "Learning That Inspires Greatness.",
    description:
      "A thoughtfully designed curriculum that balances academic knowledge, creativity and practical learning.",
    programs: [
      {
        number: "01",
        name: "Primary Education",
        detail: "Building strong foundations through curiosity and exploration.",
      },
      {
        number: "02",
        name: "Middle School",
        detail: "Developing analytical thinking and independent learning.",
      },
      {
        number: "03",
        name: "Senior Secondary",
        detail: "Preparing students for higher education and future careers.",
      },
    ],
  },

  facilities: {
    label: "CAMPUS & FACILITIES",
    title: "An Environment Designed to Inspire.",
    description:
      "Discover spaces that encourage creativity, collaboration and exploration.",
    items: [
      {
        name: "Modern Classrooms",
        category: "LEARNING SPACES",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      },
      {
        name: "Science Laboratories",
        category: "INNOVATION",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      },
      {
        name: "Sports & Athletics",
        category: "SPORTS",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      },
      {
        name: "Library",
        category: "KNOWLEDGE",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      },
    ],
  },

  vision: {
    label: "OUR VISION",
    title: "Inspiring Minds. Shaping Futures.",
    description:
      "To create a generation of confident, compassionate and innovative individuals who make a meaningful difference in the world.",
  },

  mission: {
    label: "OUR MISSION",
    title: "Education With Purpose.",
    description:
      "To provide an enriching learning environment that encourages curiosity, builds character and develops lifelong learners.",
  },

  principal: {
    name: "Dr. Anjali Sharma",
    designation: "Principal",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    message:
      "Education is not merely about academic achievements. It is about discovering potential, developing character and preparing young minds to embrace the opportunities of tomorrow.",
    signature: "Dr. Anjali Sharma",
  },

  testimonials: {
    label: "VOICES OF OUR COMMUNITY",
    title: "Stories That Inspire Us.",
    items: [
      {
        name: "Rahul Verma",
        role: "Parent",
        message:
          "The school has created an incredible learning environment for my child. The teachers genuinely care about every student's growth.",
      },
      {
        name: "Priya Mehta",
        role: "Parent",
        message:
          "A wonderful institution that balances academic excellence with creativity, discipline and personal development.",
      },
      {
        name: "Aarav Sharma",
        role: "Student",
        message:
          "I love the opportunities to explore new ideas, participate in activities and discover my strengths.",
      },
    ],
  },

  admission: {
    label: "ADMISSIONS OPEN",
    title: "Give Your Child a Future Without Limits.",
    description:
      "Begin a journey of discovery, confidence and lifelong learning with us.",
    buttonText: "Enquire About Admissions",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    link: "#contact",
  },
};

export const schools = {
  "delhi-public-school": {
    footer: {
  description: "Inspiring young minds through knowledge, creativity and character.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact", href: "#contact" }
  ],
  copyright: "All rights reserved."
},
    ...defaultSections,

    id: "dps",
    name: "Delhi Public School",
    shortName: "DPS",
    tagline: "Shaping Leaders of Tomorrow",

    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7w8ReJCfF5Amd-jx9zEd44kxJAFXUzcsbt3nxkW0Hg&s=10",

    theme: {
      primary: "#173B65",
      secondary: "#C5A15A",
      accent: "#E8D9B5",
      background: "#F8F7F3",
      text: "#182638",
    },

    hero: {
      eyebrow: "WELCOME TO EXCELLENCE",
      title: "Where Young Minds Become Great Leaders.",
      description:
        "An inspiring environment where knowledge, creativity and character shape tomorrow's leaders.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
      buttonText: "Explore Our School",
    },

    about: {
      label: "ABOUT OUR SCHOOL",
      title: "Education Beyond Classrooms.",
      description:
        "We believe in nurturing curious minds, building strong values and preparing students for a brighter future.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      experience: "25+",
      experienceLabel: "Years of Educational Excellence",
      buttonText: "Discover Our Story",
    },

    stats: [
      { value: "25+", label: "Years of Excellence" },
      { value: "5000+", label: "Students" },
      { value: "200+", label: "Expert Educators" },
      { value: "98%", label: "Academic Success" },
    ],

    contact: {
      address: "New Delhi, India",
      phone: "+91 9876543210",
      email: "info@school.com",
      hours: "Monday – Saturday | 8:00 AM – 3:00 PM",
      mapUrl: "",
      social: {
        facebook: "",
        instagram: "",
        youtube: "",
      },
    },
  },

  "modern-public-school": {
    footer: {
  description: "Inspiring young minds through knowledge, creativity and character.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact", href: "#contact" }
  ],
  copyright: "All rights reserved."
},
    ...defaultSections,

    id: "mps",
    name: "Modern Public School",
    shortName: "MPS",
    tagline: "Learning Today, Leading Tomorrow",

    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7w8ReJCfF5Amd-jx9zEd44kxJAFXUzcsbt3nxkW0Hg&s=10",

    theme: {
      primary: "#176B62",
      secondary: "#D9A441",
      accent: "#B8DCD1",
      background: "#F6F8F5",
      text: "#172D2A",
    },

    hero: {
      eyebrow: "DISCOVER YOUR POTENTIAL",
      title: "A World of Learning and Possibilities.",
      description:
        "Creating confident learners through innovation, creativity and meaningful education.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      buttonText: "Discover More",
    },

    about: {
      label: "WHO WE ARE",
      title: "Building Futures Through Education.",
      description:
        "A learning community dedicated to academic excellence and holistic development.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      experience: "30+",
      experienceLabel: "Years of Educational Excellence",
      buttonText: "Discover Our Story",
    },

    stats: [
      { value: "30+", label: "Years of Excellence" },
      { value: "3500+", label: "Students" },
      { value: "150+", label: "Educators" },
      { value: "95%", label: "Academic Success" },
    ],

    contact: {
      address: "Faridabad, Haryana, India",
      phone: "+91 9876543210",
      email: "info@modernpublicschool.com",
      hours: "Monday – Saturday | 8:00 AM – 3:00 PM",
      mapUrl: "",
      social: {
        facebook: "",
        instagram: "",
        youtube: "",
      },
    },
  },
};
