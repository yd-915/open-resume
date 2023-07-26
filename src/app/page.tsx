import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot bg-black-600 px-8 pb-32 text-black-900 lg:px-12">
      <Hero />
      <Steps />
      <Features />
      <QuestionsAndAnswers />
    </main>
  );
}
