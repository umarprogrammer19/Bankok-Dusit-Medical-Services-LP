import Image from "next/image"
import { Button } from "@/components/ui/button"
import Wrapper from "./wrapper"

export function HeroSection() {
    return (
        <main className="mx-auto w-full max-w-360 lg:px-4 bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat">
            <section className="relative min-h-screen lg:min-h-200 overflow-hidden w-full lg:w-[90%] mx-auto flex items-start lg:items-center flex-col lg:flex-row md:px-10 lg:px-0">
                {/* BDMS Logo */}
                <div className="absolute w-56 h-32 hidden top-10 -left-6 lg:block">
                    <Image src={"/logo.svg"} alt="Logo BDSM" width={700} height={100} className="w-full h-full object-cover" />
                </div>
                <div className="w-32 h-24 flex justify-start relative md:right-4 lg:hidden">
                    <Image src={"/logo.svg"} alt="Logo BDSM" width={700} height={100} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 container mx-auto lg:py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-8">
                        {/* Left Content */}
                        <div className="flex-1 max-w-xl space-y-2 lg:space-y-6 relative left-4 md:left-0">
                            {/* Headline */}
                            <h1 className="text-3xl sm:text-3xl lg:text-4xl lg:text-[42px] font-bold text-[#0C73B5] leading-tighter">
                                <span>Meet Our Expert</span>
                                <p><span>Teams At The</span> <span className="text-[#ED1C24]">BDMS</span></p>
                                <span className="text-[#0C73B5]">UAE Roadshow</span>
                            </h1>

                            <p className="text-[#58595B] text-base lg:text-xl">Register Below For Free</p>

                            {/* CTA Button */}
                            <Button className="bg-[#ED1C24] hover:bg-[#c91920] text-white px-8 lg:px-16 py-5 lg:py-6 text-base lg:text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all lg:mt-10">
                                SIGN UP
                            </Button>
                        </div>

                        {/* Right Content - Doctors Image */}
                        <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <div className="relative w-full lg:max-w-xl">
                                <Image
                                    src="/hero-doc.png"
                                    alt="BDMS Medical Team - Professional doctors ready to assist you"
                                    width={800}
                                    height={800}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
