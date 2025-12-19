import { values } from "@/data/trusted-provider";
import Image from "next/image";

export function TrustedProviderSection() {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] mb-4">Trusted Healthcare Provider</h2>
                    <p className="text-[#4a6fa5] text-sm md:text-base leading-relaxed">
                        Bangkok Dusit Medical Services (BDMS) is the largest private hospital group in Thailand, serving
                        international patients from across the Middle East and beyond.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
                    {values.map((value, index) => (
                        <div key={index} className="space-y-3 md:space-y-4">
                            <div className="text-4xl md:text-5xl font-bold text-[#0C73B5]">{value.number}</div>
                            <div className="text-[#0C73B5] font-semibold tracking-wider text-xs md:text-sm uppercase">
                                {value.title}
                            </div>
                            <p className="text-[#4a6fa5] text-xs md:text-sm leading-relaxed">{value.description}</p>
                            <div className="rounded-xl overflow-hidden border-4 border-[#0C73B5]">
                                <Image
                                    src={value.image || "/placeholder.svg"}
                                    alt={value.title}
                                    width={350}
                                    height={200}
                                    className="w-full h-40 md:h-48 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hospital Logos */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex justify-center">
                        <Image
                            src="/logos-line.png"
                            alt="BDMS Hospital Network Partners"
                            width={900}
                            height={60}
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
