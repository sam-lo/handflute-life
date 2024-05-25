import {PaintBrushIcon} from "@heroicons/react/24/outline";

export default function Construction() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 sm:p-24 p-10 selection:bg-amber-900/30">
        <div className="flex flex-col justify-center text-amber-900 items-center gap-2 sm:gap-6">
          <PaintBrushIcon className="h-24 my-4 "/>
          <div className="sm:text-5xl text-3xl text-center">
            該功能正在建設中
          </div>
          <div className="sm:text-3xl text-xl text-center">
            我們會盡快完成，如有任何查詢，請聯絡我們
          </div>
        </div>
      </div>
    </>
  )
}