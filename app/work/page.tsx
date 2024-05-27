"use client"
import React, { useState } from "react";
import perform from "@/public/image/perform.jpg";
import workshop from "@/public/image/workshop.jpg";
import nonprofit from "@/public/image/nonprofit.jpg";
import talk from "@/public/image/talk.jpg";
import course from "@/public/image/course.jpg";
import Session from "@/components/session";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

export default function Work() {

  const [isOpen, setIsOpen] = useState(false);

  const [key, setKey] = useState(0);

  const handleClick = (id: number) => {
    setKey(id);
    setIsOpen(false)
  }

  const types = [
    {
      id: 1,
      title: "商業演出",
      description: "我們接受商業演出的邀請，幫客戶量身打造最適合的演出內容，為不同的活動帶來獨特的音樂表演，務求為觀眾帶來難忘的音樂體驗。",
      image: perform,
      alt: "商業演出"
    },
    {
      id: 2,
      title: "手笛工作坊",
      description: "我們定期舉辦手笛工作坊，為有興趣學習手笛的人提供體驗機會。參與者可以初步了解手笛的玩法和音樂特性，感受手笛獨特的魅力。",
      image: workshop,
      alt: "手笛工作坊"
    },
    {
      id: 3,
      title: "非牟利項目",
      description: "我們積極與各類機構合作，舉辦一系列非營利性質的手笛推廣項目。希望能向更多對手笛感興趣的人群介紹這一富有特色的音樂文化。",
      image: nonprofit,
      alt: "非牟利項目"
    },
    {
      id: 4,
      title: "體驗講座",
      description: "我們定期舉辦手笛體驗講座，讓更多有興趣的人士參加。在這些講座上大家可以互相交流，了解手笛的歷史和演奏方法，並親身試玩。",
      image: talk,
      alt: "體驗講座"
    },
    {
      id: 5,
      title: "常規課程",
      description: "我們會定期舉辦課程教授手笛技巧，涵蓋轉音、吹奏等技巧。課程由淺入深發掘手笛演奏的各種可能性，適合各個程度的手笛愛好者。",
      image: course,
      alt: "常規課程"
    }
  ]

  return (
    <>
      <Session title="手笛推廣是持續的工作"
               description="香港手笛協會Hong Kong Handflute Association 自從2021年起於香港本地推廣手笛音樂文化，以非牟利形式與不同機構合作，舉辦手笛工作坊、體驗講座、商業演出、非牟利項目等等。希望令更多人認識手笛，這個獨特的音樂形式。">
        <div className="flex justify-evenly flex-wrap gap-10">
          {types.map((type) => (
            <button key={type.id} onClick={() => handleClick(type.id)}
                    className="sm:w-96 bg-amber-50 overflow-hidden rounded-3xl shadow-2xl group relative hover:scale-[1.01] transition duration-1000">
              <Image src={type.image} alt={type.alt}
                     className="aspect-[3/2] group-hover:scale-105 transition ease-in-out duration-1000"/>
              <ArrowRightIcon
                className="absolute stroke-amber-50 top-4 right-4 h-8 transition group-hover:-rotate-45 duration-300"/>
              <div
                className="bg-amber-50 flex flex-col sm:gap-4 gap-2 px-4 sm:px-6 pt-6 sm:pb-2 -translate-y-6 rounded-t-3xl items-center text-center">
                <div className="sm:text-3xl text-xl text-amber-900 font-bold">
                  {type.title}
                </div>
                <div className="text-sm sm:text-md text-amber-900 font-bold">
                  {type.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </Session>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(true)}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-xl rounded-3xl bg-amber-900/20 backdrop-blur-2xl p-6">
                  <DialogTitle as="div" className="text-2xl font-medium text-white">
                    {types.find((type) => type.id === key)?.title}
                  </DialogTitle>
                  <p className="mt-8 text-lg text-white">
                    {types.find((type) => type.id === key)?.description}
                  </p>
                  <div className="mt-4">
                    <button
                      className="inline-flex items-center gap-2 rounded-xl bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={() => setIsOpen(false)}
                    >
                      退出
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}