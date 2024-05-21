"use client"
import perform from "/public/perform.jpg"
import workshop from "/public/workshop.jpg"
import nonprofit from "/public/nonprofit.jpg"
import talk from "/public/talk.jpg"
import Image from "next/image";
import {StaticImageData} from "next/image";
import {ArrowRightIcon, XCircleIcon} from "@heroicons/react/24/outline";
import React, {ReactNode, useState, SetStateAction, Dispatch} from "react";
import useMeasure from "react-use-measure";
import {useDragControls, useMotionValue, useAnimate, motion} from "framer-motion";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export default function Work() {

  const [open, setOpen] = useState(false);

  const [key, setKey] = useState(0);

  const handleClick = (id: number) => {
    /*setOpen(true);*/
    setKey(id);
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
    }]

  return (
    <>
      <div
        className="flex flex-col items-center justify-center sm:gap-20 gap-10 sm:p-24 p-10 selection:bg-amber-900/30 transition duration-300">
        <div className="flex flex-col justify-center text-center text-amber-900 items-center gap-4 sm:gap-6">
          <div className="sm:text-5xl text-3xl font-bold">
            手笛推廣是持續的工作
          </div>
          <div className="sm:text-xl text-md sm:w-4/5 xl:w-3/5 2xl:w-2/5">
            香港手笛協會Hong Kong Handflute Association
            自從2021年起於香港本地推廣手笛音樂文化，以非牟利形式與不同機構合作，舉辦手笛工作坊、體驗講座、商業演出、非牟利項目等等。希望令更多人認識手笛，這個獨特的音樂形式。
          </div>
        </div>
        <div className="grid justify-center items-center 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10">
          {types.map((type) => (
            <button key={type.id} onClick={() => handleClick(type.id)}
                    className="bg-amber-50 overflow-hidden rounded-3xl shadow-2xl group relative hover:scale-[1.01] transition duration-1000">
              <Image src={type.image} alt={type.alt}
                     className="group-hover:scale-105 transition ease-in-out duration-1000"/>
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
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto sm:px-0 px-12 max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-4xl font-bold text-neutral-200">
              {key == 1 ? "商業演出" : key == 2 ? "手笛工作坊" : key == 3 ? "非牟利項目" : key == 4 ? "體驗講座" : ""}
            </h2>
            <p>
              For More Information Contact us
            </p>
          </div>
        </DragCloseDrawer>
      </div>
    </>
  )
}

const DragCloseDrawer = ({open, setOpen, children}: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, {height}] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{y: "100%"}}
            animate={{y: "0%"}}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute sm:mx-16 bottom-0 inset-x-0 h-[80vh] sm:h-[90vh] overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{y}}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute right-0 top-0 z-10 flex justify-end bg-neutral-900 pr-4 pt-4">
              <button onClick={handleClose}>
                <XCircleIcon className="w-10 sm:w-14 stroke-neutral-700"/>
              </button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};