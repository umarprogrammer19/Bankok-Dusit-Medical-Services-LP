import { values } from "@/data/trusted-provider";
import Image from "next/image";
import Wrapper from "./wrapper";

export function TrustedProviderSection() {
    return (
        <Wrapper>
            <section className="bg-white py-16 md:py-10 md:w-[90%] mx-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-14 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] mb-8">Trusted Healthcare Provider</h2>
                        <p className="text-[#58595B] text-sm md:text-xl leading-tight">
                            Bangkok Dusit Medical Services (BDMS) is the largest private hospital group in Thailand, serving
                            international patients from across the Middle East and beyond.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-16 max-w-5xl mx-auto mb-12 md:mb-10">
                        {values.map((value, index) => (
                            <div key={index} className="space-y-3 md:space-y-5">
                                <div className="text-4xl md:text-6xl font-isans font-bold text-[#0C73B5]">{value.number}</div>
                                <div className="text-[#FF6F61] font-semibold tracking-wider text-xs md:text-lg uppercase">
                                    {value.title}
                                </div>
                                <p className="text-[#58595B] text-xs md:text-[18px] text-balance leading-6 min-h-28">{value.description}</p>
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
                        ))}
                    </div>

                </div>
                {/* Hospital Logos */}
                <div className="flex justify-center">
                    <Image
                        src="/logos-line.png"
                        alt="BDMS Hospital Network Partners"
                        width={1500}
                        height={900}
                        className="w-7xl object-cover"
                    />
                </div>
            </section>
        </Wrapper>
    )
}
