"use client";

import { Button } from "@/components/ui/Button";
import { DotPattern } from "@/components/ui/DotPattern";
import { cn, useIsLaptopOrLarger } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  const isLaptopOrLarger = useIsLaptopOrLarger();
  return (
    <section>
      <div className="grid grid-cols-2 laptop:gap-12">
        <div className="bg-[#D5E6A9] rounded-b-3xl laptop:rounded-bl-none laptop:rounded-br-4xl relative grid place-content-center pt-16 laptop:pt-32 col-span-2 laptop:col-span-1">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] absolute top-0 left-0 text-grey-60"
            )}
          />
          <Image
            src="/hero-section-woman.png"
            alt="Hero"
            width={isLaptopOrLarger ? 400 : 300}
            height={isLaptopOrLarger ? 400 : 300}
            className="relative z-10"
          />
        </div>
        <div className="flex flex-col items-center laptop:items-start justify-center max-w-3xl col-span-2 laptop:col-span-1 mx-auto laptop:mx-0">
          <h4 className="font-semibold text-lg laptop:text-2xl desktop:text-3xl text-dark-green-15 border-b-4 border-green-70 pb-2">
            Transform Your ❤️ Health with
          </h4>
          <h1 className="text-4xl laptop:text-5xl desktop:text-6xl font-bold text-dark-green-15 mt-4 text-center laptop:text-left">
            Personalized Nutrition Coaching
          </h1>
          <p className="mt-5 text-sm laptop:text-base desktop:text-lg font-medium text-center laptop:text-left">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
          <div className="flex mt-12 gap-4">
            <Button>Get Starter Today</Button>
            <Button variant="outline">Book a Demo</Button>
          </div>
          <div className="flex flex-col -mt-7 mb-8 laptop:mb-0 laptop:flex-row gap-2 laptop:mt-12 items-center order-first laptop:order-none relative z-20">
            <div className="border-2 border-green-70 bg-white rounded-full p-1.5 flex">
              <img
                src="https://static.vecteezy.com/system/resources/previews/029/245/100/non_2x/photorealistic-image-of-a-beautiful-dark-skinned-african-american-woman-on-a-yellow-background-young-woman-smiling-ai-generated-photo.jpg"
                alt="person"
                className="rounded-full size-10 desktop:size-12"
              />
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4sCPHb8mnqfWVwsyyoztRg1HupvQ4qUvxVDC37e6Ymo8SyIxz"
                alt="person"
                className="rounded-full -ml-4 size-10 desktop:size-12"
              />
              <img
                src="https://cdn.prod.website-files.com/6470f3b555598689d525b4ad/6470f3b655598689d525b5c9_image-03.jpg"
                alt="person"
                className="rounded-full -ml-4 size-10 desktop:size-12"
              />
            </div>
            <span className="font-bold text-base laptop:text-lg desktop:text-xl text-dark-green-20">
              <span className="text-dark-green-40">430+</span> Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
