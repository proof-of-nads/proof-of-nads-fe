"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ProofImageCarousel() {
  const userProfileHistoryData = [
    { id: 1, imgSrc: "/images/proof/sample-1.png" },
    { id: 2, imgSrc: "/images/proof/sample-2.png" },
    { id: 3, imgSrc: "/images/proof/sample-3.png" },
    { id: 4, imgSrc: "/images/proof/sample-4.png" },
    { id: 5, imgSrc: "/images/proof/sample-5.png" },
  ];

  return (
    <Carousel
      className="w-full max-w-5xl mx-auto"
      opts={{ loop: true, startIndex: 1 }}
      plugins={[AutoPlay({ delay: 4000, active: true })]}
    >
      <CarouselContent>
        {userProfileHistoryData.map((historyData, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Dialog>
              <DialogTrigger asChild>
                <div className="p-1 h-full cursor-pointer">
                  <Card className="h-full">
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0 rounded-lg overflow-hidden shadow-lg">
                      <div className="relative w-full h-full">
                        <Image
                          src={historyData.imgSrc}
                          alt="proof"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                          className="lg:hover:scale-110 transition-transform duration-300"
                        />
                        <span className="absolute bottom-2 right-2 text-sm font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                          {index + 1}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="min-w-[60vw] min-h-[60vh] p-0">
                <div className="relative flex justify-center items-center h-full w-full">
                  <Image
                    src={historyData.imgSrc}
                    alt="proof"
                    width={500}
                    height={500}
                    className="w-full h-full max-w-[60vw] max-h-[60vh]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
