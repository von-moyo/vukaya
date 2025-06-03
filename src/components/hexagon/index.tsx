import React from "react";
import { HexBlueIcon, HexGreenIcon } from "../../assets/icons";

interface Subpage {
  label: string;
  href: string;
}

interface Service {
  hexColor: 'green' | 'blue';
}

interface HexagonProps {
  subpage: Subpage;
  service: Service;
}

export const Hexagon: React.FC<HexagonProps> = ({ subpage, service }) => {
function formatWordsToLines(text: string): string {
  const words = text.split(' ');
  const lines: string[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '&' && i > 0 && i < words.length - 1) {
      // Combine previous word, '&', and next word into one
      const combined = words[i - 1] + ' & ' + words[i + 1];
      // Remove previous line
      lines.pop();
      // Add combined line
      lines.push(combined);
      // Skip next word
      i++;
    } else {
      lines.push(words[i]);
    }
  }

  return lines.join('\n');
}


  return (
    <li key={subpage.label} className="lg:px-[clamp(4px,0.3125vw,6px)] lg:w-1/4">
      <a
        href={subpage.href}
        className={`block py-1.5 px-6 text-white lg:text-gray-700 text-base rounded-md lg:rounded-none lg:w-[118px] lg:h-[134px] lg:flex lg:items-center lg:justify-center lg:text-center relative font-avenir font-black lg:text-[clamp(10px,0.8333333333vw,16px)] leading-none lg:p-[20%] hover:bg-fh-green-light lg:hover:bg-transparent z-[9999]`}
      >
        {service.hexColor === 'green' ? (
          <img src={HexGreenIcon} alt='logo icon' className="hidden lg:block absolute inset-0 w-full h-full z-[-1] group-hover:lg:scale-110 transition-transform duration-300" />
        ) : (
          <img src={HexBlueIcon} alt='logo icon' className="hidden lg:block absolute inset-0 w-full h-full z-[-1] group-hover:lg:scale-110 transition-transform duration-300" />
        )}
        <span className="relative text-[11px] whitespace-pre-wrap leading-[1]">{formatWordsToLines(subpage.label)}</span>
      </a>
    </li>
  )

};