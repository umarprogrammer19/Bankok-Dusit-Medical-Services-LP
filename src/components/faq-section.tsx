"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "Compliance & Disclaimer",
        answer:
            "This event is conducted for informational purposes only. No medical diagnosis or treatment is provided during the Roadshow, and participation does not guarantee any outcomes or results. All medical advice and treatment decisions should be made in consultation with qualified healthcare professionals.",
    },
    {
        question: "Is there a consultation fee?",
        answer:
            "No, consultations at the BDMS UAE Roadshow are completely free. Our expert medical teams are available to provide information and guidance at no cost to attendees.",
    },
    {
        question: "Who should attend?",
        answer:
            "Anyone interested in learning about healthcare options, treatment pathways, and medical services offered by BDMS hospitals in Thailand. This includes patients seeking second opinions, those exploring international healthcare options, and anyone interested in preventive care.",
    },
    {
        question: "What should I bring?",
        answer:
            "Please bring any relevant medical records, test results, or documentation that may help our specialists better understand your healthcare needs. Also bring a valid ID for registration purposes.",
    },
    {
        question: "What happens after the Roadshow?",
        answer:
            "After the Roadshow, our patient coordinators will follow up with personalized information based on your consultation. If you decide to proceed with treatment at BDMS hospitals, we will assist with appointment scheduling, travel arrangements, and coordination of care.",
    },
]

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
