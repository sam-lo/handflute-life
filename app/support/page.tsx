"use client"
import React, {Suspense, useState} from "react";
import Session from "@/components/session";
import {useSearchParams} from "next/navigation";

export default function Question() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <QuestionPage/>
      </Suspense>
  )
}

function QuestionPage() {

  const searchParams = useSearchParams();

  const id = searchParams?.get('id');

  console.log('Clicked sub-link:', id)

  const [open, setOpen] = useState([1, 2, 3].includes(Number(id)) ? Number(id) : 1);

  const questions = [
    {
      id: 1,
      title: "手笛是甚麼樂器？",
      description: "手笛是用雙手作為笛的吹奏樂器。簡單而言，手笛發聲原理與陶笛相近，先將雙手合上並在掌心預留空間，形成共鳴箱。用嘴往共鳴箱內吹氣，令空氣在內轉動，從而發出聲音。至於如何改變音高以至演奏歌曲，基本原理是通過改變雙手之間共鳴箱的大小，從而改變音高。共鳴箱空間越大，音高越低。相反，空間越小，音高越高。"
    },
    {
      id: 2,
      title: "手笛難學嗎？",
      description: "要吹響手笛並不困難。總括以往體驗工作坊的經驗，只要按照我們的方法練習，大概有六成的參與者能在半小時內成功吹響手笛。其餘有部分人經過反覆練習，能在一至兩星期內成功吹響。"
    },
    {
      id: 3,
      title: "甚麼人適合學習手笛？",
      description: "原則上學習手笛並沒有年齡限制，只要雙手能形成足夠大小的共鳴箱，則有機會吹響手笛。所以我們會建議小朋友大概7歲開始，待雙手發育並能形成足夠空間，便可以學習手笛。",
    }
  ]

  return (
    <>
      <Session title="常見問題" description="讓我們解答你的疑問">
        <div className="flex flex-col gap-5 text-amber-900">
          {questions.map((question) => (
            <button onClick={() => setOpen(question.id)} key={question.id}
                    className="flex flex-col backdrop-blur-sm max-w-3xl gap-4 sm:gap-6 sm:p-8 p-6 outline outline-2 outline-amber-900 rounded-3xl hover:scale-[1.02] transition duration-500">
              <div className="sm:text-3xl text-xl font-bold text-start">
                {question.title}
              </div>
              <div
                className={"sm:text-lg text-sm text-start transition duration-300 " + (open == question.id ? "" : "hidden")}>
                {question.description}
              </div>
            </button>
          ))}
        </div>
      </Session>
    </>
  )
}