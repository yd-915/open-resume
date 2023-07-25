import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Iftiin-Resume - Simple & Powerful Resume Builder and Parser",
  description:
    "Iftiin-Resume is THE resume builder that allows you to compose a modern professional resume in 3 simple steps. For those who have an existing resume, Iftiin-Resume also provides a built-in resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
