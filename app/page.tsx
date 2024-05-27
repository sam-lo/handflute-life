"use client"
import {InformationCircleIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import group from "@/public/image/group.jpg"

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap p-10 md:p-14 py-10 md:gap-20 gap-10 justify-center">
        <div
          className="flex flex-col md:gap-4 gap-2 md:items-start items-center justify-center selection:bg-amber-900/30">
          <div className="flex flex-col md:gap-8 gap-2 text-amber-900 font-semibold text-center md:text-start">
            <div className="md:text-8xl text-5xl">
              香港手笛協會
            </div>
            <div className="md:text-5xl text-2xl opacity-80">
              隨時 隨地 隨心
            </div>
            <div className="md:text-xl text-sm opacity-80 md:max-w-xl">
              香港手笛協會是全球唯一推廣普及手笛並提供系統式教學的機構，成立於2021年
              ，致力推廣手笛音樂文化，定期舉辦手笛工作坊、體驗講座、商業演出、非牟利機構等。
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
        <Image src={group} alt={"香港手笛協會"} className="xl:w-1/2 rounded-3xl shadow-2xl shadow-amber-900/80"/>
      </div>
    </>
  );
}