import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../context/QuizContext";

/* =========================
   NORMALISE SCORE (0–100)
========================= */
const clamp = (val) => Math.max(0, Math.min(100, val));

/* =========================
   ARCHETYPE RULE ENGINE
========================= */
const getArchetype = (scores, eventType) => {
  const E = clamp(scores.E);
  const M = clamp(scores.M);
  const G = clamp(scores.G);
  const L = clamp(scores.L);
  const N = clamp(scores.N);

  // 1️⃣ Ibiza Afterglow
  if (G >= 65 && E >= 60 && M >= 50) {
    return {
      key: "IBIZA_AFTERGLOW",
      title: "Ibiza Afterglow Set",
      keywords: "house, vocal, piano, sunset → peak",
    };
  }

  // 2️⃣ Champagne Sunset
  if (E <= 40 && L >= 55 && M >= 35 && M <= 70) {
    return {
      key: "CHAMPAGNE_SUNSET",
      title: "Champagne Sunset Mix",
      keywords: "nu-disco, French touch, silky pop, sax-friendly",
    };
  }

  // 3️⃣ Golden Nostalgia
  if (N >= 60 && E >= 45) {
    return {
      key: "GOLDEN_NOSTALGIA",
      title: "Golden Nostalgia Floorfillers",
      keywords: "70s–00s bangers, singalongs, family dancefloor",
    };
  }

  // 4️⃣ Modern Luxe Party
  if (M >= 65 && E >= 45 && E <= 80) {
    return {
      key: "MODERN_LUXE",
      title: "Modern Luxe Party Set",
      keywords: "contemporary pop/dance, sleek edits, chart remixes",
    };
  }

  // 5️⃣ Indie Disco
  if (G <= 30 && N >= 35) {
    return {
      key: "INDIE_DISCO",
      title: "Indie Disco Lights",
      keywords: "indie dance, blog-era anthems, feel-good guitars",
    };
  }

  // 6️⃣ Classic Chic Reception
  if (E <= 30 && N >= 35 && N <= 70) {
    return {
      key: "CLASSIC_CHIC",
      title: "Classic Chic Reception",
      keywords: "Motown, soul, tasteful classics, cocktail-hour toe-taps",
    };
  }

  /* =========================
     FALLBACK (highest signal)
  ========================= */
  const maxScore = Math.max(E, M, G, L, N);

  if (maxScore === N) return { key: "GOLDEN_NOSTALGIA", title: "Golden Nostalgia Floorfillers" };
  if (maxScore === M) return { key: "MODERN_LUXE", title: "Modern Luxe Party Set" };
  if (maxScore === G) return { key: "IBIZA_AFTERGLOW", title: "Ibiza Afterglow Set" };
  if (maxScore === L) return { key: "CHAMPAGNE_SUNSET", title: "Champagne Sunset Mix" };

  return { key: "CLASSIC_CHIC", title: "Classic Chic Reception" };
};

export default function Step10_Final() {
  const navigate = useNavigate();
  const { scores, answers } = useQuiz();

  /* =========================
     CALCULATE ARCHETYPE
  ========================= */
  const archetype = useMemo(
    () => getArchetype(scores, answers.eventType),
    [scores, answers.eventType]
  );

  /* =========================
     (OPTIONAL) AUTO REDIRECT
     later to playlist page
  ========================= */
  useEffect(() => {
    // console.log("FINAL ARCHETYPE:", archetype);
  }, [archetype]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 text-center">
      <h2 className="text-2xl font-semibold">
        Your vibe is ready ✨
      </h2>

      <p className="text-gray-500">
        Based on your answers, your night feels like:
      </p>

      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h3 className="text-xl font-semibold">
          {archetype.title}
        </h3>
        {archetype.keywords && (
          <p className="text-sm mt-2 opacity-90">
            {archetype.keywords}
          </p>
        )}
      </div>

      <button
        onClick={() => navigate("/playlist")}
        className="mt-6 px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      >
        Reveal My Playlist →
      </button>
    </div>
  );
}
