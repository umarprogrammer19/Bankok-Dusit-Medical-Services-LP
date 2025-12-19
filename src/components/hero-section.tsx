import Image from "next/image"
import { Button } from "@/components/ui/button"
import Wrapper from "./wrapper"

export function HeroSection() {
    return (
        <main className="mx-auto w-full max-w-360 px-4 bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat">
            <section className="relative min-h-125 md:min-h-150 overflow-hidden w-[90%] mx-auto">
                <div className="relative z-10 container mx-auto py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Content */}
                        <div className="flex-1 max-w-xl space-y-6">
                            {/* BDMS Logo */}
                            <div className="flex justify-start items-center gap-2 w-56 h-32 relative right-6">
                                <Image src={"/logo.svg"} alt="Logo BDSM" width={700} height={100} className="w-full h-full object-cover" />
                            </div>

                            {/* Headline */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0C73B5] leading-tighter">
                                Meet Our Expert
                                <br />
                                Teams At The <span className="text-[#ED1C24]">BDMS</span>
                                <br />
                                <span className="text-[#0C73B5]">UAE Roadshow</span>
                            </h1>

                            <p className="text-[#58595B] text-base md:text-xl">Register Below For Free</p>

                            {/* CTA Button */}
                            <Button className="bg-[#ED1C24] hover:bg-[#c91920] text-white px-8 md:px-16 py-5 md:py-6 text-base md:text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all mt-10">
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
        </main>
    )
}
