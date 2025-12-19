import Image from "next/image"
import Wrapper from "./wrapper"

export function AboutSection() {
    return (
        <Wrapper className="bg-[url('/about-background.png')] bg-top bg-cover bg-no-repeat">
            <section className="relative py-16 overflow-hidden mx-auto w-full md:w-[90%]">
                <div className="relative z-10 container mx-auto">
                    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-0 max-w-7xl mx-auto">
                        {/* Image */}
                        <div className="w-full md:w-[46%]">
                            <Image
                                src="/about.png"
                                alt="BDMS healthcare professional caring for patient"
                                width={520}
                                height={350}
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-[54%] space-y-5">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5]">About Us</h2>

                            <div className="flex flex-col gap-6 w-[65%]">
                                <p className="text-[#58595B] leading-tight text-sm md:text-[19px]">
                                    The BDMS UAE Roadshow 2026 is a multi-city healthcare awareness initiative designed to connect UAE
                                    residents with one of the world's largest private hospital networks.
                                </p>

                                <p className="text-[#58595B] leading-tight text-sm md:text-[19px]">
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
