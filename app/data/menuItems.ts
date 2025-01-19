import {
  ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon,
  CloudArrowDownIcon,
  CubeIcon,
  InformationCircleIcon, NewspaperIcon,
  UserGroupIcon, UserPlusIcon
} from "@heroicons/react/24/outline";

export const menusItems = [
  {
    id: 1,
    name: "關於我們",
    description: "了解更多關於手笛協會的信息",
    href: "/about",
    icon: InformationCircleIcon,
    sub: [
      {
        id: 1,
        name: "聯絡我們",
        href: "/about/contact",
        icon: ChatBubbleOvalLeftEllipsisIcon,
      },
      {
        id: 2,
        name: "資源下載",
        href: "/public/downloads",
        icon: CloudArrowDownIcon,
      },
      {
        id: 3,
        name: "最新資訊",
        href: "/about/newsroom",
        icon: NewspaperIcon,
      },
      {
        id: 4,
        name: "加入我們",
        href: "/about/contact",
        icon: UserPlusIcon,
      }
    ]
  },
  {
    id: 2,
    name: "我們的工作",
    description: "我們提供的服務",
    href: "/work",
    icon: CubeIcon,
    sub: [
      {
        id: 1,
        name: "手笛工作坊",
        href: "/work",
      },
      {
        id: 2,
        name: "體驗講座",
        href: "/work",
      },
      {
        id: 3,
        name: "商業演出",
        href: "/work",
      },
      {
        id: 4,
        name: "常規課程",
        href: "/work",
      },
      {
        id: 5,
        name: "非牟利項目",
        href: "/work",
      },
    ]
  },
  {
    id: 3,
    name: "常見問題",
    description: "關於手笛的常見問題",
    href: "/support",
    icon: ChatBubbleLeftRightIcon,
    sub: [
      {
        id: 1,
        name: "手笛是甚麼",
        href: "/support",
      },
      {
        id: 2,
        name: "手笛難學嗎",
        href: "/support",
      },
      {
        id: 3,
        name: "甚麼人適合學習",
        href: "/support",
      },
    ]
  },
  {
    id: 4,
    name: "合作機會",
    description: "成為我們的合作夥伴",
    href: "/collab",
    icon: UserGroupIcon,
    sub: [
      {
        id: 1,
        name: "我們的合作夥伴",
        href: "/collab",
      },
      {
        id: 2,
        name: "以往項目評價",
        href: "/collab",
      },
      {
        id: 3,
        name: "成為合作夥伴",
        href: "/collab",
      },
      {
        id: 4,
        name: "與我們合作",
        href: "/collab",
      }
    ]
  },
]