import TrackItem from "./TrackItem";
import Accordion from "./Accordion";


export default function PlaylistCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">

      {/* TOP */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">Electric Party Mix</h3>
          <p className="text-sm text-gray-500">
            Upbeat party anthems to ignite the dance floor.
          </p>
        </div>

        <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">
          Create Playlist
        </button>
      </div>

      {/* COVER */}
      <div className="mt-6 h-56 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-6xl">
        🎵
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 text-center mt-6 border-y py-4">
        <div>
          <p className="font-semibold">30</p>
          <p className="text-xs text-gray-500">Tracks</p>
        </div>
        <div>
          <p className="font-semibold">1h</p>
          <p className="text-xs text-gray-500">Duration</p>
        </div>
        <div>
          <p className="font-semibold">100%</p>
          <p className="text-xs text-gray-500">Match</p>
        </div>
      </div>

      {/* TRACK LIST */}
      <div className="mt-6 space-y-4">
        <TrackItem title="At Last" artist="Etta James" />
        <TrackItem title="Can't Help Falling in Love" artist="Elvis Presley" />
        <TrackItem title="Wonderful Tonight" artist="Eric Clapton" />
      </div>

      {/* ACCORDION PLACEHOLDER */}

      <div className="mt-6 space-y-3">
        <Accordion title="Golden Dance Night" />
        <Accordion title="Romantic Sax Vibes" />
        <Accordion title="Your Playlist" />
      </div>

    </div>
  );
}
