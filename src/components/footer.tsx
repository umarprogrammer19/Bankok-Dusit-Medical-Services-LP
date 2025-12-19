import Image from "next/image";
import Wrapper from "./wrapper";

export function FooterSection() {
    return (
        <Wrapper className="bg-[url('/footer-background.png')]">
            <footer className="relative overflow-hidden">
                <div className="relative z-10 py-8 lg:py-16">
                    <div className="container mx-auto sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                            {/* Left Content */}
                            <div className="space-y-12">
                                {/* Contact Info */}
                                <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-white text-sm lg:text-lg">
                                    <a href="tel:+966533973111" className="flex items-center gap-2 hover:text-[#c5e4f5] transition-colors">
                                        <Image src="/footer/phone.svg" alt="Phone" width={16} height={16} className="w-5 h-5" />
                                        +966533973111
                                    </a>
                                    <a
                                        href="mailto:abdulaziz.al@bdms.co.th"
                                        className="flex items-center gap-2 hover:text-[#c5e4f5] transition-colors"
                                    >
                                        <Image src="/footer/email.svg" alt="Email" width={16} height={16} className="w-5 h-5" />
                                        abdulaziz.al@bdms.co.th
                                    </a>
                                    <a
                                        href="https://www.bdmsarabia.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-[#c5e4f5] transition-colors"
                                    >
                                        <Image src="/footer/web-search.svg" alt="Website" width={16} height={16} className="w-5 h-5" />
                                        www.bdmsarabia.com
                                    </a>
                                </div>

                                {/* Right Content - Address */}
                                <div className="text-white items-end text-sm lg:text-[17px] text-left lg:text-left lg:hidden block">
                                    <p>3293 Abdullah Ibn Hunthafa Al Sahmi,</p>
                                    <p>Diplomatic Quarter, Riyadh, Saudi Arabia</p>
                                </div>

                                {/* Company Info */}
                                <div className="text-white/80 text-sm lg:text-[16px] space-y-1">
                                    <p>Bangkok Dusit Medical Services PCL (BDMS) Thailand's leading private hospital network</p>
                                    <p>© 2026 BDMS. All rights reserved</p>
                                </div>
                            </div>

                            {/* Right Content - Address */}
                            <div className="text-white items-end text-xs lg:text-[17px] text-left lg:text-left lg:block hidden">
                                <p>3293 Abdullah Ibn</p>
                                <p>Hunthafa Al Sahmi,</p>
                                <p>Diplomatic Quarter,</p>
                                <p>Riyadh, Saudi Arabia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}
