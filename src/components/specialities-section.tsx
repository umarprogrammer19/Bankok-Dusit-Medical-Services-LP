import { specialities } from "@/data/specialities";
import Image from "next/image";
import Wrapper from "./wrapper";

export function SpecialitiesSection() {
    return (
        <Wrapper className="bg-[url('/specialities-background.png')] bg-cover bg-center bg-no-repeat">
            <section className="relative py-16 md:py-28 overflow-hidden md:w-[90%] w-full mx-auto">
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] text-center mb-10 md:mb-14">Our Specialities</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 max-w-5xl mx-auto">
                        {specialities.map((specialty, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* bg-[#e8f4fc] */}
                                <div className="w-12 h-28 mx-auto mb-4 rounded-xl flex items-center justify-center">
                                    <Image
                                        src={specialty.icon || "/placeholder.svg"}
                                        alt={specialty.title}
                                        width={35}
                                        height={35}
                                        className="text-[#0C73B5]"
                                    />
                                </div>
                                <h3 className="font-semibold text-[#1a365d] mb-2 text-xl">{specialty.title}</h3>
                                <p className="text-xs md:text-lg text-[#58595B] leading-tight">{specialty.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
