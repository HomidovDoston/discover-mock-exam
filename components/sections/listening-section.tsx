"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Answers {
  [key: string]: string;
}

interface Props {
  onComplete: (answers: Record<string, string>) => void;
}

export default function ListeningTest({ onComplete }: Props) {
  const [answers, setAnswers] = useState<Answers>({});
  const [activeTab, setActiveTab] = useState("section1");

  const handleInput = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value.trim().toUpperCase() }));
  };

  const handleSelect = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* === AUDIO PLAYER (Sticky) === */}
        <div className="sticky top-0 z-50 bg-white rounded-2xl shadow-xl p-4 mb-6 border-2 border-gray-300">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Listening Test
            </h1>
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {Object.keys(answers).length}/40
            </span>
          </div>
          <audio controls className="w-full h-12" controlsList="nodownload">
            <source src="/listening-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-white shadow-md border">
            {["section1", "section2", "section3", "section4"].map((id, i) => (
              <TabsTrigger
                key={id}
                value={id}
                className="text-sm md:text-base font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                Section {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="section1">
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <SectionHeader
                  section="1"
                  questions="1-10"
                  instruction="Complete the notes below."
                  rule="Write ONE WORD AND/OR A NUMBER for each answer."
                />
                <NotesBox title="Barrington Historical Buildings Tours">
                  <Example text="Name of tourist information official: Tom" />
                  <p className="text-sm italic text-gray-600 mb-5">
                    Historical buildings tours are held in the week beginning
                    13th October.
                  </p>

                  <SectionTitle title="History of the town" />
                  <BulletInput
                    id="1"
                    text="The town dates back at least to"
                    answers={answers}
                    onChange={handleInput}
                  />
                  <BulletInput
                    id="2"
                    text="It originally had a flour mill and also made"
                    answers={answers}
                    onChange={handleInput}
                  />

                  <SectionTitle title="Tours include visits to" />
                  <BulletInput
                    id="3"
                    text="the old Town Hall (1841) - now a"
                    answers={answers}
                    onChange={handleInput}
                  />
                  <BulletInput
                    id="4"
                    text="the first"
                    answers={answers}
                    onChange={handleInput}
                    after="built in 1882"
                  />
                  <BulletInput
                    id="5"
                    text="Cornell House - originally a private house, now a"
                    answers={answers}
                    onChange={handleInput}
                  />
                  <BulletInput
                    id="6"
                    text="a Quaker farm (still run without the use of"
                    answers={answers}
                    onChange={handleInput}
                    after=")"
                  />

                  <SectionTitle title="Other attractions" />
                  <BulletInput
                    id="7"
                    text="There will be a"
                    answers={answers}
                    onChange={handleInput}
                    after="in the main square"
                  />
                  <BulletInput
                    id="8"
                    text="Saturday evening:"
                    answers={answers}
                    onChange={handleInput}
                    after="by candlelight"
                  />

                  <SectionTitle title="Accommodation" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <BulletInput
                      id="9"
                      answers={answers}
                      onChange={handleInput}
                    />
                    <span>Lodge (phone</span>
                    <BulletInput
                      id="10"
                      answers={answers}
                      onChange={handleInput}
                    />
                    <span>)</span>
                  </div>
                </NotesBox>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== SECTION 2 ==================== */}
          <TabsContent value="section2">
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <SectionHeader
                  section="2"
                  questions="11-20"
                  instruction="Questions 11 - 15"
                  rule="Choose the correct letter, A, B or C."
                />
                <h3 className="text-xl font-bold text-center mb-6 underline">
                  Buying holiday accommodation
                </h3>

                <MCQ
                  id="11"
                  question="The Silverton family arrived in the Bunna Bunna area in"
                  options={["1904.", "1907.", "1911."]}
                  answers={answers}
                  onSelect={handleSelect}
                />
                <MCQ
                  id="12"
                  question="The Bunna Bunna National Park is famous for its"
                  options={["trees.", "waterfalls.", "birds."]}
                  answers={answers}
                  onSelect={handleSelect}
                />
                <MCQ
                  id="13"
                  question="What does the speaker say makes the villas special?"
                  options={[
                    "There are a limited number of them.",
                    "They were designed by a famous architect.",
                    "They were the first in the area to use solar energy.",
                  ]}
                  answers={answers}
                  onSelect={handleSelect}
                />
                <MCQ
                  id="14"
                  question="If you pay extra money, the resort managers will"
                  options={[
                    "maintain the gardens.",
                    "rent out your villa for you.",
                    "check your villa regularly.",
                  ]}
                  answers={answers}
                  onSelect={handleSelect}
                />
                <MCQ
                  id="15"
                  question="All Type B villas have"
                  options={[
                    "two levels.",
                    "three bathrooms.",
                    "four bedrooms.",
                  ]}
                  answers={answers}
                  onSelect={handleSelect}
                />

                <div className="my-8">
                  <SectionHeader
                    section=""
                    questions="16-20"
                    instruction="Label the map below."
                    rule="Write the correct letter, A-H, next to questions 16-20."
                  />
                  <div className="bg-white p-6 rounded-lg border-2 border-gray-400 shadow-sm">
                    <p className="font-bold text-lg text-center mb-4">
                      Map of Silverton Resort
                    </p>
                    <div className="relative mx-auto max-w-lg">
                      <img
                        src="/map-silverton.png"
                        alt="Silverton Resort Map"
                        className="w-full h-auto border border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <MapLabel
                      id="16"
                      label="art gallery"
                      answers={answers}
                      onSelect={handleSelect}
                    />
                    <MapLabel
                      id="17"
                      label="day spa"
                      answers={answers}
                      onSelect={handleSelect}
                    />
                    <MapLabel
                      id="18"
                      label="restaurant"
                      answers={answers}
                      onSelect={handleSelect}
                    />
                    <MapLabel
                      id="19"
                      label="hotel"
                      answers={answers}
                      onSelect={handleSelect}
                    />
                    <MapLabel
                      id="20"
                      label="play area"
                      answers={answers}
                      onSelect={handleSelect}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== SECTION 3 ==================== */}
          <TabsContent value="section3">
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <SectionHeader
                  section="3"
                  questions="21 - 30"
                  instruction="Questions 21 - 24"
                  rule="Choose FOUR answers from the box and write the correct letter, A-G, next to questions 21-24."
                />

                <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-400">
                  <p className="font-bold mb-2">Special features</p>
                  {[
                    "can stay in one place underwater",
                    "has a special shape",
                    "is made from special strong material",
                    "moves well over rough terrain",
                    "operates best in very deep water",
                    "senses dangers under the seabed",
                    "uses solar energy",
                  ].map((f, i) => (
                    <p key={i} className="text-sm">
                      <strong>{String.fromCharCode(65 + i)}</strong> {f}
                    </p>
                  ))}
                </div>

                <h4 className="font-bold text-lg mb-4 text-center">
                  Autonomous Underwater Vehicles (AUVs)
                </h4>
                <div className="space-y-3">
                  <Matching
                    id="21"
                    name="S83"
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <Matching
                    id="22"
                    name="Sea Explorer"
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <Matching
                    id="23"
                    name="Wave Rider"
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <Matching
                    id="24"
                    name="T602"
                    answers={answers}
                    onSelect={handleSelect}
                  />
                </div>

                <div className="mt-8">
                  <SectionHeader
                    section=""
                    questions="25 - 30"
                    instruction="Choose the correct letter, A, B or C."
                  />
                  <MCQ
                    id="25"
                    question="The students agree that scientists choice of underwater vehicle depends on"
                    options={[
                      "the water conditions.",
                      "the project's budget.",
                      "the data required.",
                    ]}
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <MCQ
                    id="26"
                    question="Where did scientists think the oil off the Californian coast had come from?"
                    options={["a tanker", "vehicles on land", "fishing boats"]}
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <MCQ
                    id="27"
                    question="Why was the underwater vehicle known as 'Alvin’ chosen to investigate the oil?"
                    options={[
                      "It was the most advanced vehicle at the time.",
                      "It was able to take photos of the seabed.",
                      "It was designed specifically for coastal sea conditions.",
                    ]}
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <MCQ
                    id="28"
                    question="Scientists were able to use Alvin's samples to analyse"
                    options={[
                      "how long oil would stay in the seabed.",
                      "how much oil there was in the seabed.",
                      "the chemicals in the oil found in the seabed",
                    ]}
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <MCQ
                    id="29"
                    question="Assessing the effect of oil on sea animals is difficult because"
                    options={[
                      "oil can be complex and unpredictable",
                      "we still can't access certain underwater areas.",
                      "there are so many different species of sea animal.",
                    ]}
                    answers={answers}
                    onSelect={handleSelect}
                  />
                  <MCQ
                    id="30"
                    question="Scientists like studying natural oil seeps because these seeps"
                    options={[
                      "show us how animals change to suit their environment.",
                      "tend to be concentrated in one specific area.",
                      "don't require as much equipment or special clothing.",
                    ]}
                    answers={answers}
                    onSelect={handleSelect}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ==================== SECTION 4 ==================== */}
          <TabsContent value="section4">
            <Card className="border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <SectionHeader
                  section="4"
                  questions="31-40"
                  instruction="Complete the notes below."
                  rule="Write ONE WORD ONLY for each answer."
                />
                <NotesBox title="Life on the International Space Station">
                  <SectionTitle title="Background" />
                  <Bullet text="station was occupied by international teams of scientists over several months." />
                  <Bullet text="Research was done on living conditions." />

                  <SectionTitle title="Early impressions" />
                  <BulletInput
                    id="31"
                    text="The air smelt"
                    answers={answers}
                    onChange={handleInput}
                    after=""
                  />
                  <Bullet text="The temperature was easy to adjust." />
                  <BulletInput
                    id="32"
                    text="The food had enough"
                    answers={answers}
                    onChange={handleInput}
                    after=""
                  />
                  <BulletInput
                    id="33"
                    text=""
                    answers={answers}
                    onChange={handleInput}
                    after="was efficient"
                  />

                  <SectionTitle title="Problems" />
                  <BulletInput
                    id="34"
                    text="Difficulties with air filters caused lack of"
                    answers={answers}
                    onChange={handleInput}
                    after=""
                  />
                  <Bullet text="It was difficult to keep cabin objects secure." />
                  <Bullet text="Systems were incompatible – e.g. there were problems when" />
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">•</span>
                    <span>mixing</span>
                    <input
                      type="text"
                      value={answers["35"] || ""}
                      onChange={(e) => handleInput("35", e.target.value)}
                      className="w-32 md:w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center font-medium text-base"
                      placeholder="35"
                    />
                    <span>because of the preservatives</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-700">•</span>
                    <span>The</span>
                    <input
                      type="text"
                      value={answers["36"] || ""}
                      onChange={(e) => handleInput("36", e.target.value)}
                      className="w-32 md:w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center font-medium text-base"
                      placeholder="36"
                    />
                    <span>
                      available were not always suitable for their purpose
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-700">•</span>
                    <span>It was difficult to access the</span>
                    <input
                      type="text"
                      value={answers["37"] || ""}
                      onChange={(e) => handleInput("37", e.target.value)}
                      className="w-32 md:w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center font-medium text-base"
                      placeholder="37"
                    />
                    <span>for equipment maintenance</span>
                  </div>

                  <SectionTitle title="Suggested improvements" />
                  <Bullet text="Systems and equipment should undergo more extensive" />
                  <BulletInput
                    id="38"
                    text=""
                    answers={answers}
                    onChange={handleInput}
                    after=""
                  />
                  <Bullet text="In language training, astronauts needed practice in understanding the" />
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">•</span>
                    <span>controller’s</span>
                    <input
                      type="text"
                      value={answers["39"] || ""}
                      onChange={(e) => handleInput("39", e.target.value)}
                      className="w-32 md:w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center font-medium text-base"
                      placeholder="39"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-700">•</span>
                    <span>There should be less emphasis on</span>
                    <input
                      type="text"
                      value={answers["40"] || ""}
                      onChange={(e) => handleInput("40", e.target.value)}
                      className="w-32 md:w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center font-medium text-base"
                      placeholder="40"
                    />
                    <span>and more on other issues</span>
                  </div>
                </NotesBox>

                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={() => onComplete(answers)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-6 rounded-xl shadow-lg"
                  >
                    Finish test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// === Helper Components ===
const SectionHeader = ({ section, questions, instruction, rule }: any) => (
  <div className="text-center mb-6">
    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
      <div className="flex-1 border-t-2 border-gray-400"></div>
      <span className="font-bold">{section && `SECTION ${section}`}</span>
      <div className="flex-1 border-t-2 border-gray-400"></div>
    </div>
    <h2 className="text-xl md:text-2xl font-bold">Questions {questions}</h2>
    <p className="font-medium mt-2">{instruction}</p>
    <p className="text-sm font-medium text-gray-700 mt-1 underline">{rule}</p>
  </div>
);

const NotesBox = ({ title, children }: any) => (
  <div className="border-2 border-gray-400 rounded-lg p-5 bg-white">
    <h3 className="text-xl font-bold text-center underline mb-4">{title}</h3>
    {children}
  </div>
);

const Example = ({ text }: any) => (
  <div className="mb-5 pl-6">
    <p className="text-sm text-gray-600">
      <strong>Example</strong>
    </p>
    <p className="text-base">
      {text.split(":")[0] + ":"}{" "}
      <span className="font-bold underline">{text.split(": ")[1]}</span>
    </p>
  </div>
);

const SectionTitle = ({ title }: any) => (
  <h4 className="font-bold text-gray-800 mb-3 mt-5">{title}</h4>
);

const Bullet = ({ text }: any) => (
  <li className="flex items-start gap-3 mb-2">
    <span className="text-gray-700 mt-1">•</span>
    <span>{text}</span>
  </li>
);

const BulletInput = ({ id, text, after, answers, onChange }: any) => (
  <li className="flex items-center gap-2 flex-wrap mb-3">
    <span className="text-gray-700">•</span>
    {text && <span>{text}</span>}
    <input
      type="text"
      value={answers[id] || ""}
      onChange={(e) => onChange(id, e.target.value)}
      className="w-32 md:w-40 border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 text-center font-medium text-base"
      placeholder={id}
    />
    {after && <span>{after}</span>}
  </li>
);

const MCQ = ({ id, question, options, answers, onSelect }: any) => (
  <div className="mb-6">
    <p className="font-medium mb-2">
      <strong>{id}</strong> {question}
    </p>
    <div className="space-y-2 pl-6">
      {options.map((opt: string, i: number) => {
        const label = String.fromCharCode(65 + i);
        return (
          <label key={i} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={`q${id}`}
              checked={answers[id] === label}
              onChange={() => onSelect(id, label)}
              className="w-4 h-4 text-blue-600"
            />
            <span>
              <strong>{label}</strong> {opt}
            </span>
          </label>
        );
      })}
    </div>
  </div>
);

const MapLabel = ({ id, label, answers, onSelect }: any) => (
  <div className="flex items-center gap-3 mb-3">
    <span className="font-medium w-32">
      {id} {label}
    </span>
    <input
      type="text"
      value={answers[id] || ""}
      onChange={(e) => onSelect(id, e.target.value.toUpperCase())}
      className="w-16 border-b-2 border-gray-400 focus:border-blue-600 outline-none text-center font-bold text-lg"
      maxLength={1}
      placeholder="A-H"
    />
  </div>
);

const Matching = ({ id, name, answers, onSelect }: any) => (
  <div className="flex items-center gap-3 mb-3">
    <span className="font-medium w-32">
      {id} {name}
    </span>
    <input
      type="text"
      value={answers[id] || ""}
      onChange={(e) => onSelect(id, e.target.value.toUpperCase())}
      className="w-16 border-b-2 border-gray-400 focus:border-blue-600 outline-none text-center font-bold text-lg"
      maxLength={1}
      placeholder="A-G"
    />
  </div>
);
