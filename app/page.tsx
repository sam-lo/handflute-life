import {InformationCircleIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import * as React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "香港手笛協會 | Hong Kong Handflute Association",
  description: "香港手笛協會 - 全球唯一推廣普手笛提供及系統教學的機構，致力推廣手笛音樂文化",
  keywords: ["手笛", "笛", "音樂", "文化", "香港", "協會", "手笛協會", "音樂文化", "音樂教育", "音樂推廣", "綠色", "大自然", "handflute", "music", "culture", "hong kong", "association", "handflute association", "music culture", "flute", "music education", "music promotion", "green", "nature"],
  openGraph: {
    url: "https://handflute.life",
    type: "website",
    title: "香港手笛協會 | Hong Kong Handflute Association",
    description:
      "香港手笛協會 - 全球唯一推廣普手笛提供及系統教學的機構，致力推廣手笛音樂文化",
    images: [
      {
        url: "/public/logoWText.jpg",
        width: 4000,
        height: 4000,
        alt: "Hong Kong Handflute Association Logo With Text"
      }
    ],
  },
}

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col md:gap-4 gap-2 items-center justify-center space-y-6 md:py-24 py-10 px-10 selection:bg-amber-900/30">
        <div
          className="flex flex-col md:gap-8 gap-2 items-center text-amber-900 font-semibold text-center transition ease-in-out">
          <div className="md:text-8xl text-5xl">
            香港手笛協會
          </div>
          <div className="md:text-5xl text-2xl opacity-80">
            隨時 隨地 隨心
          </div>
          <div className="md:text-xl text-sm opacity-80 md:w-4/5">
            香港手笛協會是全球唯一推廣普手笛提供及系統教學的機構，成立於2021年 ，致力推廣手笛音樂文化，定期舉辦手笛工作坊、體驗講座、商業演出、非牟利項目等等。
          </div>
        </div>
        <div className="flex sm:gap-6 gap-2">
          <a href="/about/contact"
             className="group flex py-2 sm:px-6 px-4 gap-1 items-center bg-amber-900 text-orange-100 hover:shadow-lg hover:shadow-amber-900/80 hover:scale-[1.01] transition-all duration-300 rounded-full">
            <div className="sm:text-xl text-lg translate-x-3 group-hover:translate-x-0 transition-all duration-300">
              聯絡我們
            </div>
            <MagnifyingGlassIcon
              className="group-hover:opacity-100 opacity-0 h-6 stroke-2 transition-all duration-300"/>
          </a>
          <a href="/about"
             className="group flex py-2 sm:px-6 px-4 gap-1 items-center hover:bg-amber-900 text-amber-900 hover:text-orange-100 hover:shadow-lg hover:shadow-amber-900/80 hover:scale-[1.01] transition-all duration-200 rounded-full">
            <InformationCircleIcon
              className="h-6 stroke-2"/>
            <div className="sm:text-xl text-lg">
              瞭解更多
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
