import React from "react";
import Session from "@/components/session";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "常見問題"
}

export default function Question() {
  return (
    <>
      <Session title="關於手笛的常見問題" description="">
        {""}
      </Session>
    </>
  )
}