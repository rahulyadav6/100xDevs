import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Accord() {
    const faqs = [
        {
            "question": "What is you name?",
            "answer": "My name is Rahul",
        },
        {
            "question": "Where are you from?",
            "answer": "I am from Nepal",
        },
        {
            "question": "What is your role?",
            "answer": "I am a full stack developer",
        },
    ]
    return (
        <div className="flex justify-center items-center">
            <main className="w-125 p-4">
                <div>
                    <div>Accord page</div>
                    {faqs.map((faq) => {
                        return (
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}