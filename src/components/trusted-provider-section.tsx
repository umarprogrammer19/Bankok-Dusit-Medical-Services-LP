"use client";
import { values } from "@/data/trusted-provider";
import Image from "next/image";
import Wrapper from "./wrapper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export function TrustedProviderSection() {
    return (
        <Wrapper>
            <section className="bg-white md:py-10 w-full md:w-[90%] mx-auto">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-14 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] mb-8">Trusted Healthcare Provider</h2>
                        <p className="text-[#58595B] text-sm md:text-xl leading-tight">
                            Bangkok Dusit Medical Services (BDMS) is the largest private hospital group in Thailand, serving
                            international patients from across the Middle East and beyond.
                        </p>
                    </div>

                    {/* Values Carousel */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 64
                            }
                        }}
                        className="max-w-5xl mx-auto mb-12 md:mb-10"
                    >
                        {values.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="space-y-3 md:space-y-5">
                                    <div className="text-4xl md:text-6xl font-isans font-bold text-[#0C73B5]">{value.number}</div>
                                    <div className="text-[#FF6F61] font-semibold tracking-wider text-sm md:text-lg uppercase">
                                        {value.title}
                                    </div>
                                    <p className="text-[#58595B] text-xs md:text-[18px] text-balance md:leading-6 min-h-12 md:min-h-28">{value.description}</p>
                                    <div className="rounded-xl overflow-hidden">
                                        <Image
                                            src={value.image || "/placeholder.svg"}
                                            alt={value.title}
                                            width={800}
                                            height={500}
                                            className="w-full h-40 md:h-56 object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                {/* Hospital Logos */}
                <div className="flex justify-center">
                    <Image
                        src="/logos-line.png"
                        alt="BDMS Hospital Network Partners"
                        width={1500}
                        height={900}
                    />
                </div>
            </section>
        </Wrapper>
    )
}