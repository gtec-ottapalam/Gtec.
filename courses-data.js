/**
 * G-TEC Education Ottapalam - Comprehensive Course Catalog
 * Extracted directly from official G-TEC Education offerings
 */

const GTEC_CATEGORIES = {
  "software": {
    "title": "Software & IT Development",
    "icon": "code-2",
    "badge": "IT & Tech",
    "color": "from-blue-600 to-indigo-600"
  },
  "finance-and-business-management": {
    "title": "Finance, Accounting & SAP",
    "icon": "calculator",
    "badge": "Accounting",
    "color": "from-emerald-600 to-teal-600"
  },
  "multimedia": {
    "title": "Multimedia, Animation & VFX",
    "icon": "palette",
    "badge": "Design & Media",
    "color": "from-amber-500 to-orange-500"
  },
  "robotics": {
    "title": "Robotics & Automation",
    "icon": "bot",
    "badge": "Future Tech",
    "color": "from-purple-600 to-pink-600"
  },
  "hardware-and-networking": {
    "title": "Hardware, Networking & Cybersecurity",
    "icon": "shield-check",
    "badge": "Networking",
    "color": "from-cyan-600 to-blue-600"
  },
  "cad": {
    "title": "CAD, BIM & Engineering Design",
    "icon": "ruler",
    "badge": "Civil & Mech",
    "color": "from-rose-600 to-red-600"
  },
  "non-it-programs": {
    "title": "Professional Non-IT Programs",
    "icon": "briefcase",
    "badge": "Management & Vocations",
    "color": "from-violet-600 to-indigo-600"
  }
};

const GTEC_COURSES = [
  {
    "id": "gt-1",
    "title": "G-Operator",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-2",
    "title": "Certificate Course in PERL",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-3",
    "title": "Certificate Course In Linux",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-4",
    "title": "Certificate Course in JAVA SE",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-5",
    "title": "Certificate Course in JAVA EE",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-6",
    "title": "Certificate Course in VB.NET",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-7",
    "title": "Certificate Course in C#.NET",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-8",
    "title": "Certificate Course in Programming in VB",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-9",
    "title": "Certificate Course in Programming in C",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-10",
    "title": "Certificate Course in Programming in C++",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-11",
    "title": "Certificate Course in Oracle SQL and PL/SQL",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-12",
    "title": "Certificate Course In SQL Server",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-13",
    "title": "Certificate Course In MySQL",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-14",
    "title": "Certificate Course in ANDROID STUDIO",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-15",
    "title": "G-Basic (Computer Awareness Program)",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-16",
    "title": "Certificate Course in Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-17",
    "title": "Certificate Course in Asp.Net using C#.NET",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-18",
    "title": "Certificate Course in PHP",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-19",
    "title": "Certificate in Advanced C++",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-20",
    "title": "Certificate Course in REACT JS",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-21",
    "title": "Certificate Course in Microsoft Azure",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-22",
    "title": "Certificate Course in Amazon Web Services",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-23",
    "title": "Certificate Course in Node JS",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-24",
    "title": "Certificate Course in MongoDB",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-25",
    "title": "Certificate Course in R Programming (Basics)",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-26",
    "title": "Certificate Course in Advanced Excel \u2013 GROUND UP",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-27",
    "title": "Certificate Course In Advanced Excel",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-28",
    "title": "Certificate Course in Openoffice",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-29",
    "title": "Certificate Course in React Native",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-30",
    "title": "Certificate Course in Django",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-31",
    "title": "Certificate Course in Kotlin",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-32",
    "title": "Certificate Course in Machine Learning",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-33",
    "title": "Certificate Course in Deep Learning",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-34",
    "title": "Certificate Course in Data Science",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-35",
    "title": "Certificate Course in Artificial Intelligence",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-36",
    "title": "Certificate Course in Android with Flutter",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Flutter"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-37",
    "title": "Certificate Course in POWER BI",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-38",
    "title": "Certificate Course in JavaScript",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-39",
    "title": "Certificate Course in Data Analytics",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-40",
    "title": "Certificate Course In Office 365",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-41",
    "title": "Certificate Course In WordPress",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-42",
    "title": "Certificate Course In Laravel",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-43",
    "title": "Certificate Course In Dart Programming",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-44",
    "title": "Certificate Course In Google Go Programming",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-45",
    "title": "Certificate Course In MS Excel",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-46",
    "title": "Certificate Course In MS Access",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-47",
    "title": "Certificate Course in Advanced Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-48",
    "title": "Certificate Course in Software Testing",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-49",
    "title": "Certificate Course in Ms Office",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-50",
    "title": "Certificate Course in Angular",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-51",
    "title": "Soft Skill Development Program",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-52",
    "title": "Certificate Course in Programming in C - Online",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-53",
    "title": "Certificate Course in Programming in C++ - Online",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-54",
    "title": "Certificate Course in Python Basics - Online",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-55",
    "title": "Certificate Course in AI Powered Excel",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-56",
    "title": "Certificate Course in AI Powered Word",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-57",
    "title": "Certificate Course in AI Powered PowerPoint",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-58",
    "title": "Certificate in Office Administration",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-59",
    "title": "Certificate Course in TABLEAU",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-60",
    "title": "Certificate Course in Data Manipulation Using Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-61",
    "title": "Certificate Course in Data Visualization Using Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-62",
    "title": "Certificate Course in GUI Programming Using Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-63",
    "title": "Certificate Course In Internet Of Things Using Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-64",
    "title": "Certificate Course In C++ With Graphics",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-65",
    "title": "Certificate Course In Excel And Looker Studio",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-66",
    "title": "Certificate Course In PostgreSQL",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-67",
    "title": "Certificate Course In ODOO",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-68",
    "title": "Certificate Course in DRUPAL",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-69",
    "title": "Certificate Course In DEVOPS",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-70",
    "title": "Certificate Course In Looker Studio",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-71",
    "title": "Certificate Course In FIGMA",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-72",
    "title": "Certificate Course In Bootstrap",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-73",
    "title": "Certificate Course In AI Integration In Excel",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-74",
    "title": "Certificate Course In AI Integration In Word",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-75",
    "title": "Certificate Course In AI Integration In PowerPoint",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-76",
    "title": "Certificate Course In Java Basics",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-77",
    "title": "Certificate Course In Adobe Acrobat",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-78",
    "title": "Certificate Course In Express.Js",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-79",
    "title": "Certificate Course In MS Outlook",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-80",
    "title": "Digi Pro",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-81",
    "title": "Certificate Course In Next.js",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-82",
    "title": "Certificate Course in Embedded C Programming",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-83",
    "title": "Certificate Course In Generative AI",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-84",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-85",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-86",
    "title": "Professional Software Developer",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-87",
    "title": "G-Developer",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-88",
    "title": "Computer Teachers Training Program",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-89",
    "title": "Diploma in Web Designing",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-90",
    "title": "Diploma in Web Technology (.NET)",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-91",
    "title": "Diploma in Web Technology (Open Source)",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-92",
    "title": "Diploma in Computer Application",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-93",
    "title": "Diploma in Open Source Technology",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-94",
    "title": "Graduate in Employability Enhancement Program",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-95",
    "title": "Diploma in Data Entry",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-96",
    "title": "Advanced Operator",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-97",
    "title": "Diploma in UI Development",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-98",
    "title": "Diploma in Cloud Computing",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-99",
    "title": "Diploma in Android Development with Kotlin &amp; Flask Rest",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-100",
    "title": "R Programming",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-101",
    "title": "Professional Computer Instructor",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-102",
    "title": "Computer Teachers Training Course",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-103",
    "title": "Diploma in Graphics and Information Technology",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-104",
    "title": "Advanced Diploma in UI/UX Designing",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-105",
    "title": "Advanced Diploma in Data Analysis",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-106",
    "title": "Diploma in Machine Learning",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-107",
    "title": "Full-Stack Web Developer - PHP",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-108",
    "title": "Full-Stack Web Developer - Flutter",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack",
      "Flutter"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-109",
    "title": "Diploma in Data Analysis",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-110",
    "title": "Diploma in UI/UX Designing",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-111",
    "title": "Certificate in Advanced Software Engineering",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-112",
    "title": "Full-Stack Web Developer - .NET",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-113",
    "title": "Full-Stack Web Developer - Python",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack",
      "Python"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-114",
    "title": "Full-Stack Web Developer - JAVA",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-115",
    "title": "Full-Stack Web Developer - React JS",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-116",
    "title": "Professional Certification in Advanced Data Visualisation and Analysis",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-117",
    "title": "Diploma in App Development Using Flutter",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Flutter"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-118",
    "title": "Advanced Certification in Data Visualization and Analysis",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-119",
    "title": "G-Certified Object Oriented Programmer",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-120",
    "title": "Full-Stack Web Developer - MEAN",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-121",
    "title": "Full-Stack Web Developer - MERN",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "Full Stack"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-122",
    "title": "Diploma in Office Automation",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-123",
    "title": "Diploma in Generative AI",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-124",
    "title": "Diploma in AI Integration MS Office",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-125",
    "title": "Certificate Course in Microsoft 365",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-126",
    "title": "Diploma in Data Science",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-127",
    "title": "Certified Course in Data Structure Algorithms",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-128",
    "title": "Certificate Course in Data Structure Algorithms - Online",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-129",
    "title": "Post Graduate Diploma in Computer Application",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-130",
    "title": "Master in Software Engineering",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-131",
    "title": "Post Graduate Diploma in Information Technology",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-132",
    "title": "Master Diploma in AI And Data Science",
    "categoryKey": "software",
    "categoryName": "Software & IT Development",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "IT & Tech",
    "tags": [
      "IT & Tech",
      "AI Powered",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-133",
    "title": "G-Accountant - Tally Essential Comprehensive",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-134",
    "title": "G-Accountant \u2013 SAGE 50 Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-135",
    "title": "G-Accountant \u2013 QuickBooks Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-136",
    "title": "Certificate Course in MYOB Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-137",
    "title": "GST Using Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-138",
    "title": "Tally Basic with GST",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-139",
    "title": "GCC VAT Using Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-140",
    "title": "Certificate Course in QuickBooks",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-141",
    "title": "Certification in SAP Finance and Control",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-142",
    "title": "Tally Essential Comprehensive",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-143",
    "title": "G-Accountant Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-144",
    "title": "Certificate Course in SAP FICO &amp; S/4 HANA",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-145",
    "title": "Advanced Certification in Taxation &amp; Satutory Filing",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-146",
    "title": "Certification in SAP Material Management",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-147",
    "title": "Certification in Producation Planning",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-148",
    "title": "Certification in SAP Sales &amp; Distribution",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-149",
    "title": "Certification in SAP  FICO (S/4 HANA",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-150",
    "title": "Certification in SAP Business One",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-151",
    "title": "Certificate in SAP Extended Warehouse Management (SAP S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-152",
    "title": "Certificate in SAP Human Capital Management (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-153",
    "title": "Tally Professional",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-154",
    "title": "Certification in Taxation and Statutory Filing",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-155",
    "title": "G-Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-156",
    "title": "Certification in SAP MM (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-157",
    "title": "Certification in SAP PP (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-158",
    "title": "Certification in SAP SD (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-159",
    "title": "Certificate in Financial Accounting with GST",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-160",
    "title": "Prime Student certification in Zoho Books",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-161",
    "title": "Certificate Course in Sage 50 Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-162",
    "title": "Certification in SAP Production Planning",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "SAP",
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-163",
    "title": "Certificate Course in ZOHO Books",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-164",
    "title": "Tally Essential  - Level 1",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-165",
    "title": "Tally Essential Level 2",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-166",
    "title": "Tally Essential Level 3",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-167",
    "title": "Certification in GST Filing",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-168",
    "title": "Certificate Course in GST Filing",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-169",
    "title": "TDS Using Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-170",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-171",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-172",
    "title": "Professional Accountant",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-173",
    "title": "Advanced Diploma in Accounting Training",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-174",
    "title": "Diploma in Indian And Foreign Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-175",
    "title": "Diploma in Computerized Accounting Packages",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-176",
    "title": "Diploma in Financial Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-177",
    "title": "Certified Accounting and Management Professional",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-178",
    "title": "Smart Accountant",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-179",
    "title": "Professional Gulf Accountant",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-180",
    "title": "Diploma in Sales &amp; Distribution - SAP",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-181",
    "title": "Diploma in SAP Material Management",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-182",
    "title": "Diploma in SAP Production Planning",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-183",
    "title": "Diploma in International Finance Management with SAP FICO",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-184",
    "title": "Professional Accounts Practitioner",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-185",
    "title": "Diploma in International Finance Management with SAP S/4 HANA",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-186",
    "title": "Professional Certification in AI Integrated Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-187",
    "title": "Professional Accounts Analyst and Taxation Expert",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-188",
    "title": "Diploma in Finance Management with SAP FICO &amp; Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-189",
    "title": "Diploma in Finance Management with SAP S4 HANA &amp; Tally",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-190",
    "title": "Diploma in Professional Accounting and Taxation with Tally Prime",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-191",
    "title": "Certified Global Accountant",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-192",
    "title": "Certificate Course in Tally Professional",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-193",
    "title": "Diploma in Corporate Finance &amp; Control - SAP",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-194",
    "title": "Certificate Course in Tally and Advanced Excel",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-195",
    "title": "Professional Accountant - Tally Prime with GST",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Accounting",
    "tags": [
      "Diploma",
      "Accounting",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-196",
    "title": "Master in Financial Accounting and SAP FICO",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-197",
    "title": "Master in Financial Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-198",
    "title": "Professional Diploma in Indian And Foreign Accounting with SAP FICO",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-199",
    "title": "Global Professional Accounting with SAP FICO",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-200",
    "title": "Global Professional Accounting",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-201",
    "title": "Global Professional Accounting and FICO in S/4HANA",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-202",
    "title": "Master in Financial and SAP Accounting in SAP S/4HANA",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-203",
    "title": "Master in Corporate Management with SAP",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-204",
    "title": "Professional Diploma in Indian and Foreign Accounting with SAP S/4 HANA",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "Master",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-205",
    "title": "Certificate in SAP ABAP (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-206",
    "title": "Certificate in SAP Extended Warehouse Management (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-207",
    "title": "Certificate in SAP Human Capital Management (SAP S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-208",
    "title": "Certificate in SAP ARIBA (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-209",
    "title": "Certificate in SAP SuccessorFactors (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-210",
    "title": "Certificate in SAP Finance and Control (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-211",
    "title": "Certificate in SAP Material Management (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-212",
    "title": "Certificate in SAP Production Planning (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-213",
    "title": "Certificate in SAP Sales and Distribution (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-214",
    "title": "Certificate in SAP Business One (S/4 HANA)",
    "categoryKey": "finance-and-business-management",
    "categoryName": "Finance, Accounting & SAP",
    "subCategory": "Sap Global Certification",
    "level": "SAP Global",
    "duration": "3 - 6 Months",
    "badge": "Accounting",
    "tags": [
      "Accounting",
      "SAP Global",
      "SAP"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-215",
    "title": "Certificate Course in Adobe Premier",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-216",
    "title": "Certificate Course In Digital Marketing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-217",
    "title": "Certificate Course In Final Cut Pro",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-218",
    "title": "Certificate Course in 3DS MAX",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-219",
    "title": "Certificate Course In Sound Editing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-220",
    "title": "Certificate Course in Blender",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-221",
    "title": "Certificate Course In Adobe Premiere Pro",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-222",
    "title": "Certificate Course In Graphic Designing Basics",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-223",
    "title": "Diploma in Visual Effects (VFX)",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-224",
    "title": "Diploma In Web Designing &amp; Animation",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-225",
    "title": "Certificate Course In Autodesk Maya",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-226",
    "title": "Desktop Publishing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-227",
    "title": "Certificate Course in Social Media Marketing With SEO",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-228",
    "title": "Certificate Course in Digital Arts",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-229",
    "title": "Certificate Course In Graphic Designing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-230",
    "title": "Certificate Course In Advanced Adobe Photoshop",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-231",
    "title": "Certificate Course in Nuke",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-232",
    "title": "Certificate Course In SEO",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-233",
    "title": "Certificate Course In Davinci Resolve",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-234",
    "title": "Certificate Course In Advanced After Effects",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-235",
    "title": "Certificate Course In Advanced Photoshop With AI",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "AI Powered",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-236",
    "title": "Certificate Course In Autodesk Sketchbook",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-237",
    "title": "Certificate Course In E-Marketing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-238",
    "title": "Certificate Course In Krita",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-239",
    "title": "Certificate Course In Adobe Audition",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-240",
    "title": "Certificate Course In Social Media Marketing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-241",
    "title": "Certificate Course In Zbrush",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-242",
    "title": "Certificate Course In Photography",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-243",
    "title": "Certificate Course In Adobe Lightroom",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-244",
    "title": "Certificate Course In Coreldraw",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-245",
    "title": "Certificate Course In Adobe Indesign",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-246",
    "title": "Certificate Course In Adobe Pagemaker",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-247",
    "title": "Certificate Course In Adobe Photoshop",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-248",
    "title": "Certificate Course In Adobe After Effects",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-249",
    "title": "Certificate Course In Adobe Illustrator",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-250",
    "title": "Certificate Course In Adobe Dreamweaver",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-251",
    "title": "Certificate Course In V-Ray",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-252",
    "title": "Certificate Course In Adobe Animate",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-253",
    "title": "Certificate Course In Edius",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-254",
    "title": "Certificate Course In Adobe XD",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-255",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-256",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-257",
    "title": "Diploma In Multimedia &amp; Animation",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-258",
    "title": "Graphic and Web Expert",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-259",
    "title": "Architectural Visualization Expert",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-260",
    "title": "Professional Diploma In Digital Marketing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-261",
    "title": "Adobe Certified Professional",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-262",
    "title": "Professional Diploma in Motion Graphics",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-263",
    "title": "Advanced Diploma In Multimedia Training",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-264",
    "title": "Advanced Diploma In Motion Graphics",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-265",
    "title": "Diploma in Motion Graphics",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-266",
    "title": "Diploma In Animation",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-267",
    "title": "Diploma In 2D Animation",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-268",
    "title": "Diploma In Digital Marketing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-269",
    "title": "Professional Diploma In Graphics And Web Designing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-270",
    "title": "Diploma In Digital Imaging",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-271",
    "title": "Diploma In 3d Animation",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-272",
    "title": "Diploma In AI Integrated Graphic Designing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "AI Powered",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-273",
    "title": "Diploma In Video Editing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-274",
    "title": "Diploma In Graphic Designing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma",
      "Creative"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-275",
    "title": "Professional Diploma in Photography &amp; Videography",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Diploma"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-276",
    "title": "Master Diploma in Film Making",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-277",
    "title": "Master Diploma in Film Making with FCP",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-278",
    "title": "Master Diploma in Digital Animation",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-279",
    "title": "Master Diploma in Digital Marketing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-280",
    "title": "Master Diploma in Game Development",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-281",
    "title": "Professional Diploma in Extended Reality(XR) Development",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-282",
    "title": "Master Diploma in Game Designing",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-283",
    "title": "Master in New Media &amp; Web Technology",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-284",
    "title": "Master Diploma in Animation and Multimedia",
    "categoryKey": "multimedia",
    "categoryName": "Multimedia, Animation & VFX",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Design & Media",
    "tags": [
      "Design & Media",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-285",
    "title": "Certificate Course in Robotics",
    "categoryKey": "robotics",
    "categoryName": "Robotics & Automation",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Future Tech",
    "tags": [
      "Future Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-286",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "robotics",
    "categoryName": "Robotics & Automation",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Future Tech",
    "tags": [
      "Future Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-287",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "robotics",
    "categoryName": "Robotics & Automation",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Future Tech",
    "tags": [
      "Future Tech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-288",
    "title": "Professional Course in Robotics",
    "categoryKey": "robotics",
    "categoryName": "Robotics & Automation",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Future Tech",
    "tags": [
      "Diploma",
      "Future Tech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-289",
    "title": "Advanced Course in Robotics",
    "categoryKey": "robotics",
    "categoryName": "Robotics & Automation",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Future Tech",
    "tags": [
      "Diploma",
      "Future Tech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-290",
    "title": "Masters Diploma in Robotics",
    "categoryKey": "robotics",
    "categoryName": "Robotics & Automation",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Future Tech",
    "tags": [
      "Master",
      "Future Tech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-291",
    "title": "Certificate Course in Computer Hardware and Networking",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-292",
    "title": "Certificate Course in Computer Hardware",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-293",
    "title": "A+ Certification Course",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-294",
    "title": "N+ Certification Course",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-295",
    "title": "Diploma in CCTV and Security Systems",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-296",
    "title": "Diploma in CCTV Installation",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-297",
    "title": "Certificate Course in Security System",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-298",
    "title": "Certificate Course in Cyber Security &amp; Ethical Hacking",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-299",
    "title": "Certified Ethical Hacker",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-300",
    "title": "Certificate Course in Mobile Phone Technology",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-301",
    "title": "Certified Network Defender",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-302",
    "title": "Certificate Course in Hardware and Software Installation",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-303",
    "title": "Certificate Course in Software Installation",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-304",
    "title": "Certificate Course in Ethical Hacking",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-305",
    "title": "Certificate Course in Cyber Forensics",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-306",
    "title": "Certification in Windows Server Administration",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-307",
    "title": "Certificate Course in Cyber Security",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-308",
    "title": "Certificate Course in Penetration Testing",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-309",
    "title": "Certificate in Ethical Hacking Essentials",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-310",
    "title": "Certificate in Network Defense Essentials",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-311",
    "title": "Certificate in Digital Forensics Essentials",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-312",
    "title": "Certificate Course in Dark Web and Anonymity",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-313",
    "title": "Certificate in Basic Hardware and Networking",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-314",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-315",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Networking",
    "tags": [
      "Networking",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-316",
    "title": "Honours Diploma in Computer Hardware and Network",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-317",
    "title": "Advanced Diploma In Hardware and Networking",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-318",
    "title": "Diploma in Mobile Phone Technology &amp;  Tablet Engineering",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-319",
    "title": "Diploma in Mobile Phone, CCTV &amp; Computer Hardware Technology",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-320",
    "title": "Advanced Diploma in Desktop and Laptop Chip Level Engineering",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-321",
    "title": "Advanced Diploma in Mobile Phone Technology",
    "categoryKey": "hardware-and-networking",
    "categoryName": "Hardware, Networking & Cybersecurity",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Networking",
    "tags": [
      "Diploma",
      "Networking"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-322",
    "title": "Certificate Course in Archi CAD",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-323",
    "title": "G- Draughtsman",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-324",
    "title": "Diploma in Electrical Drawing",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-325",
    "title": "Diploma in Project Management",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-326",
    "title": "Certificate Course in Pre-Engineering",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-327",
    "title": "Certificate Course in Revit Architecture",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-328",
    "title": "Certificate Course in Catia",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-329",
    "title": "Certificate Course in Solidworks",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-330",
    "title": "Certificate Course in Ansys",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-331",
    "title": "Certificate Course in Primavera P6",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-332",
    "title": "Certificate Course in Staad-Pro",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-333",
    "title": "Certificate Course in AutoCAD Electrical",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-334",
    "title": "Certificate Course in AutoCAD (Civil)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-335",
    "title": "Certificate Course in AutoCAD (Mechanical)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-336",
    "title": "Digital Architect",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-337",
    "title": "Certificate Course in Autodesk Civil 3D",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-338",
    "title": "Certificate Course in Creo Parametric",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-339",
    "title": "Certificate Course in Siemens NX",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-340",
    "title": "Certificate Course in Architectural  Visualization",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-341",
    "title": "Certificate Course in Revit MEP",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-342",
    "title": "Certificate Course in Lumion",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-343",
    "title": "Certificate Course in Revit Structure",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-344",
    "title": "Certificate Course in Auto cad (2D)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-345",
    "title": "Certificate Course in Bentley Microstation",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-346",
    "title": "Certificate Course  in Pre-Engineering  (BASIC)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-347",
    "title": "Certificate Course in Sketchup",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-348",
    "title": "Auto Cad and 3DS Max",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-349",
    "title": "Certificate Course in Tekla Structure",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-350",
    "title": "Certificate Course in Microsoft Office Project",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-351",
    "title": "Certificate Course in Revit Electrical",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-352",
    "title": "Certificate Course in Corona Renderer",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-353",
    "title": "Certificate Course in BIM 360",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "BIM/CAD",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-354",
    "title": "Certificate Course in Nawisworks",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-355",
    "title": "Architectural Visualization",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-356",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-357",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Certificate Course",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-358",
    "title": "Diploma in Machine Designing",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-359",
    "title": "Diploma in Interior Designing",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-360",
    "title": "G-Engineer (Civil)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-361",
    "title": "Advanced Diploma in CAD Training",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech",
      "AI Powered"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-362",
    "title": "Diploma in Building Design and Animation",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-363",
    "title": "Advanced Diploma In Interior Designing",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-364",
    "title": "Advanced Diploma in Building Design and   Animation",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-365",
    "title": "Diploma in Building Design and Animation with Revit",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech",
      "BIM/CAD"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-366",
    "title": "Professional Diploma in Building Designing and Planning Engineering",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-367",
    "title": "Advanced Diploma in BIM Architecture",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech",
      "BIM/CAD"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-368",
    "title": "Advanced Diploma in BIM Structural",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech",
      "BIM/CAD"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-369",
    "title": "G-Engineer (Mechanical)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-370",
    "title": "Professional  Diploma in Building Designing",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-371",
    "title": "Professional Diploma in Planning Engineering",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Diploma Courses",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Diploma",
      "Civil & Mech"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-372",
    "title": "Master in CAD (CIVIL)",
    "categoryKey": "cad",
    "categoryName": "CAD, BIM & Engineering Design",
    "subCategory": "Master Courses",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Civil & Mech",
    "tags": [
      "Civil & Mech",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-373",
    "title": "Master Diploma in Fashion Designing",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-374",
    "title": "Advanced Diploma in Fashion Designing",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-375",
    "title": "Diploma in Fashion Designing",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-376",
    "title": "Advanced Diploma in Beautician Course",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-377",
    "title": "Diploma in Beautician Course",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-378",
    "title": "Certificate Course in Fabric &amp; Glass Painting",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "AI Powered",
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-379",
    "title": "Certificate Course in Embroidery Works",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-380",
    "title": "Certificate Course in Tailoring",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "AI Powered",
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-381",
    "title": "Advanced Course in Mehandi Design",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-382",
    "title": "Certificate Course in Aari Works",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-383",
    "title": "Certificate Course in Beautician",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-384",
    "title": "Certificate Course in Stitching Work",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-385",
    "title": "Certificate Course in Mehandi Design",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-386",
    "title": "HARDWARE &amp; NETWORKING",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-387",
    "title": "FINANCE &amp; BUSINESS MANAGEMENT",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Fashion Designing",
    "level": "Certificate",
    "duration": "1 - 3 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Certificate"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-388",
    "title": "Post Graduate Diploma in Hospital Administration (SAP,TALLY)",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Hospital Administration",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Master",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-389",
    "title": "Advance Diploma in Hospital Administration(SAP,TALLY)",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Hospital Administration",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-390",
    "title": "Post Graduate Diploma in Hospital Administration",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Hospital Administration",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Master"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-391",
    "title": "Advance Diploma in Hospital Management",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Hospital Administration",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-392",
    "title": "Diploma in Hospital Administration (SAP,TALLY)",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Hospital Administration",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-393",
    "title": "Diploma in Hospital Administration",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Hospital Administration",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-394",
    "title": "Post Graduate Diploma in Logistics Management (SAP,TALLY)",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Logistics Management",
    "level": "Master",
    "duration": "10 - 12 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Management & Vocations",
      "Master",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-395",
    "title": "Advance Diploma in Logistics Management (SAP,TALLY)",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Logistics Management",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations",
      "SAP",
      "Tally Prime"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-396",
    "title": "Post Graduation Diploma in Logistics Management",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Logistics Management",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-397",
    "title": "Advance Diploma in Logistic Management",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Logistics Management",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  },
  {
    "id": "gt-398",
    "title": "Diploma in Logistic Management",
    "categoryKey": "non-it-programs",
    "categoryName": "Professional Non-IT Programs",
    "subCategory": "Logistics Management",
    "level": "Diploma",
    "duration": "6 - 9 Months",
    "badge": "Management & Vocations",
    "tags": [
      "Diploma",
      "Management & Vocations"
    ],
    "mode": "Classroom & Hands-on Lab",
    "placementSupport": true,
    "certified": "G-TEC / NSDC / Global Certification"
  }
];
