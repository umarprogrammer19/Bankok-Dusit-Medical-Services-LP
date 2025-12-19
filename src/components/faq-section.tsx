import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

export function FAQSection() {
    return (
        <section className="bg-[#e8f4fc] py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] text-center mb-8 md:mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white border-none rounded-lg overflow-hidden shadow-sm"
                            >
                                <AccordionTrigger className="px-5 md:px-6 py-4 text-left text-[#0C73B5] font-medium text-sm md:text-base hover:no-underline hover:bg-[#0C73B5] hover:text-white data-[state=open]:bg-[#0C73B5] data-[state=open]:text-white transition-colors [&[data-state=open]>svg]:text-white">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-5 md:px-6 py-4 text-[#4a6fa5] text-sm leading-relaxed bg-[#f0f7fc]">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
