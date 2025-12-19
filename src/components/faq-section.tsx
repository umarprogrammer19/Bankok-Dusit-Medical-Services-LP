import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"
import Wrapper from "./wrapper"

export function FAQSection() {
    return (
        <Wrapper>
            <section className="bg-[#e8f4fc] py-16 md:py-20 w-[90%] mx-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] text-center mb-8 md:mb-10">
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white border-none overflow-hidden shadow-sm"
                                >
                                    <AccordionTrigger className="px-5 md:px-6 py-4 text-left text-[#0C73B5] text-sm md:text-xl font-bold hover:no-underline hover:bg-[#0C73B5] hover:text-white rounded-t-sm rounded-b-none data-[state=open]:bg-[#0C73B5] data-[state=open]:text-white transition-colors [&[data-state=open]>svg]:text-white cursor-pointer">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-5 rounded-t-none rounded-b-sm md:px-6 py-4 text-white text-[17px] leading-tight bg-[#0C73B5]">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
