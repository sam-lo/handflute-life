import workshop from "/public/image/ivan.jpg"
import una from "/public/image/una.jpg"
import Image from "next/image";
import * as React from "react";
import {Metadata} from "next";
import {menusItems} from "@/app/data/menuItems";
import Session from "@/components/session";

export const metadata: Metadata = {
  title: "關於我們"
}

interface SubItem {
  name: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function AboutUs() {

  return (
    <>
      <Session title="我們相信手笛是一種獨特的藝術形式" description="香港手笛協會Hong Kong Handflute Association
            成立於2021年，以各大社交媒體為平台上載關於手笛的知識以及影片，目的是推廣手笛，建立一個屬於手笛人的社群，和香港以至於世界各地的人一齊分享音樂，分享快樂。">
        <div className="flex flex-col gap-10">
          <div className="flex md:flex-row flex-col items-center md:gap-20 gap-6 text-amber-900">
            <Image src={una} alt={"手笛學生"} className="md:w-1/2 rounded-3xl shadow-2xl shadow-amber-900/80"/>
            <div className="flex flex-col gap-4">
              <div className="sm:text-5xl text-xl font-bold">
                為什麼學手笛？
              </div>
              <div className="sm:text-xl text-md">
                我們認為手笛音樂是最原始的音樂，我們不受時間、地點、空間、資源的限制，我們享受隨時隨地的靠一雙手演奏出令人歡樂的音樂，也享受自己能夠擁有這一份會令別人驚嘆的特殊技能。
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-20 gap-6 text-amber-900">
            <div className="flex flex-col gap-4">
              <div className="sm:text-5xl text-xl font-bold">
                我們的活動
              </div>
              <div className="sm:text-xl text-md">
                我們亦會定期舉辦各類型關於手笛的活動以及體驗工作坊，讓有興趣了解這一種特殊音樂的人們有機會與我們的社群交流。我們的夥伴有學生、在職人士、甚至退休人士，無論你是一個怎樣的人，我們都邀請你拿起雙手跟我們一起體驗手笛的樂趣。
              </div>
            </div>
            <Image src={workshop} alt={"手笛工作坊"} className="brightness-110 md:w-1/2 rounded-3xl shadow-2xl shadow-amber-900/80"/>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center -translate-x-2 sm:-translate-x-0 items-start gap-2 sm:gap-4 text-amber-900 selection:bg-amber-900/30">
          {menusItems.find((item) => item.id === 1)?.sub?.map((subItem: SubItem) => {
            return (
              <a key={subItem.href} href={subItem.href}
                 className="flex sm:flex-col gap-3 items-center justify-center px-6 py-3 sm:px-10 sm:py-6 rounded-full hover:bg-orange-200/50 bg-opacity-80 transition duration-300">
                {subItem.icon && <subItem.icon className="h-12"/>}
                <div className="text-3xl">
                  {subItem.name}
                </div>
              </a>
            );
          })}
        </div>
      </Session>
    </>
  )
}
