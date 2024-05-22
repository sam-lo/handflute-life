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
        name: "聯絡我們",
        href: "/about/contact",
        icon: ChatBubbleOvalLeftEllipsisIcon,
      },
      {
        name: "資源下載",
        href: "/about",
        icon: CloudArrowDownIcon,
      },
      {
        name: "最新資訊",
        href: "/about",
        icon: NewspaperIcon,
      },
      {
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
        name: "手笛工作坊",
        href: "/work",
      },
      {
        name: "體驗講座",
        href: "/work",
      },
      {
        name: "商業演出",
        href: "/work",
      },
      {
        name: "常規課程",
        href: "/work",
      },
      {
        name: "非牟利項目",
        href: "/work",
      },
    ]
  },
  {
    id: 3,
    name: "常見問題",
    description: "關於手笛的常見問題",
    href: "/construction",
    icon: ChatBubbleLeftRightIcon,
    sub: [
      {
        name: "手笛是甚麼",
        href: "/construction",
      },
      {
        name: "手笛難學嗎",
        href: "/construction",
      },
      {
        name: "甚麼人適合學習",
        href: "/construction",
      },
      {
        name: "手笛的音樂理論",
        href: "/construction",
      }
    ]
  },
  {
    id: 4,
    name: "合作機會",
    description: "成為我們的合作夥伴",
    href: "/construction",
    icon: UserGroupIcon,
    sub: [
      {
        name: "我們的合作夥伴",
        href: "/construction",
      },
      {
        name: "以往項目評價",
        href: "/construction",
      },
      {
        name: "成為合作夥伴",
        href: "/construction",
      },
      {
        name: "與我們合作",
        href: "/construction",
      }
    ]
  },
]