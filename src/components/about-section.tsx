"use client";
import Image from "next/image"
import Wrapper from "./wrapper"
import { useWindowWidth } from "@/hooks/use-mobile"

export function AboutSection() {
    const width = useWindowWidth();

    return (
        <Wrapper className="bg-[url('/about-background.png')] bg-top bg-cover bg-no-repeat">
            <section className="relative py-16 overflow-hidden mx-auto w-full lg:w-[90%]">
                <div className="relative z-10 container mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-0 max-w-7xl mx-auto">
                        {/* Image */}
                        <div className="w-screen mx-auto relative sm:left-[5%] md:left-[12.5%] lg:left-0 lg:w-[46%]">
                            <Image
                                src={width < 1024 ? "/mob-about.png" : "/about.png"}
                                alt="BDMS healthcare professional caring for patient"
                                width={520}
                                height={350}
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-[54%] space-y-5">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C73B5]">About Us</h2>

                            <div className="flex flex-col gap-3 lg:gap-6 lg:w-[65%]">
                                <p className="text-[#58595B] leading-tight text-xs sm:text-lg lg:text-[19px]">
                                    The BDMS UAE Roadshow 2026 is a multi-city healthcare awareness initiative designed to connect UAE
                                    residents with one of the world's largest private hospital networks.
                                </p>

                                <p className="text-[#58595B] leading-tight text-xs sm:text-lg lg:text-[19px]">
                                    Through in-person interactions and informational consultations, attendees can better understand available
                                    healthcare options, treatment pathways, and patient support services offered by BDMS hospitals in
                                    Thailand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
