"use client"
import * as React from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  HomeIcon,
  Bars3Icon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import {Popover, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {menusItems} from "@/app/data/menuItems";

export default function Header() {

  const actionItem = [
    {name: "註冊", href: "/session", icon: UserPlusIcon},
    {name: "登入", href: "/session", icon: ArrowLeftEndOnRectangleIcon}
  ]

  return (
    <>
      <div className="relative flex text-sm items-center justify-between my-3 lg:my-6 px-4 lg:px-12 selection:bg-amber-900/30">
        <a
          href="/"
          className="flex items-center space-x-2 hover:bg-amber-900/80 text-amber-900 hover:text-white font-bold hover:shadow-lg hover:shadow-amber-900/80 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
          <HomeIcon className="h-6 stroke-2"/>
          <div>
            主頁
          </div>
        </a>
        <div className="hidden lg:flex items-center justify-center space-x-12">
          {menusItems.map((item) => (
            <a
              href={item.href}
              className="flex items-center space-x-2 hover:bg-amber-900/80 text-amber-900 hover:text-white hover:shadow-lg hover:shadow-amber-900/80 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
              <item.icon className="h-6"/>
              <div>
                {item.name}
              </div>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <a
            href="/construction"
            className="flex items-center space-x-2 hover:bg-amber-900/80 text-amber-900 hover:text-white font-bold hover:shadow-lg hover:shadow-amber-900/80 px-3 py-2 rounded-3xl ease-in-out transition duration-300">
            <div>
              登入
            </div>
            <ArrowLeftEndOnRectangleIcon className="h-6 stroke-2"/>
          </a>
        </div>
        <Popover className="lg:hidden">
          <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            <Bars3Icon className='h-6 w-6 text-amber-900' aria-hidden="true"/>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 mt-5 flex w-screen max-w-max px-4">
              <div
                className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {menusItems.map((item) => (
                    <a href={item.href} key={item.name} className="group relative flex gap-x-6 rounded-2xl p-2 px-4 hover:bg-orange-50">
                      <div
                        className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-orange-100 group-hover:bg-amber-900/80 transition duration-300 ease-in-out">
                        <item.icon className="h-7 w-7 text-amber-900 group-hover:text-white" aria-hidden="true"/>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-amber-900">
                          {item.name}
                        </p>
                        <p className="text-amber-900 opacity-80">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                {/*<div className="grid grid-cols-2 divide-x divide-amber-50">
                  {actionItem.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-amber-900"
                    >
                      <item.icon className="h-5 w-5 flex-none text-amber-900" aria-hidden="true"/>
                      {item.name}
                    </a>
                  ))}
                </div>*/}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </>
  );
}