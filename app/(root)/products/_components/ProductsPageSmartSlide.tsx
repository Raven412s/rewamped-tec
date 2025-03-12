"use client"
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ProductsPageSmartSlide = () => {
    const router = useRouter()
  return (
      <section className='relative'>
        <Sheet>
      <SheetTrigger asChild className='absolute top-0 left-0 -translate-x-1/2 pt-24  translate-y-[calc(100%+10rem)] -rotate-90 m-0 p-0 max-w-max max-h-max hover:cursor-pointer z-50 brightness-150 '>
        <div className="flex justify-center items-center flex-col">
        <h1 className="font-display  font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase text-center  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 tracking-wider leading-tight">
        Smart Elevators
      </h1>
      <ChevronDown className='w-10 h-10 origin-center text-gold' />
        </div>
      </SheetTrigger>
      <SheetContent className='!w-[100vw] !h-screen ' side={"bottom"}>
        <div className="max-w-3xl relative z-20 mx-auto p-6 mt-10 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl shadow-behind ">
        <SheetHeader>
          <SheetTitle className="font-display  font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-center mb-10  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150">
             AI-Powered & Alexa-Integrated Elevators
          </SheetTitle>
          <SheetDescription className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center">
              **The Elevator Company** brings the future to your building with AI-driven
              **smart elevators** that integrate seamlessly with Alexa. Experience hands-free
              control, real-time optimization, and predictive maintenance like never before.
          </SheetDescription>
        </SheetHeader>
        <ul className="text-neutral-400 max-w-lg mx-auto my-4 text-sm space-y-2">
        <li>✅ **Voice-Controlled Operation** with Alexa</li>
        <li>✅ **AI-Powered Traffic Optimization** for reduced wait times</li>
        <li>✅ **Predictive Maintenance** to prevent breakdowns</li>
        <li>✅ **IoT & Cloud Connectivity** for remote monitoring</li>
        <li>✅ **Enhanced Security** with AI-assisted access</li>
      </ul>
        <SheetFooter className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center">
          <SheetClose asChild>
            <Button type="button" onClick={()=>router.push(`#products`)}>View Products</Button>
          </SheetClose>
        </SheetFooter>
        </div>
      </SheetContent>
         </Sheet>
    <BackgroundBeams className="bg-zinc-900" />
</section>
  )
}

export default ProductsPageSmartSlide
