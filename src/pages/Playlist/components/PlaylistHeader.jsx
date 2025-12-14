import { useQuiz } from "../../../context/QuizContext";

export default function PlaylistHeader() {
  const { answers } = useQuiz();

  return (
    <section className="text-center px-4">
      <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        🎵 Playlist for {answers.eventType || "your event"}
      </span>

      <h1 className="mt-4 text-4xl font-bold">
        {answers.eventType || "Classic Romance Collection"}
      </h1>

      <p className="mt-2 text-gray-500">
        Selected genres:{" "}
        {answers.genres?.length ? answers.genres.join(", ") : "Mixed vibes"}
      </p>
    </section>
  );
}
