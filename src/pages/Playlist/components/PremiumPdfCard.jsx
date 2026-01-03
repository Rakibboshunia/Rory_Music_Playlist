import { Download } from "lucide-react";

export default function PremiumPdfCard() {
  return (
    <a
      href="/pdfs/Entertainment-Guide.pdf"
      download
      className="
        flex items-center justify-between
        px-4 py-3 mt-4 mb-6
        rounded-xl
        border border-[#9810FA]
        bg-white
        hover:bg-[#F7F8FF]
        transition
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EEF0FF]">
          📄
        </div>

        <p className="text-sm font-medium text-gray-800 ">
          Download Wedding Guide PDF
        </p>
      </div>

      <Download className="text-[#155DFC] cursor-pointer" size={18} />
    </a>
  );
}
