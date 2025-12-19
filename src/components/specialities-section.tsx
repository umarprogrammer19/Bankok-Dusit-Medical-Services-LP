import { specialities } from "@/data/specialities";
import Image from "next/image";

export function SpecialitiesSection() {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image src="/specialities-background.png" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] text-center mb-10 md:mb-14">Our Specialities</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
                    {specialities.map((specialty, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 bg-[#e8f4fc] rounded-xl flex items-center justify-center">
                                <Image
                                    src={specialty.icon || "/placeholder.svg"}
                                    alt={specialty.title}
                                    width={28}
                                    height={28}
                                    className="text-[#0C73B5]"
                                />
                            </div>
                            <h3 className="font-semibold text-[#1a365d] mb-2 text-base">{specialty.title}</h3>
                            <p className="text-xs md:text-sm text-[#4a6fa5] leading-relaxed">{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
