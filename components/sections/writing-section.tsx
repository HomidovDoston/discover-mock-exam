"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { writing_tasks } from "@/constants/writingQuestions";
import Image from "next/image";

interface WritingSectionProps {
  onComplete: any;
}

export default function WritingSection({ onComplete }: WritingSectionProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({
    writing1: "",
    writing2: "",
  });

  const [activeTask, setActiveTask] = useState("writing1");

  const getWordCount = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0).length;
  };

  const handleChange = (taskId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [taskId]: value }));
  };

  const task1Words = getWordCount(answers.writing1);
  const task2Words = getWordCount(answers.writing2);
  const task1Complete = task1Words >= writing_tasks[0].minWords;
  const task2Complete = task2Words >= writing_tasks[1].minWords;

  const handleComplete = () => {
    if (task1Complete && task2Complete) {
      onComplete(answers);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            WRITING TEST
          </h1>
          <p className="text-lg text-gray-600 mb-1">
            2 ta vazifa: <strong>150 words</strong> + <strong>250 words</strong>{" "}
            = <strong>400 words</strong>
          </p>
          <p className="text-sm text-gray-500">
            All time: <strong>60 minutes</strong>
          </p>
        </div>

        <Tabs
          value={activeTask}
          onValueChange={setActiveTask}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
            {writing_tasks.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="flex items-center gap-2 text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg cursor-pointer"
              >
                <span>{t.task}</span>
                {(t.id === "writing1" ? task1Complete : task2Complete) && (
                  <span className="text-green-400 text-lg">Checkmark</span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {writing_tasks.map((t, idx) => {
            const isActive = activeTask === t.id;
            const words = idx === 0 ? task1Words : task2Words;
            const isComplete = idx === 0 ? task1Complete : task2Complete;

            return (
              <TabsContent key={t.id} value={t.id} className="space-y-6">
                <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-bold text-blue-800">
                      {t.task}: {t.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {t.id === "writing1" && (
                      <div className="flex justify-center p-4 bg-white rounded-xl shadow-inner">
                        <Image
                          src="/writing1.jpg"
                          alt="Recycling Chart 1992-2002"
                          width={600}
                          height={400}
                          className="rounded-lg shadow-md border border-gray-300"
                        />
                      </div>
                    )}

                    <div className="flex justify-between text-xs text-blue-700 font-medium">
                      <span>
                        Minimal: <strong>{t.minWords} so'z</strong>
                      </span>
                      <span>
                        Vaqt: <strong>{t.time}</strong>
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Writing Area */}
                <Card className="border-2 border-gray-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Your answer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Bu yerga yozing..."
                      value={answers[t.id] || ""}
                      onChange={(e) => handleChange(t.id, e.target.value)}
                      className="min-h-80 font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500"
                    />

                    <div
                      className={`p-4 rounded-xl border-2 transition-all ${
                        isComplete
                          ? "bg-green-50 border-green-300 shadow-sm"
                          : "bg-yellow-50 border-yellow-300"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-bold text-lg">
                          Word count:{" "}
                          <span
                            className={
                              isComplete ? "text-green-600" : "text-yellow-600"
                            }
                          >
                            {words}
                          </span>
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            isComplete ? "text-green-600" : "text-yellow-600"
                          }`}
                        >
                          {isComplete
                            ? "To'ldirildi"
                            : `${t.minWords - words} so'z kam`}
                        </p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isComplete ? "bg-green-500" : "bg-yellow-500"
                          }`}
                          style={{
                            width: `${Math.min(
                              (words / t.minWords) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        <Card className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-600">Task 1</p>
                <p className="text-3xl font-bold text-blue-700">{task1Words}</p>
                <p className="text-xs text-gray-500">
                  / {writing_tasks[0].minWords} word
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Task 2</p>
                <p className="text-3xl font-bold text-purple-700">
                  {task2Words}
                </p>
                <p className="text-xs text-gray-500">
                  / {writing_tasks[1].minWords} word
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="mt-8">
          <Button
            onClick={handleComplete}
            size="lg"
            disabled={!task1Complete || !task2Complete}
            className="w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {task1Complete && task2Complete ? "Test Completion" : "Fill All"}
          </Button>
        </div>
      </div>
    </div>
  );
}
