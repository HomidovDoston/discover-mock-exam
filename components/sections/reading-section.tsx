// ./sections/reading-section.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ReadingSectionProps {
  onComplete: any;
}

export default function ReadingSection({ onComplete }: ReadingSectionProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activePassage, setActivePassage] = useState("passage1");

  const total = 40;
  const completed = Object.keys(answers).length;

  const handleAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value.toUpperCase().trim() }));
  };

  const handleSubmit = () => {
    onComplete(answers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-4 sticky top-0 z-50 border-2 border-gray-300">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Reading Test
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                IELTS Academic Reading
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {completed}
              </div>
              <div className="text-xs text-gray-500">/ {total}</div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>

        <Tabs value={activePassage} onValueChange={setActivePassage}>
          <TabsList className="grid grid-cols-3 gap-2 bg-white/90 backdrop-blur p-2 rounded-xl shadow-md mb-4">
            {["passage1", "passage2", "passage3"].map((id, i) => (
              <TabsTrigger
                key={id}
                value={id}
                className="text-xs md:text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg cursor-pointer"
              >
                Passage {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="passage1">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h2 className="text-xl font-bold text-center mb-4 underline">
                  An early cultural tourist
                </h2>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-3">
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    <p>
                      In the 15th century, the Italian merchant{" "}
                      <strong>Cyriacus of Ancona</strong> journeyed in search of
                      the Mediterranean’s classical past. In doing so, he laid
                      the groundwork for today’s cultural holidays.
                    </p>
                    <br />
                    <p>
                      Today we take it for granted that we travel around the
                      world to admire the monuments of the past. We prepare for
                      such trips by reading about what we are going to see, set
                      out on the journey with a good idea of how we will get
                      there and where we will stay and have a sense of what we
                      will encounter on location. Cyriacus of Ancona
                      (1391–1452), the first cultural tourist since antiquity,
                      lacked these advantages when, in the first half of the
                      15th century, he sailed around the Mediterranean in search
                      of the remains of Greek and Roman civilisations.
                    </p>
                    <p>
                      Cyriacus first became fascinated by ancient monuments
                      while walking in his home city Ancona and looking at the
                      marble arch, erected in AD 115, to the Roman Emperor
                      Trajan. He suddenly saw the structure in a new light. He
                      no longer saw it as just a familiar and generally
                      overlooked landmark, but as a doorway to the wonders of
                      ancient imperial Rome. Not many people of Cyriacus’s time
                      were interested in historical travel, they generally
                      ignored old buildings and structures, or worse, dismantled
                      them for their building materials.
                    </p>
                    <br />
                    <p>
                      Cyriacus decided to see the world for himself and to
                      record details of whatever other antiquities remained to
                      be discovered. His training as a merchant did not prepare
                      him for this vocation; he did not know ancient languages,
                      history or art. However, he set out to solve these
                      failings, first by learning Latin at the age of 30 and
                      then adding ancient Greek. Having done this, he then set
                      off on voyages around the Mediterranean to find,
                      investigate and understand ancient cultures from their
                      buildings, sculptures and inscriptions. Thus he became the
                      first archaeologist and cultural tourist, predating other
                      antiquarians by some 200 years.
                    </p>
                    <br />
                    <p>
                      Travel in the 15th century, however, was anything but
                      simple or enjoyable. Overland journeys by foot or mule
                      along bad roads, under constant threat from bandits, were
                      bad; voyages by seas were even worse. When the weather
                      cooperated, sailing went relatively smoothly, ships
                      proceeded along coasts from one recognizable landmark to
                      another. However, when there was no wind the ship did not
                      move. Strong winds were no friends either, they drenched
                      the ship with lashing waves and blew it off course. Water
                      swamped the deck, splashed into the cabins and soaked
                      mattresses, clothes and food. Remarkably, Cyriacus never
                      complained about the miseries of travel. Optimistic by
                      nature, he endured such hardships unafraid and saw
                      opportunities where other people saw setbacks.
                    </p>
                    <br />
                    <p>
                      Among many of the important records made by Cyriacus was
                      his crucial documenting, in 1431, of the remains of
                      Cyzicus, an ancient Roman city that had relied on commerce
                      for its financial success. He hired a local person to take
                      him to site and then had to work out for himself the
                      significance of the ruins he was looking at because there
                      was no guidebook on ancient architecture to help him.
                      Indeed, his contemporary knowledge about the ruins.
                      Cyzicus had been a splendid city in its prime.
                      Unfortunately, the area was highly seismic and in AD 123
                      the city was so devastated by a major earthquake that,
                      when the Roman Emperor Hadrian visited it the following
                      year, he was so saddened that he decided to subsidise a
                      campaign to reconstruct Cyzicus. He made a substantial
                      donation for a new temple to the Roman god Jupiter.
                      Cyriacus thought the ruined city was awe-inspiring. He
                      found the remains of the temple and examined it in great
                      detail, looking for clues in ancient texts to help him
                      understand what he was seeing. He sketched the great
                      doorway adorned with carved foliage and mythological
                      characters. Cyriacus’s account of this temple is the only
                      record of this building as in the following centuries it
                      was entirely stripped of all its stonework and all that
                      remains is its base.
                    </p>
                    <br />
                    <p>
                      Cyriacus also visited mainland Greece, in 1436, when no
                      one went to Greece in order to see the country’s ancient
                      ruins. One of his destinations was the sanctuary of
                      Delphi. The ancient Greeks considered Delphi as being
                      situated in the most beautiful spot in Greece. When
                      Cyriacus arrived at the site of Delphi, however, he found
                      war, earthquakes and avalanches had all but obliterated
                      its ruins. Determined to find any ancient traces, Cyriacus
                      spent six days walking all over the areas, peering at odd
                      stone blocks sticking out of the ground, running his hands
                      over inscriptions to trace fragments of words, and trying
                      to puzzle out the few surviving structural remains.
                      Climbing uphill towards the rocks that tower over the
                      site, he came upon a theatre built into the slope. Soon
                      after his visit, the site was buried by a rockslide and
                      was not seen again until archaeologists began to excavate
                      the area systematically in the late 19th century.
                    </p>
                    <br />
                    <p>
                      Cyriacus had hoped to visit Egypt and Ethiopia but he
                      never got there. However, in his life he did record for
                      posterity countless ancient monuments around the
                      Mediterranean, paving the way for future archaeologists
                      and cultural tourists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 1–6</h3>
                <div className="space-y-3">
                  {[
                    {
                      id: "1",
                      text: "Cyriacus was unable to research his journeys before he left.",
                    },
                    {
                      id: "2",
                      text: "The Roman Emperor Trajan built the city of Ancona.",
                    },
                    {
                      id: "3",
                      text: "Respect for ancient architecture was widespread in the 15th century.",
                    },
                    {
                      id: "4",
                      text: "Before leaving on his journey, Cyriacus studied ancient languages.",
                    },
                    {
                      id: "5",
                      text: "Travelling by sea in the 15th century was easier than travelling on land.",
                    },
                    {
                      id: "6",
                      text: "Cyriacus tried to make his fellow sea travelers more comfortable.",
                    },
                  ].map((q) => (
                    <div key={q.id} className="flex items-center gap-3">
                      <span className="font-medium w-8">{q.id}</span>
                      <span className="flex-1 text-sm">{q.text}</span>
                      <select
                        value={answers[q.id] || ""}
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                        className="border-2 border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:border-blue-500"
                      >
                        <option value="">—</option>
                        <option value="TRUE">TRUE</option>
                        <option value="FALSE">FALSE</option>
                        <option value="NOT GIVEN">NOT GIVEN</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 7–13</h3>
                <p className="text-sm mb-4">
                  Choose <strong>ONE WORD ONLY</strong>
                </p>
                <div className="border-2 border-gray-400 rounded-lg p-5 bg-gray-50">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>The wealth of the city had come from</span>
                      <input
                        type="text"
                        value={answers["7"] || ""}
                        onChange={(e) => handleAnswer("7", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="7"
                      />
                    </li>
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <input
                        type="text"
                        value={answers["8"] || ""}
                        onChange={(e) => handleAnswer("8", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="8"
                      />
                      <span>
                        to the ancient city ruins not available when visited by
                        Cyriacus
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>The city was destroyed by a powerful</span>
                      <input
                        type="text"
                        value={answers["9"] || ""}
                        onChange={(e) => handleAnswer("9", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="9"
                      />
                      <span>in AD 123</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>
                        A year later Emperor Hadrian supported a campaign to
                        rebuild the city
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>
                        A temple to Jupiter was built – helped by an especially
                        large
                      </span>
                      <input
                        type="text"
                        value={answers["10"] || ""}
                        onChange={(e) => handleAnswer("10", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="10"
                      />
                      <span>from Emperor Hadrian</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>
                        Cyriacus found part of the temple, which was built in
                        the time of Emperor Hadrian, and made drawings of the
                      </span>
                      <input
                        type="text"
                        value={answers["11"] || ""}
                        onChange={(e) => handleAnswer("11", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="11"
                      />
                      <span>to the temple and its decorative carvings</span>
                    </li>
                  </ul>

                  <h5 className="font-semibold mt-6 mb-2">
                    The sanctuary of Delphi
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>
                        By the 15th century Delphi had almost disappeared due to
                        natural disasters and
                      </span>
                      <input
                        type="text"
                        value={answers["12"] || ""}
                        onChange={(e) => handleAnswer("12", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="12"
                      />
                    </li>
                    <li className="flex items-center gap-2">
                      <span>•</span>
                      <span>Cyriacus found a</span>
                      <input
                        type="text"
                        value={answers["13"] || ""}
                        onChange={(e) => handleAnswer("13", e.target.value)}
                        className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center"
                        placeholder="13"
                      />
                      <span>Above Delphi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="passage2">
            <div className="space-y-6">
              {/* Passage Text */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h2 className="text-xl font-bold text-center mb-4 underline">
                  Sports Science
                </h2>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    When the first Olympics took place in Greece 3,000 years
                    ago, athletes could get by with little more than raw
                    strength. These days, however, talent and guts just aren’t
                    enough to make it on the international circuit.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold text-lg mb-2">A</p>
                      <p>
                        Olympic athletes today train with a dedicated team of
                        sports scientists, each applying the latest research and
                        technology to their quest for success. Everything from
                        the fibres in their muscles to the cells in their brains
                        is put through a rigorous workout programme to ensure
                        that, on the big day, they walk out of their changing
                        room with a perfectly designed body and a focused mind.
                        It’s not difficult to find examples of this, but what’s
                        behind this never-ending increase in performance? Most
                        experts agree that part of it is down to huge advances
                        in sports science, bringing not only a better
                        understanding of the body and mind, but massive
                        improvements in equipment design.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">C</p>
                      <p>
                        Over the years, Fowler has worked with his fair share of
                        elite athletes, including Olympic javelin throwers and
                        long jumpers, and has plenty of examples of when
                        biomechanics has made a difference to performance. “We
                        found that in the long jump, it’s best if the foot is
                        moving backwards when it hits the board, like a kind of
                        pawing movement. One of our elite jumpers made a radical
                        jumping strategy change as a result of this advice and
                        that season there was a substantial increase in their
                        personal best.”
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold text-lg mb-2">B</p>
                      <p>
                        Sports science can be split into four areas:
                        biomechanics, physiology, psychology and technology.
                        Biomechanics is the science that applies engineering
                        principles to the motion of the body. Biomechanists
                        analyse an athlete’s movements using video, motion
                        tracking, force transducers and instruments to measure
                        electrical muscle activity and gauge internal and
                        external forces on the body. “We need to know which
                        muscles are working when, and how hard, to understand
                        technique and co-ordination,” says Dr Neil Fowler, a
                        biomechanist at Manchester Metropolitan University and
                        Biomechanics chair for the British Association of Sport
                        and Exercise Sciences.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">D</p>
                      <p>
                        But to get the best from biomechanics, an athlete has to
                        be physically capable of making the changes — and that’s
                        where the physiology comes in. Physiologists often work
                        closely with biomechanists to fill the physiological
                        gaps that could make the difference between success and
                        failure. What physiologists measure varies from sport to
                        sport and even between events. For an endurance athlete,
                        for example, a priority is to get enough oxygen to the
                        muscles so they can work aerobically for as long as
                        possible. Once your body reaches the maximum rate at
                        which it can process oxygen, your muscles begin to work
                        anaerobically and produce lactic acid, which leads to
                        muscle fatigue. With this in mind, physiologists try to
                        establish what is the maximum sustainable speed where
                        lactic acid levels no longer rise.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold text-lg mb-2">E</p>
                      <p>
                        “We know in general that if you want to get stronger,
                        you lift a lot (bones become bigger and there’s an
                        increase in density leading to more strength); if you
                        want to be a good endurance runner, you run a lot — but
                        it’s really about targeting each of these determinants
                        of performance and training at the correct intensity,
                        for the correct duration, at the correct frequency,”
                        says Dr Greg Whyte, physiologist and sports science
                        co-ordinator for the English Institute of Sport.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">G</p>
                      <p>
                        Even with a perfect body and the best equipment, the
                        athlete’s mind could let them down on the day. Professor
                        Ian Maynard from Sheffield Hallam University is
                        psychology advisor to the British Olympic Association,
                        and works with the sailing and diving teams. As he
                        explains, mental preparation can begin up to two months
                        before the event, with competitors striving to maintain
                        a positive frame of mind. “The whole idea is that
                        consistent preparation leads to consistent performance,”
                        says Maynard. “They might have videos, music, arrange to
                        meet friends and family, anything that would be a
                        positive distraction.” They are also trained to refocus
                        quickly and put themselves back on track in case
                        something goes wrong mid-event.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold text-lg mb-2">F</p>
                      <p>
                        But it does seem there is a limit to what the body can
                        do, and in some parts there may now be little room for
                        improvement. So this is where equipment can play an
                        important role. The Sports Engineering Group at
                        Sheffield University is just one group which is
                        designing high-tech sporting equipment that can make
                        changes. However, sometimes not everyone wants the same
                        from technology. “We get it from all angles,” says the
                        group’s Dr Matt Carre. “Within industry, a company might
                        want to make tennis rackets that can hit balls faster,
                        but we also get governing bodies who want to know what’s
                        happening. Obviously they want new technology, but if it
                        starts to spoil the game then they need to bring in some
                        rule changes to stop that happening.”
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2">H</p>
                      <p>
                        Visualisation can add an extra dimension to training.
                        “Reliving your best performances is one of the best ways
                        to build confidence, so we go through a performance in
                        the mind’s eye, reliving the emotions and the technical
                        aspects of it,” says Maynard. Research also suggests
                        visualisation is almost as good as practice. “The
                        neurophysiological explanation is that if you imagine a
                        movement, you go through the same synaptic pathways in
                        the brain as if you were actually executing it,” he
                        says.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Questions 14–16: Paragraph Matching */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 14–16</h3>
                <p className="text-sm mb-4">
                  Reading Passage 2 has eight paragraphs, <strong>A–H</strong>.
                </p>
                <p className="text-sm mb-4">
                  Which paragraph contains the following information?
                </p>
                <p className="text-sm mb-4">
                  Write the correct letter, <strong>A–H</strong>, in boxes 14–16
                  on your answer sheet.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      id: "14",
                      text: "a reference to a particular sports event which has benefited from close analysis of performance",
                    },
                    {
                      id: "15",
                      text: "a reference to the importance for athletes of recalling past successes",
                    },
                    {
                      id: "16",
                      text: "examples of devices used to gather data",
                    },
                  ].map((q) => (
                    <div key={q.id} className="flex items-center gap-3">
                      <span className="font-medium w-8">{q.id}</span>
                      <span className="flex-1 text-sm">{q.text}</span>
                      <input
                        type="text"
                        value={answers[q.id] || ""}
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                        className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 outline-none"
                        maxLength={1}
                        placeholder="A-H"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions 17–21: People Matching */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 17–21</h3>
                <p className="text-sm mb-4">
                  Look at the following statements (Questions 17–21) and the
                  list of people below.
                </p>
                <p className="text-sm mb-4">
                  Match each statement with the correct person,{" "}
                  <strong>A–D</strong>.
                </p>
                <p className="text-sm mb-4">
                  Write the correct letter, <strong>A–D</strong>, in boxes 17–21
                  on your answer sheet.
                </p>
                <p className="text-sm font-medium mb-4">
                  <strong>NB</strong> You may use any letter more than once.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-400">
                  <p className="font-bold mb-2">List of People</p>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>A</strong> Dr Neil Fowler
                    </li>
                    <li>
                      <strong>B</strong> Dr Greg Whyte
                    </li>
                    <li>
                      <strong>C</strong> Dr Matt Carre
                    </li>
                    <li>
                      <strong>D</strong> Professor Ian Maynard
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      id: "17",
                      text: "He mentions the difficulty in satisfying conflicting demands.",
                    },
                    {
                      id: "18",
                      text: "He aims to prevent athletes from being deterred by unforeseen problems.",
                    },
                    {
                      id: "19",
                      text: "He describes an occasion when a small adjustment in technique led to improved performance.",
                    },
                    {
                      id: "20",
                      text: "He explains the need to observe athletes in action.",
                    },
                    {
                      id: "21",
                      text: "He mentions the importance of research in helping to decide upon the right amount of physical preparation.",
                    },
                  ].map((q) => (
                    <div key={q.id} className="flex items-center gap-3">
                      <span className="font-medium w-8">{q.id}</span>
                      <span className="flex-1 text-sm">{q.text}</span>
                      <input
                        type="text"
                        value={answers[q.id] || ""}
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                        className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 outline-none"
                        maxLength={1}
                        placeholder="A-D"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions 22–26: Notes Completion */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 22–26</h3>
                <p className="text-sm mb-4">Complete the notes below.</p>
                <p className="text-sm mb-4">
                  Choose <strong>NO MORE THAN TWO WORDS</strong> from the
                  passage for each answer.
                </p>
                <p className="text-sm mb-4">
                  Write your answers in boxes 22–26 on your answer sheet.
                </p>

                <div className="border-2 border-gray-400 rounded-lg p-5 bg-gray-50 space-y-6">
                  <div>
                    <h5 className="font-semibold mb-3">Respiratory System</h5>
                    <p className="text-sm">
                      For endurance athletes there should be enough oxygen for
                      the muscles to function
                      <input
                        type="text"
                        value={answers["22"] || ""}
                        onChange={(e) => handleAnswer("22", e.target.value)}
                        className="w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                        placeholder="22"
                      />
                      the maximum time. Any more than this will not be processed
                      and will result in the production of
                      <input
                        type="text"
                        value={answers["23"] || ""}
                        onChange={(e) => handleAnswer("23", e.target.value)}
                        className="w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                        placeholder="23"
                      />
                      and cause muscle fatigue.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Skeletal System</h5>
                    <p className="text-sm">
                      Weight-bearing exercise can increase bone size and
                      density, and therefore strength.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Mind</h5>
                    <p className="text-sm">
                      As mental preparation, athletes are encouraged to
                      participate in any activities which promote a
                      <input
                        type="text"
                        value={answers["24"] || ""}
                        onChange={(e) => handleAnswer("24", e.target.value)}
                        className="w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                        placeholder="24"
                      />
                      . Training is also given in how to
                      <input
                        type="text"
                        value={answers["25"] || ""}
                        onChange={(e) => handleAnswer("25", e.target.value)}
                        className="w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                        placeholder="25"
                      />
                      if things don’t go according to plan.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Nervous System</h5>
                    <p className="text-sm">
                      Imagining a movement involves the same pathways in the
                      brain that are used to actually execute the movement, so
                      the use of
                      <input
                        type="text"
                        value={answers["26"] || ""}
                        onChange={(e) => handleAnswer("26", e.target.value)}
                        className="w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                        placeholder="26"
                      />
                      can be very effective in training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="passage3">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h2 className="text-xl font-bold text-center mb-4 underline">
                  Learning to be bilingual
                </h2>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-3">
                  <p>
                    <strong>Dr Chisato Danjo</strong>, Lecturer in Japanese and
                    Linguistics, examines the bilingual family home.
                  </p>
                  <p>
                    Few people would consider mastering more than one language a
                    bad idea. Consequently, parents who speak different
                    languages from each other are generally keen for their
                    children to learn both. They understand that the family
                    setting they create is central to this, and seek ways to
                    ensure their children thrive bilingually. One of the
                    best-known approaches is the ‘one-parent-one-language’
                    strategy (OPOL). Each parent uses their native language when
                    communicating with their children, so the children learn
                    both simultaneously. OPOL – emphasises consistency – each
                    parent sticking to one language – as key to its approach.
                    But this creates the myth that mixing languages should
                    always be avoided. My recent study, part of a new wave of
                    multilingualism studies, would suggest that this received
                    wisdom is just that: a myth. My research looked at
                    Japanese-British families living in the UK with pre- and
                    early school-age children who were following a more-or-less
                    strict OPOL language policy. I was particularly interested
                    in examining the impact of OPOL in the family home – how
                    does this unique language environment affect the way
                    children use languages?
                  </p>
                  <p>
                    Most of the Japanese mothers who participated were fluent in
                    Japanese and English, while the fathers possessed merely an
                    elementary grasp of Japanese. This made English the primary
                    language of communication between the parents and outside
                    the home. For this reason, the mothers were careful to carve
                    out additional space for more sustained Japanese language
                    learning with their children. In other words, this dedicated
                    space for communicating in Japanese was time the children
                    spent exclusively with their mother. This seemed to create a
                    connection between “Japanese language” and “motherhood” in
                    the children’s perception. This link became apparent in the
                    way the children used Japanese as a means of emotional
                    bonding with their mother. In addition, they adopted a
                    broader behavioural repertoire than that which is usually
                    associated with a language. For example, switching to
                    Japanese could sometimes serve as a method to appease Mum
                    when she seemed unhappy. At other times, refusing to
                    communicate in Japanese was a useful means of defiance, even
                    when the dispute was not related to language.
                  </p>
                  <p>
                    The OPOL approach emphasises the need for parents to monitor
                    children’s language closely and correct them if they mix the
                    two languages. In practice, many parents speaking the
                    minority language are bilingual themselves – so they
                    understand what their children are saying even when they do
                    mix the two. In addition, parents feel it’s problematic to
                    keep correcting children when they mix languages. This is
                    particularly the case when children show annoyance at being
                    corrected. The parents believe it is a lot more important to
                    have a meaningful conversation with their children.
                  </p>
                  <p>
                    But what if a child uses language that cannot readily be
                    categorised as either one language or the other? An example
                    from my study involved the use of English words adapted to
                    accommodate Japanese pronunciation. One of these borrowed
                    words, “ice cream”, is usually pronounced “aisukurimu”. The
                    distinction between singular and plural does not exist in
                    Japanese nouns in the English language sense, so whether
                    using singular or plural, even in a borrowed word,
                    “aisukurimu” is the form normally used. But one of my child
                    participants showed his mother a drawing of two cones of ice
                    cream and described them as “aisukurimuzu”, with a Japanese
                    pronunciation but in English plural form. The child had
                    created something in between.
                  </p>
                  <p>
                    Another example from my study focused on the interaction
                    between Japanese-English bilingual siblings. In one case, a
                    six-year-old girl was trying to convince her four-year-old
                    brother to let her play with his toys. Following firm
                    rejections by her brother, the girl drew on her
                    communicative repertoire to convince him. To start with, she
                    shifted from an authoritative demand to a softer and humbler
                    appeal. She rephrased the question by using various polite
                    forms. Then, her voice became more nasal, suggesting she was
                    about to burst into tears. Even more interestingly, while
                    the negotiation had begun in English, in the middle she
                    shifted to Japanese. Although this may give the impression
                    of language mixing, a considerably more complex process was
                    taking place. The shift was accompanied by the incorporation
                    of Japanese cultural elements, such as honorific titles that
                    emphasise emotional attachment, a relationship of dependence
                    between sister and brother, and an assumed obligation to
                    care on the part of the brother. She succeeded.
                  </p>
                  <p>
                    These examples show how creatively and strategically human
                    beings use language in their daily communication. Whether
                    bilingual or not, we all constantly select from our
                    repertoire anything that will best serve our purpose. For
                    instance, imagine you want to ask a neighbour a favour. You
                    would use polite language in a friendly voice. But what
                    about your facial expression? Your body language? It is
                    likely you would make appropriate choices. For bilinguals,
                    shifting between languages is all part of their repertoire.
                  </p>
                  <p>
                    Our language repertoires are shaped by meaning, based on
                    knowledge gathered throughout our lives, and the ways we use
                    language also shape its meaning. The use of OPOL in the
                    family brings specific meaning to language used at home, and
                    children make full use of emergent meaning in their own
                    interactions.
                  </p>
                  <p>
                    The popularity of OPOL amongst parents rests on the
                    simplicity of its message, which is that it should be
                    applied consistently. But when we see a child actively
                    using, adapting and negotiating their repertoire, it casts
                    doubt on the belief that it’s bad for children to mix
                    languages. What they could actually be doing is
                    demonstrating high-level flexibility and interpersonal
                    skills.
                  </p>
                  <p>
                    Being bilingual isn’t simply about an ability to speak two
                    languages. Rigidly policing consistency in the OPOL approach
                    could actually inhibit bilingual children’s linguistic
                    ability and creativity. And in the same way, it could also
                    limit their parents’ ability to reveal their own bilingual
                    skills, using their own repertoires.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 27–31</h3>
                <p className="text-sm mb-4">
                  Complete the summary using the list of words,{" "}
                  <strong>A–H</strong>, below.
                </p>
                <p className="text-sm mb-4">
                  Write the correct letter, <strong>A–H</strong>, in boxes 27–31
                  on your answer sheet.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-400">
                  <p className="font-bold mb-2 text-center">
                    A bilingual child negotiates with her brother
                  </p>
                  <p className="text-sm">
                    Faced with her little brother’s refusal to let her play with
                    his toys, a young bilingual child used all of her
                    communication{" "}
                    <input
                      type="text"
                      value={answers["27"] || ""}
                      onChange={(e) => handleAnswer("27", e.target.value)}
                      className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 mx-1"
                      maxLength={1}
                      placeholder="27"
                    />{" "}
                    to change his mind. First, she expressed her{" "}
                    <input
                      type="text"
                      value={answers["28"] || ""}
                      onChange={(e) => handleAnswer("28", e.target.value)}
                      className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 mx-1"
                      maxLength={1}
                      placeholder="28"
                    />{" "}
                    in gentler, more polite language, and pretended to be about
                    to cry. Having switched from English to Japanese, she
                    exploited{" "}
                    <input
                      type="text"
                      value={answers["29"] || ""}
                      onChange={(e) => handleAnswer("29", e.target.value)}
                      className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 mx-1"
                      maxLength={1}
                      placeholder="29"
                    />{" "}
                    of Japanese culture, such as reminding him of his obligation
                    to her as her brother. She succeeded in her{" "}
                    <input
                      type="text"
                      value={answers["30"] || ""}
                      onChange={(e) => handleAnswer("30", e.target.value)}
                      className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 mx-1"
                      maxLength={1}
                      placeholder="30"
                    />{" "}
                    to convince him.
                    <input
                      type="text"
                      value={answers["31"] || ""}
                      onChange={(e) => handleAnswer("31", e.target.value)}
                      className="w-16 border-2 border-gray-300 rounded-lg px-2 py-1 text-center font-bold text-lg focus:border-blue-500 mx-1"
                      maxLength={1}
                      placeholder="31"
                    />{" "}
                    to convince him.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  {[
                    { letter: "A", word: "request" },
                    { letter: "B", word: "attempts" },
                    { letter: "C", word: "strategies" },
                    { letter: "D", word: "misunderstandings" },
                    { letter: "E", word: "agreement" },
                    { letter: "F", word: "judgement" },
                    { letter: "G", word: "behavior" },
                    { letter: "H", word: "aspects" },
                  ].map((item) => (
                    <div key={item.letter} className="flex items-center gap-2">
                      <span className="font-bold">{item.letter}</span>
                      <span>{item.word}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 32–35</h3>
                <p className="text-sm mb-4">
                  Complete the summary below. Choose{" "}
                  <strong>ONE WORD ONLY</strong> from the passage for each
                  answer.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-400">
                  <p className="text-sm">
                    The OPOL approach requires parents to{" "}
                    <input
                      type="text"
                      value={answers["32"] || ""}
                      onChange={(e) => handleAnswer("32", e.target.value)}
                      className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                      placeholder="32"
                    />{" "}
                    children if they mix languages. However, many parents find
                    this{" "}
                    <input
                      type="text"
                      value={answers["33"] || ""}
                      onChange={(e) => handleAnswer("33", e.target.value)}
                      className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                      placeholder="33"
                    />{" "}
                    because they want to have a{" "}
                    <input
                      type="text"
                      value={answers["34"] || ""}
                      onChange={(e) => handleAnswer("34", e.target.value)}
                      className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                      placeholder="34"
                    />{" "}
                    conversation. In addition, children may show{" "}
                    <input
                      type="text"
                      value={answers["35"] || ""}
                      onChange={(e) => handleAnswer("35", e.target.value)}
                      className="w-32 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center mx-1"
                      placeholder="35"
                    />{" "}
                    when corrected.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-300">
                <h3 className="text-lg font-bold mb-4">Questions 36–40</h3>
                <p className="text-sm mb-4">
                  Do the following statements agree with the claims of the
                  writer in Reading Passage 3?
                </p>
                <p className="text-sm mb-4">
                  In boxes 36–40 on your answer sheet, write
                </p>
                <div className="space-y-3">
                  {[
                    {
                      id: "36",
                      text: "Even people who speak only one language know how to adapt their way of communicating according to the situation.",
                    },
                    {
                      id: "37",
                      text: "People who grow up in OPOL families will go on to use this approach with their own children.",
                    },
                    {
                      id: "38",
                      text: "The reason the OPOL approach is favoured by many parents is that it encourages them to switch languages when necessary.",
                    },
                    {
                      id: "39",
                      text: "Bilingual children who mix languages eventually develop a preference for one of the languages.",
                    },
                    {
                      id: "40",
                      text: "The OPOL approach may restrict people’s capacity to be resourceful in their use of language.",
                    },
                  ].map((q) => (
                    <div key={q.id} className="flex items-center gap-3">
                      <span className="font-medium w-8">{q.id}</span>
                      <span className="flex-1 text-sm">{q.text}</span>
                      <select
                        value={answers[q.id] || ""}
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                        className="border-2 border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:border-blue-500"
                      >
                        <option value="">—</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                        <option value="NOT GIVEN">NOT GIVEN</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="sticky bottom-4 z-50 mt-6">
          <Button
            onClick={handleSubmit}
            disabled={completed < 40}
            className="w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold text-lg rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {completed >= 40
              ? "Submit Reading Test"
              : `Javoblar to‘liq emas (${completed}/40)`}
          </Button>
        </div>
      </div>
    </div>
  );
}
