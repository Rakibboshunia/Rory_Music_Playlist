import { useState } from "react";
import { useQuiz } from "../../context/QuizContext";

export default function PlaylistResult() {
  const { answers } = useQuiz();
  const [openId, setOpenId] = useState(null);

  const demoTracks = [
    {
      id: 1,
      title: "At Last",
      artist: "Etta James",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Wonderful Tonight",
      artist: "Eric Clapton",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      audio:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-32 px-6">
      <h1 className="text-3xl font-bold mb-2">
        Classic Romance Collection
      </h1>

      <p className="text-gray-500 mb-8">
        {answers.eventType}
        {answers.musicImportance && ` · ${answers.musicImportance}`}
        {answers.genres?.length > 0 && ` · ${answers.genres.join(", ")}`}
      </p>
      
      {/* PLAYLIST ACCORDION */}
      <div className="bg-white rounded-2xl shadow divide-y">
        {demoTracks.map((track) => {
          const open = openId === track.id;

          return (
            <div key={track.id} className="p-4">
              <button
                onClick={() =>
                  setOpenId(open ? null : track.id)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <div>
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-gray-500">
                    {track.artist}
                  </p>
                </div>

                <span className="text-xl">
                  {open ? "−" : "+"}
                </span>
              </button>

              {open && (
                <div className="mt-4">
                  <audio controls className="w-full">
                    <source src={track.audio} type="audio/mpeg" />
                  </audio>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* UPGRADE CTA */}
      <div className="mt-10 text-center">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Upgrade to Unlock Full Playlist
        </button>
      </div>
    </div>
  );
}
