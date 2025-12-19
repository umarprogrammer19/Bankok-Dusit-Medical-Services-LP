import Image from "next/image"
import Wrapper from "./wrapper"

export function AboutSection() {
    return (
        <Wrapper className="bg-[url('/about-background.png')] bg-top bg-cover bg-no-repeat">
            <section className="relative py-16 overflow-hidden mx-auto w-full md:w-[90%]">
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto">
                        {/* Image */}
                        <div className="w-full md:w-[42%]">
                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/about.png"
                                    alt="BDMS healthcare professional caring for patient"
                                    width={400}
                                    height={350}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-[35%] space-y-5">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5]">About Us</h2>

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
            </section>
        </Wrapper>
    )
}
