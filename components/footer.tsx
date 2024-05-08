"use client"
import {
  BuildingLibraryIcon,
  CubeIcon,
  InformationCircleIcon,
  UserGroupIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
import {Disclosure, Transition} from "@headlessui/react";

export default function Footer() {
  return (
    <>
      <div className="hidden md:flex flex-col gap-8 mb-2 mt-16 mx-16 selection:bg-amber-900/30">
        <div className="flex flex-wrap justify-center gap-16">
          <AboutUsSession/>
          <ServiceSession/>
          <GallerySession/>
          <CollaborationsSession/>
        </div>
        <div className="text-amber-900 text-sm">
          © 2024 OMORI STUDIO. All rights reserved.
        </div>
      </div>
      <MobileAccordion/>
    </>
  )
}

function ServiceSession() {
  return (
    <div className="flex flex-col space-y-2 text-amber-900">
      <a href="/construction"
         className="flex items-center space-x-2 text-xl text-amber-900 font-medium mb-2 -translate-x-2">
        <CubeIcon className="h-6"/>
        <div>
          我們的工作
        </div>
      </a>
      <a href="/construction">
        手笛工作坊
      </a>
      <a href="/construction">
        體驗講座
      </a>
      <a href="/construction">
        商業演出
      </a>
      <a href="/construction">
        非牟利項目
      </a>
    </div>
  )
}

function GallerySession() {
  return (
    <div className="flex flex-col space-y-2 text-amber-900">
      <a href="/construction"
         className="flex items-center space-x-2 text-xl text-amber-900 font-medium mb-2 -translate-x-2">
        <BuildingLibraryIcon className="h-6"/>
        <div>
          過往項目
        </div>
      </a>
      <a href="/construction">
        手笛工作坊
      </a>
      <a href="/construction">
        體驗講座
      </a>
      <a href="/construction">
        商業演出
      </a>
      <a href="/construction">
        非牟利項目
      </a>
    </div>
  )
}

function AboutUsSession() {
  return (
    <div className="flex flex-col space-y-2 text-amber-900">
      <a href="/about" className="flex items-center space-x-2 text-xl text-amber-900 font-medium mb-2 -translate-x-2">
        <InformationCircleIcon className="h-6"/>
        <div>
          關於我們
        </div>
      </a>
      <a href="/construction">
        資源下載
      </a>
      <a href="/construction">
        聯絡我們
      </a>
      <a href="/construction">
        最新資訊
      </a>
      <a href="/about/contact">
        加入我們
      </a>
    </div>
  )
}


function CollaborationsSession() {
  return (
    <div className="flex flex-col space-y-2 text-amber-900">
      <a href="/construction"
         className="flex items-center space-x-2 text-xl text-amber-900 font-medium mb-2 -translate-x-2">
        <UserGroupIcon className="h-6"/>
        <div>
          合作夥伴
        </div>
      </a>
      <a href="/construction">
        我們的合作夥伴
      </a>
      <a href="/construction">
        以往項目評價
      </a>
      <a href="/construction">
        成為合作夥伴
      </a>
      <a href="/construction">
        與我們合作
      </a>
    </div>
  )
}

function MobileAccordion() {
  return (
    <div className="w-full px-4 pb-8 block md:hidden">
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-amber-900 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>我們的工作</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : 'rotate-360 transform'
                } h-5 w-5 text-amber-900 transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-700 ease-in-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-2 text-sm text-amber-900/80">
                <div className="flex flex-col space-y-3">
                  <a href="/construction">
                    手笛工作坊
                  </a>
                  <a href="/construction">
                    體驗講座
                  </a>
                  <a href="/construction">
                    商業演出
                  </a>
                  <a href="/construction">
                    非牟利項目
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-amber-900 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>過往項目</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : 'rotate-360 transform'
                } h-5 w-5 text-amber-900 transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-700 ease-in-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-2 text-sm text-amber-900">
                <div className="flex flex-col space-y-3">
                  <a href="/construction">
                    手笛工作坊
                  </a>
                  <a href="/construction">
                    體驗講座
                  </a>
                  <a href="/construction">
                    商業演出
                  </a>
                  <a href="/construction">
                    非牟利項目
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-amber-900 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>關於我們</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : 'rotate-360 transform'
                } h-5 w-5 text-amber-900 transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-700 ease-in-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-2 text-sm text-amber-900">
                <div className="flex flex-col space-y-3">
                  <a href="/construction">
                    資源下載
                  </a>
                  <a href="/construction">
                    聯絡我們
                  </a>
                  <a href="/construction">
                    最新資訊
                  </a>
                  <a href="/construction">
                    加入我們
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button
              className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-amber-900 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
              <span>合作夥伴</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : 'rotate-360 transform'
                } h-5 w-5 text-amber-900 transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-700 ease-in-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 py-2 text-sm text-amber-900">
                <div className="flex flex-col space-y-3">
                  <a href="/construction">
                    我們的合作夥伴
                  </a>
                  <a href="/construction">
                    以往項目評價
                  </a>
                  <a href="/construction">
                    如何成為夥伴
                  </a>
                  <a href="/construction">
                    與我們合作
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}