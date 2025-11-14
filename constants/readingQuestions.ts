export const reading_passages = [
  {
    id: "passage1",
    title: "Passage 1: An Early Cultural Tourist",
    text: `
In the 15th century, the Italian merchant and traveler Cyriacus of Ancona became one of the earliest cultural tourists in history. He had a fascination with the remains of the ancient world and traveled widely across Greece and the eastern Mediterranean in search of ruins, inscriptions, and monuments.

Unlike most travelers of his time, Cyriacus was not motivated by trade or politics but by curiosity and admiration for ancient civilizations. He visited temples, theaters, and marketplaces, carefully recording what he saw in notebooks filled with drawings and descriptions. These notes later inspired other scholars of the Renaissance to rediscover classical art and architecture.

During his visit to the city of Ancona, Cyriacus found a monument built by the Roman Emperor Trajan. He described it in detail, noting the fine marble and carvings that had survived for centuries. His observations were among the earliest examples of systematic archaeological documentation.

Traveling in the 15th century, however, was not easy. Sea journeys were long and dangerous, and travelers often faced storms, piracy, and illness. Yet Cyriacus’s enthusiasm for learning never faded. He believed that by understanding the ancient world, people could create a better and more enlightened future.
    `,
    questions: [
      // TRUE / FALSE / NOT GIVEN (1–6)
      {
        id: "R1",
        num: 1,
        type: "TFNG",
        question:
          "Cyriacus was unable to research his journeys before he left.",
      },
      {
        id: "R2",
        num: 2,
        type: "TFNG",
        question: "The Roman Emperor Trajan built the city of Ancona.",
      },
      {
        id: "R3",
        num: 3,
        type: "TFNG",
        question:
          "Respect for ancient architecture was widespread in the 15th century.",
      },
      {
        id: "R4",
        num: 4,
        type: "TFNG",
        question:
          "Before leaving on his journey, Cyriacus studied ancient languages.",
      },
      {
        id: "R5",
        num: 5,
        type: "TFNG",
        question:
          "Travelling by sea in the 15th century was easier than travelling on land.",
      },
      {
        id: "R6",
        num: 6,
        type: "TFNG",
        question:
          "Cyriacus tried to make his fellow sea travelers more comfortable.",
      },

      // WORD COMPLETION (7–13)
      {
        id: "R7",
        num: 7,
        type: "WORD",
        question: "The wealth of the city had come from ________.",
      },
      {
        id: "R8",
        num: 8,
        type: "WORD",
        question: "________ to the ancient city ruins were not available.",
      },
      {
        id: "R9",
        num: 9,
        type: "WORD",
        question: "The city was destroyed by a powerful ________ in AD 123.",
      },
      {
        id: "R10",
        num: 10,
        type: "WORD",
        question: "Hadrian made a substantial ________ for the new temple.",
      },
      {
        id: "R11",
        num: 11,
        type: "WORD",
        question: " Cyriacus made drawings of the temple’s ________.",
      },
      {
        id: "R12",
        num: 12,
        type: "WORD",
        question:
          "Delphi had almost disappeared due to natural disasters and ________.",
      },
      {
        id: "R13",
        num: 13,
        type: "WORD",
        question: "Cyriacus found a ________ above Delphi.",
      },
    ],
  },

  {
    id: "passage2",
    title: "Passage 2: Sports Science",
    text: `
When the first Olympic Games were held in ancient Greece, athletes relied entirely on their natural talent and determination. Today, however, sports performance is as much a science as it is an art. Every movement, heartbeat, and breath is studied by experts aiming to push the limits of human ability.

Modern sports scientists use technology such as motion sensors, cameras, and computer modeling to analyze athletes’ performance. Coaches rely on this data to adjust training routines, improve techniques, and prevent injuries. Nutritionists monitor diets, while psychologists ensure mental focus and resilience under pressure.

One of the most significant developments has been the understanding of how muscles and oxygen work together. Research shows that overtraining or poor recovery can drastically reduce performance. Therefore, balance and rest are as important as physical effort.

In recent years, virtual reality and biomechanical simulations have also entered the field. These allow athletes to practice in realistic environments without physical risk. As sports continue to evolve, the partnership between science and competition is becoming ever stronger.
    `,
    questions: [
      // Paragraph matching (14–16) — options are paragraph summaries (no A/B/C)
      {
        id: "R14",
        num: 14,
        type: "MATCH_PARAGRAPH",
        options: [
          "History of athletics and contrast between past and present approaches",
          "Use of technology and devices for performance analysis",
          "Role of nutrition and psychology in athlete preparation",
          "Emerging tools like virtual reality and simulations",
        ],
        question:
          "Which paragraph discusses the use of devices for collecting performance data?",
      },
      {
        id: "R15",
        num: 15,
        type: "MATCH_PARAGRAPH",
        options: [
          "History of athletics and contrast between past and present approaches",
          "Use of technology and devices for performance analysis",
          "Role of nutrition and psychology in athlete preparation",
          "Emerging tools like virtual reality and simulations",
        ],
        question:
          "Which paragraph refers to the importance of nutrition and mental focus?",
      },
      {
        id: "R16",
        num: 16,
        type: "MATCH_PARAGRAPH",
        options: [
          "History of athletics and contrast between past and present approaches",
          "Use of technology and devices for performance analysis",
          "Role of nutrition and psychology in athlete preparation",
          "Emerging tools like virtual reality and simulations",
        ],
        question:
          "Which paragraph mentions virtual reality and biomechanical simulations?",
      },

      // Matching People (17–21) — options are person descriptions, not letters
      {
        id: "R17",
        num: 17,
        type: "PEOPLE",
        options: [
          "Coach: balances technical training and performance demands",
          "Sports Scientist: researches muscle and oxygen function",
          "Psychologist: focuses on mental resilience and recalling success",
          "Performance Analyst: collects sensor and camera data",
        ],
        question: "Who mentions difficulty satisfying conflicting demands?",
      },
      {
        id: "R18",
        num: 18,
        type: "PEOPLE",
        options: [
          "Coach: balances technical training and performance demands",
          "Sports Scientist: researches muscle and oxygen function",
          "Psychologist: focuses on mental resilience and recalling success",
          "Performance Analyst: collects sensor and camera data",
        ],
        question:
          "Who aims to prevent athletes from being deterred by unforeseen problems?",
      },
      {
        id: "R19",
        num: 19,
        type: "PEOPLE",
        options: [
          "Coach: balances technical training and performance demands",
          "Sports Scientist: researches muscle and oxygen function",
          "Psychologist: focuses on mental resilience and recalling success",
          "Performance Analyst: collects sensor and camera data",
        ],
        question:
          "Who describes when a small adjustment in technique improved performance?",
      },
      {
        id: "R20",
        num: 20,
        type: "PEOPLE",
        options: [
          "Coach: balances technical training and performance demands",
          "Sports Scientist: researches muscle and oxygen function",
          "Psychologist: focuses on mental resilience and recalling success",
          "Performance Analyst: collects sensor and camera data",
        ],
        question: "Who explains the need to observe athletes in action?",
      },
      {
        id: "R21",
        num: 21,
        type: "PEOPLE",
        options: [
          "Coach: balances technical training and performance demands",
          "Sports Scientist: researches muscle and oxygen function",
          "Psychologist: focuses on mental resilience and recalling success",
          "Performance Analyst: collects sensor and camera data",
        ],
        question:
          "Who mentions the importance of research for correct physical preparation?",
      },

      // WORD COMPLETION (22–26)
      {
        id: "R22",
        num: 22,
        type: "WORD",
        question: "Muscles should function ________ for maximum time.",
      },
      {
        id: "R23",
        num: 23,
        type: "WORD",
        question: "Too much oxygen results in ________.",
      },
      {
        id: "R24",
        num: 24,
        type: "WORD",
        question: "Activities should promote a ________ as mental preparation.",
      },
      {
        id: "R25",
        num: 25,
        type: "WORD",
        question: "Athletes must ________ if things don’t go to plan.",
      },
      {
        id: "R26",
        num: 26,
        type: "WORD",
        question: "Use of ________ can be very effective in training.",
      },
    ],
  },

  {
    id: "passage3",
    title: "Passage 3: Learning to Be Bilingual",
    text: `
Few people would consider mastering two languages at once an easy task, yet millions of children around the world grow up bilingual. Research suggests that learning two languages early in life has profound cognitive benefits. It improves memory, attention, and problem-solving skills.

In many bilingual families, parents follow the “One Parent, One Language” (OPOL) method — each parent consistently speaks a different language to the child. This approach helps children distinguish between languages naturally and develop balanced proficiency in both.

However, being bilingual can also create temporary confusion. Young children sometimes mix words from different languages in the same sentence, which is perfectly normal. Over time, as vocabulary grows, they learn to separate the two systems efficiently.

Interestingly, bilingual individuals often adapt their language use based on social context — for instance, choosing one language at school and another at home. This flexibility is one of the key advantages of bilingualism and can even delay the onset of age-related cognitive decline later in life.
    `,
    questions: [
      // SHORT (27–31) — open short answers (no A/B/C/D)
      {
        id: "R27",
        num: 27,
        type: "SHORT",
        question:
          "What does the writer say about parents and language strategy?",
      },
      {
        id: "R28",
        num: 28,
        type: "SHORT",
        question: "What is meant by 'received wisdom' in this context?",
      },
      {
        id: "R29",
        num: 29,
        type: "SHORT",
        question: "How did mothers compensate for language gaps?",
      },
      {
        id: "R30",
        num: 30,
        type: "SHORT",
        question: "In what way did children use language differently?",
      },
      {
        id: "R31",
        num: 31,
        type: "SHORT",
        question: "What is suggested about correcting children's speech?",
      },

      // Summary Completion (32–35)
      { id: "R32", num: 32, type: "WORD", question: "communication ________" },
      { id: "R33", num: 33, type: "WORD", question: "expressed her ________" },
      { id: "R34", num: 34, type: "WORD", question: "exploited ________" },
      {
        id: "R35",
        num: 35,
        type: "WORD",
        question: "She succeeded in her ________.",
      },

      // YES / NO / NOT GIVEN (36–40)
      {
        id: "R36",
        num: 36,
        type: "YNNG",
        question:
          "Even people with one language adapt their communication to situation.",
      },
      {
        id: "R37",
        num: 37,
        type: "YNNG",
        question: "OPOL children will use OPOL with their kids.",
      },
      {
        id: "R38",
        num: 38,
        type: "YNNG",
        question: "OPOL encourages switching languages.",
      },
      {
        id: "R39",
        num: 39,
        type: "YNNG",
        question:
          "Bilingual children who mix languages eventually prefer one language.",
      },
      {
        id: "R40",
        num: 40,
        type: "YNNG",
        question:
          "OPOL may restrict parents’ resourceful capacity in language.",
      },
    ],
  },
];
