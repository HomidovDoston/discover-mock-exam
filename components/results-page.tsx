// ./app/results/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Send, ArrowRight } from "lucide-react";
import { send_to_bot } from "@/services/bot";

interface TestData {
  userName: string;
  timestamp: string;
  sections: Record<string, any>;
}

interface ResultsPageProps {
  testData: any;
  userName: string;
}

export default function ResultsPage({ testData, userName }: ResultsPageProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(true);

  useEffect(() => {
    const sendData = async () => {
      try {
        await send_to_bot(testData);
        setSent(true);
      } catch (err) {
        console.error("Error sending to bot:", err);
      } finally {
        setSending(false);
      }
    };
    sendData();
  }, [testData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* SUCCESS CARD */}
        <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl">
          <CardContent className="pt-8 pb-10 text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Test Completed!
            </h1>

            {/* User Greeting */}
            <p className="text-lg text-gray-600">
              Hello, <strong className="text-blue-700">{userName}</strong>!
            </p>

            {/* Bot Status */}
            <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
              {sending ? (
                <>
                  <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : sent ? (
                <>
                  <Send className="w-5 h-5" />
                  <span>Successfully sent to the bot!</span>
                </>
              ) : (
                <span>An error occurred.</span>
              )}
            </div>

            {/* Final Button */}
            <Button
              onClick={() => (window.location.href = "/")}
              className="w-full h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              Return to homepage
              <ArrowRight className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
