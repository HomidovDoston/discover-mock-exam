// src/constants/listeningQuestions.ts

export const listening_questions: Question[] = [
  {
    id: "1",
    num: 1,
    question: "The town dates back at least to ______",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "2",
    num: 2,
    question: "It originally had a flour mill and also made ______",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "3",
    num: 3,
    question: "the old Town Hall (1841) - now a ______",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "4",
    num: 4,
    question: "the first ______ built in 1882",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "5",
    num: 5,
    question: "Cornell House - originally a private house, now a ______",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "6",
    num: 6,
    question: "a Quaker farm (still run without the use of ______) ",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "7",
    num: 7,
    question: "There will be a ______ in the main square",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "8",
    num: 8,
    question: "Saturday evening: ______ by candlelight",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "9",
    num: 9,
    question: "______ Lodge",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },
  {
    id: "10",
    num: 10,
    question: "Phone number for the lodge: ______",
    type: "input",
    placeholder: "ONE WORD AND/OR A NUMBER",
  },

  // SECTION 2 - MCQ (11-15)
  {
    id: "11",
    num: 11,
    question: "The Silverton family arrived in the Bunna Bunna area in",
    type: "mcq",
    options: ["1904.", "1907.", "1911."],
  },
  {
    id: "12",
    num: 12,
    question: "The Bunna Bunna National Park is famous for its",
    type: "mcq",
    options: ["trees.", "waterfalls.", "birds."],
  },
  {
    id: "13",
    num: 13,
    question: "What does the speaker say makes the villas special?",
    type: "mcq",
    options: [
      "There are a limited number of them.",
      "They were designed by a famous architect.",
      "They were the first in the area to use solar energy.",
    ],
  },
  {
    id: "14",
    num: 14,
    question: "If you pay extra money, the resort managers will",
    type: "mcq",
    options: [
      "maintain the gardens.",
      "rent out your villa for you.",
      "check your villa regularly.",
    ],
  },
  {
    id: "15",
    num: 15,
    question: "All Type B villas have",
    type: "mcq",
    options: ["two levels.", "three bathrooms.", "four bedrooms."],
  },

  // SECTION 2 - Map (16-20)
  {
    id: "16",
    num: 16,
    question: "art gallery",
    type: "map",
    options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },
  {
    id: "17",
    num: 17,
    question: "day spa",
    type: "map",
    options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },
  {
    id: "18",
    num: 18,
    question: "restaurant",
    type: "map",
    options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },
  {
    id: "19",
    num: 19,
    question: "hotel",
    type: "map",
    options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },
  {
    id: "20",
    num: 20,
    question: "play area",
    type: "map",
    options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },

  // SECTION 3 - Matching (21-24)
  {
    id: "21",
    num: 21,
    question: "S83",
    type: "matching",
    options: ["A", "B", "C", "D", "E", "F", "G"],
  },
  {
    id: "22",
    num: 22,
    question: "Sea Explorer",
    type: "matching",
    options: ["A", "B", "C", "D", "E", "F", "G"],
  },
  {
    id: "23",
    num: 23,
    question: "Wave Rider",
    type: "matching",
    options: ["A", "B", "C", "D", "E", "F", "G"],
  },
  {
    id: "24",
    num: 24,
    question: "T602",
    type: "matching",
    options: ["A", "B", "C", "D", "E", "F", "G"],
  },

  // SECTION 3 - MCQ (25-30)
  {
    id: "25",
    num: 25,
    question:
      "The students agree that scientists choice of underwater vehicle depends on",
    type: "mcq",
    options: [
      "the water conditions.",
      "the project's budget.",
      "the data required.",
    ],
  },
  {
    id: "26",
    num: 26,
    question:
      "Where did scientists think the oil off the Californian coast had come from?",
    type: "mcq",
    options: ["a tanker", "vehicles on land", "fishing boats"],
  },
  {
    id: "27",
    num: 27,
    question:
      "Why was the underwater vehicle known as 'Alvin’ chosen to investigate the oil?",
    type: "mcq",
    options: [
      "It was the most advanced vehicle at the time.",
      "It was able to take photos of the seabed.",
      "It was designed specifically for coastal sea conditions.",
    ],
  },
  {
    id: "28",
    num: 28,
    question: "Scientists were able to use Alvin's samples to analyse",
    type: "mcq",
    options: [
      "how long oil would stay in the seabed.",
      "how much oil there was in the seabed.",
      "the chemicals in the oil found in the seabed",
    ],
  },
  {
    id: "29",
    num: 29,
    question: "Assessing the effect of oil on sea animals is difficult because",
    type: "mcq",
    options: [
      "oil can be complex and unpredictable",
      "we still can't access certain underwater areas.",
      "there are so many different species of sea animal.",
    ],
  },
  {
    id: "30",
    num: 30,
    question: "Scientists like studying natural oil seeps because these seeps",
    type: "mcq",
    options: [
      "show us how animals change to suit their environment.",
      "tend to be concentrated in one specific area.",
      "don't require as much equipment or special clothing.",
    ],
  },

  // SECTION 4 - Notes (31-40)
  {
    id: "31",
    num: 31,
    question: "The air smelt ______",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "32",
    num: 32,
    question: "The food had enough ______",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "33",
    num: 33,
    question: "______ was efficient",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "34",
    num: 34,
    question: "Difficulties with air filters caused lack of ______",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "35",
    num: 35,
    question:
      "there were problems when mixing ______ because of the preservatives",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "36",
    num: 36,
    question: "The ______ available were not always suitable for their purpose",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "37",
    num: 37,
    question: "It was difficult to access the ______ for equipment maintenance",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "38",
    num: 38,
    question: "Systems and equipment should undergo more extensive ______",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "39",
    num: 39,
    question:
      "astronauts needed practice in understanding the controller’s ______",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
  {
    id: "40",
    num: 40,
    question:
      "There should be less emphasis on ______ and more on other issues",
    type: "input",
    placeholder: "ONE WORD ONLY",
  },
];

export type Question =
  | {
      id: string;
      num: number;
      question: string;
      type: "input";
      placeholder: string;
    }
  | {
      id: string;
      num: number;
      question: string;
      type: "mcq" | "map" | "matching";
      options: string[];
    };
