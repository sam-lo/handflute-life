"use client"
import {ChevronUpIcon} from "@heroicons/react/24/outline";
import {Disclosure, Transition} from "@headlessui/react";
import {menusItems} from "@/app/data/menuItems";

export default function Footer() {
  return (
    <>
      <div className="hidden md:flex flex-col gap-8 mb-2 mt-16 mx-16 selection:bg-amber-900/30">
        <div className="flex flex-wrap justify-evenly gap-16">
          {menusItems.map((item) => (
            <div key={item.id} className="flex flex-col space-y-2 text-amber-900">
              <a href={item.href}
                 className="flex items-center space-x-2 text-xl text-amber-900 font-medium mb-2 -translate-x-2">
                <item.icon className="h-6"/>
                <div>
                  {item.name}
                </div>
              </a>
              {item.sub.map((subItem) => (
                <a className="sub-link" key={subItem.id} href={subItem.href + "?id=" + subItem.id.toString()}>
                  {subItem.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="text-amber-900 text-sm">
          © 2024 OMORI STUDIO. All rights reserved.
        </div>
      </div>
      <MobileAccordion/>
    </>
  )
}

function MobileAccordion() {
  return (
    <div className="w-full px-4 pb-8 block md:hidden">
      {menusItems.map((item) => (
        <Disclosure key={item.id}>
          {({open}) => (
            <>
              <Disclosure.Button
                className="flex w-full justify-between items-center rounded-xl pr-4 pl-4 py-3 text-left text-lg font-medium text-amber-900 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
                <a href={item.href}>{item.name}</a>
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
                    {item.sub.map((subItem) => (
                      <a key={subItem.id} href={subItem.href + "?id=" + subItem.id.toString()}>
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}