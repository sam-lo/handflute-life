import perform from "/public/perform.jpg"
import workshop from "/public/workshop.jpg"
import nonprofit from "/public/nonprofit.jpg"
import talk from "/public/talk.jpg"
import Image from "next/image";
import {StaticImageData} from "next/image";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function AboutUs() {

  const types = [
    {
      title: "商業演出",
      description: "我們接受商業演出的邀請，幫客戶量身打造最適合的演出內容，為不同的活動帶來獨特的音樂表演，務求為觀眾帶來難忘的音樂體驗。",
      image: perform,
      alt: "商業演出"
    },
    {
      title: "手笛工作坊",
      description: "我們定期舉辦手笛工作坊，為有興趣學習手笛的人提供體驗機會。參與者可以初步了解手笛的玩法和音樂特性，感受手笛獨特的魅力。",
      image: workshop,
      alt: "手笛工作坊"
    },
    {
      title: "非牟利項目",
      description: "我們積極與各類機構合作，舉辦一系列非營利性質的手笛推廣項目。希望能向更多對手笛感興趣的人群介紹這一富有特色的音樂文化。",
      image: nonprofit,
      alt: "非牟利項目"
    },
    {
      title: "體驗講座",
      description: "我們定期舉辦手笛體驗講座，讓更多有興趣的人士參加。在這些講座上大家可以互相交流，了解手笛的歷史和演奏方法，並親身試玩。",
      image: talk,
      alt: "體驗講座"
    }]

  return (
    <>
      <div
        className="flex flex-col items-center justify-center sm:gap-20 gap-10 sm:p-24 p-10 selection:bg-amber-900/30">
        <div className="flex flex-col justify-center text-center text-amber-900 items-center gap-4 sm:gap-6">
          <div className="sm:text-5xl text-3xl font-bold">
            手笛推廣是一項持續的工作
          </div>
          <div className="sm:text-xl text-md sm:w-4/5 xl:w-3/5 2xl:w-2/5">
            香港手笛協會Hong Kong Handflute Association
            自從2021年起於香港本地推廣手笛音樂文化，以非牟利形式與不同機構合作，舉辦手笛工作坊、體驗講座、商業演出、非牟利項目等等。希望令更多人認識手笛，這個獨特的音樂形式。
          </div>
        </div>
        <div className="grid justify-center items-center 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10">
          {types.map((type) => (
            <EventCard key={type.title} title={type.title} description={type.description} image={type.image} alt={type.alt}/>
          ))}
        </div>
      </div>
    </>
  )
}

function EventCard(props: { title: string, description: string, image: StaticImageData, alt: string }) {
  return (
    <div className="bg-amber-50 overflow-hidden rounded-3xl shadow-2xl group relative hover:scale-[1.01] transition duration-1000">
      <Image src={props.image} alt={props.alt} className="group-hover:scale-105 transition ease-in-out duration-1000"/>
      <ArrowRightIcon className="absolute stroke-amber-50 top-4 right-4 h-8 transition group-hover:-rotate-45 duration-300"/>
      <div className="bg-amber-50 flex flex-col gap-2 px-6 pt-6 pb-2 -translate-y-6 rounded-t-3xl items-center text-center">
        <div className="text-3xl text-amber-900 font-bold">
          {props.title}
        </div>
        <div className="text-md text-amber-900 font-bold">
          {props.description}
        </div>
      </div>
    </div>
  )
}