"use client"

import type React from "react"
import Image from "next/image"

import { Rotate3d, MousePointer2, ZoomIn } from "lucide-react"

export function OfficeView360() {
  const handleOpenTour = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = "https://app.cloudpano.com/tours/0qzPOfuxP?mls=1"
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-8">
      <div className="max-w-md text-center space-y-6">
        <div className="space-y-2">
          <div className="flex justify-center mb-4">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-white shadow-2xl shadow-black/20 flex items-center justify-center border-4 border-gradient-to-r from-black to-red-600 bg-gradient-to-r from-black to-red-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/uae-presidential-court-logo.jpg"
                  alt="UAE Presidential Court - الإمارات العربية المتحدة ديوان الرئاسة"
                  width={450}
                  height={450}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Presidential Court</h2>
          <p className="text-muted-foreground">Experience 360° view with full zoom and navigation controls</p>
        </div>

        <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MousePointer2 className="w-4 h-4" />
            <span>Click & Drag</span>
          </div>
          <div className="flex items-center space-x-1">
            <ZoomIn className="w-4 h-4" />
            <span>Mouse Wheel Zoom</span>
          </div>
        </div>

        <button
          onClick={handleOpenTour}
          className="group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-black to-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
        >
          <span>PRESIDENTIAL COURT 360view</span>
          <Rotate3d className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </button>
      </div>
    </div>
  )
}
