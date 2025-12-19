import Image from "next/image";

export function FooterSection() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image src="/footer-background.png" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 py-8 md:py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        {/* Left Content */}
                        <div className="space-y-4">
                            {/* Contact Info */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white text-xs md:text-sm">
                                <a href="tel:+966533973111" className="flex items-center gap-2 hover:text-[#c5e4f5] transition-colors">
                                    <Image src="/footer/phone.svg" alt="Phone" width={16} height={16} className="w-4 h-4" />
                                    +966533973111
                                </a>
                                <a
                                    href="mailto:abdulaziz.al@bdms.co.th"
                                    className="flex items-center gap-2 hover:text-[#c5e4f5] transition-colors"
                                >
                                    <Image src="/footer/email.svg" alt="Email" width={16} height={16} className="w-4 h-4" />
                                    abdulaziz.al@bdms.co.th
                                </a>
                                <a
                                    href="https://www.bdmsarabia.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-[#c5e4f5] transition-colors"
                                >
                                    <Image src="/footer/web-search.svg" alt="Website" width={16} height={16} className="w-4 h-4" />
                                    www.bdmsarabia.com
                                </a>
                            </div>

                            {/* Company Info */}
                            <div className="text-white/80 text-xs md:text-sm space-y-1">
                                <p>Bangkok Dusit Medical Services PCL (BDMS) Thailand's leading private hospital network</p>
                                <p>© 2026 BDMS. All rights reserved</p>
                            </div>
                        </div>

                        {/* Right Content - Address */}
                        <div className="text-white text-xs md:text-sm text-left md:text-right">
                            <p>3293 Abdullah Ibn</p>
                            <p>Hunthafa Al Sahmi,</p>
                            <p>Diplomatic Quarter,</p>
                            <p>Riyadh, Saudi Arabia</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
