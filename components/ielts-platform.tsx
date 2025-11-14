"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ListeningSection from "./sections/listening-section";
import ReadingSection from "./sections/reading-section";
import WritingSection from "./sections/writing-section";
import ResultsPage from "./results-page";

interface IELTSPlatformProps {
  userName: string;
}

type Section = "start" | "listening" | "reading" | "writing" | "results";

export default function IELTSPlatform({ userName }: IELTSPlatformProps) {
  const [currentSection, setCurrentSection] = useState<Section>("start");
  const [listeningAnswers, setListeningAnswers] = useState<
    Record<string, string>
  >({});
  const [readingAnswers, setReadingAnswers] = useState<string>("");
  const [writingAnswers, setWritingAnswers] = useState<string>("");

  const onLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userFullName");
      window.location.reload();
    }
  };

  const handleStart = () => {
    setCurrentSection("listening");
  };

  const handleListeningComplete = (answers: Record<string, string>) => {
    setListeningAnswers(answers);
    setCurrentSection("reading");
  };

  const handleReadingComplete = (answers: string) => {
    setReadingAnswers(answers);
    setCurrentSection("writing");
  };

  const handleWritingComplete = (answers: string) => {
    setWritingAnswers(answers);
    setCurrentSection("results");
  };

  const handleExportJSON = () => {
    return {
      userName,
      timestamp: new Date().toISOString(),
      answers: {
        listeningAnswers,
        readingAnswers,
        writingAnswers,
      },
    };
  };

  if (currentSection === "start") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold text-foreground">
              IELTS Test Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Hello, {userName}! 👋
            </p>
            <p className="text-muted-foreground">
              This mock test includes Listening, Reading, and Writing sections.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Test Structure</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Listening</h3>
                  <p className="text-sm text-muted-foreground">
                    Listen to the audio and choose the answer to the questions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Reading</h3>
                  <p className="text-sm text-muted-foreground">
                    Reading the text and writing answers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Writing</h3>
                  <p className="text-sm text-muted-foreground">
                    Write a minimum of 150 words
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleStart}
              className="text-base px-8 cursor-pointer"
            >
              Start the Test
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onLogout}
              className="cursor-pointer"
            >
              Exit
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === "listening") {
    return <ListeningSection onComplete={handleListeningComplete} />;
  }

  if (currentSection === "reading") {
    return <ReadingSection onComplete={handleReadingComplete} />;
  }

  if (currentSection === "writing") {
    return <WritingSection onComplete={handleWritingComplete} />;
  }

  if (currentSection === "results") {
    return <ResultsPage testData={handleExportJSON()} userName={userName} />;
  }
}
