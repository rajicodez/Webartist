import type { Metadata } from "next";
import RecordingCanvas from "../../components/RecordingCanvas";

export const metadata: Metadata = {
  title: "Portrait recording preview",
  robots: { index: false, follow: false },
};

export default function RecordingPage() {
  return <RecordingCanvas />;
}
