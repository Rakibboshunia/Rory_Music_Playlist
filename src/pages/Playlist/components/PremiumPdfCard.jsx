import { Download } from "lucide-react";
import pdfFile from "../../../assets/PDF/Entertainment Guide PDF.pdf";

export default function PremiumPdfCard() {
  return (
    <a
      href={pdfFile}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-between
        px-4 py-3 mt-4
        rounded-xl
        border border-[#9810FA]
        bg-white
        hover:bg-[#F7F8FF]
        transition
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg text-xl bg-[#EEF0FF]">
          📄
        </div>

        <p className="text-sm font-medium text-gray-800">
          Download Wedding Entertainment Guide (PDF)
        </p>
      </div>

      <Download className="border-[#9810FA] text-[#155DFC] border rounded scale-125" size={28} />
    </a>
  );
}
