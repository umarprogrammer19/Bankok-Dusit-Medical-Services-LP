import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative min-h-125 md:min-h-150 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image src="/hero-background.png" alt="" fill className="object-cover object-center" priority />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex-1 max-w-xl space-y-6">
                        {/* BDMS Logo */}
                        <div className="flex justify-start items-center gap-2 w-56 h-32 relative right-6">
                            <Image src={"/logo.svg"} alt="Logo BDSM" width={700} height={100} className="w-full h-full object-cover" />
                        </div>

                        {/* Headline */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0C73B5] leading-tight">
                            Meet Our Expert
                            <br />
                            Teams At The <span className="text-[#0C73B5]">BDMS</span>
                            <br />
                            <span className="text-[#0C73B5]">UAE Roadshow</span>
                        </h1>

                        <p className="text-[#1a365d] text-base md:text-lg">Register Below For Free</p>

                        {/* CTA Button */}
                        <Button className="bg-[#ED1C24] hover:bg-[#c91920] text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                            SIGN UP
                        </Button>
                    </div>

                    {/* Right Content - Doctors Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <Image
                                src="/hero-doc.png"
                                alt="BDMS Medical Team - Professional doctors ready to assist you"
                                width={500}
                                height={550}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
