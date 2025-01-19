"use client"
import {CursorArrowRaysIcon, InformationCircleIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import group from "@/public/image/group.jpg"
import workshop from "/public/image/workshop.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-10 gap-20">
        <div className="flex flex-wrap md:p-14 md:gap-20 gap-10 justify-center">
          <div
            className="flex flex-col md:gap-4 gap-2 md:items-start items-center justify-center selection:bg-amber-900/30">
            <div className="flex flex-col md:gap-8 gap-2 text-amber-900 font-semibold text-center md:text-start">
              <div className="md:text-8xl text-5xl">
                香港手笛協會
              </div>
              <div className="md:text-5xl text-2xl opacity-80">
                隨時 隨地 隨心
              </div>
              <div className="md:text-xl text-sm opacity-80 max-w-md md:max-w-xl">
                香港手笛協會是全球唯一推廣普及手笛並提供系統式教學的機構，成立於2021年
                ，致力推廣手笛音樂文化，定期舉辦手笛工作坊、體驗講座、商業演出、非牟利機構等。
              </div>
            </div>
            <div className="flex sm:gap-6 mt-3 gap-2">
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
          <Image src={group} alt={"香港手笛協會"}
                 className="md:w-1/2 brightness-110 rounded-3xl shadow-2xl shadow-amber-900/80"/>
        </div>
        <div className="flex flex-wrap-reverse md:p-14 md:gap-20 gap-10 justify-center">
          <Image src={workshop} alt={"香港手笛協會"}
                 className="md:w-1/2 brightness-110 rounded-3xl shadow-2xl shadow-amber-900/80"/>
          <div className="flex flex-col  items-center md:items-end md:gap-8 gap-2 text-amber-900 font-semibold text-center md:text-end">
            <div className="md:text-7xl text-5xl">
              參加手笛工作坊
            </div>
            <div className="md:text-5xl text-2xl opacity-80">
              從零開始認識手笛
            </div>
            <div className="md:text-xl text-sm opacity-80 max-w-md md:max-w-xl">
              香港手笛協會每月均會舉辦手笛工作坊，有興趣的人士可以從工作坊認識手笛，並且學習基本的演奏技巧，歡迎各位參加。
            </div>
            <a href="https://wa.me/85247079394?text=想查詢有關手笛工作坊報名事宜" className="group flex mt-3 w-fit gap-2 items-center transition-all duration-300 hover:shadow-lg hover:shadow-amber-900 hover:bg-amber-900 border border-amber-900 text-xl md:text-3xl rounded-[24px] md:py-3 md:hover:-translate-y-1 md:px-5 px-4 py-2">
              <CursorArrowRaysIcon className="w-6 md:w-10 group-hover:text-white transition-all duration-300"/>
              <div className="group-hover:text-white transition-all duration-300">
                立即報名
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}