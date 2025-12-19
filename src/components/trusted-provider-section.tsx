"use client";
import { values } from "@/data/trusted-provider";
import Image from "next/image";
import Wrapper from "./wrapper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useWindowWidth } from "@/hooks/use-mobile";

export function TrustedProviderSection() {
    const width = useWindowWidth();
    return (
        <Wrapper>
            <section className="bg-white md:py-10 w-full lg:w-[90%] mx-auto">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10 lg:mb-14 max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0C73B5] mb-8">Trusted Healthcare Provider</h2>
                        <p className="text-[#58595B] text-sm lg:text-xl leading-tight">
                            Bangkok Dusit Medical Services (BDMS) is the largest private hospital group in Thailand, serving
                            international patients from across the Middle East and beyond.
                        </p>
                    </div>

                    {/* Values Carousel */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={width < 768 ? 24 : 28}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 64
                            }
                        }}
                        className="max-w-5xl mx-auto mb-12 lg:mb-10"
                    >
                        {values.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="space-y-3 lg:space-y-5">
                                    <div className="text-4xl lg:text-6xl font-isans font-bold text-[#0C73B5]">{value.number}</div>
                                    <div className="text-[#FF6F61] font-semibold tracking-wider text-sm lg:text-lg uppercase">
                                        {value.title}
                                    </div>
                                    <p className="text-[#58595B] text-xs lg:text-[18px] text-balance lg:leading-6 min-h-12 md:min-h-20 lg:min-h-28">{value.description}</p>
                                    <div className="rounded-xl overflow-hidden">
                                        <Image
                                            src={value.image || "/placeholder.svg"}
                                            alt={value.title}
                                            width={800}
                                            height={500}
                                            className="w-full h-40 lg:h-56 object-cover"
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