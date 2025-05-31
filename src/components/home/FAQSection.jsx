import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./../ui/accordion";
  
  const faqs = [
    {
      question: "How does the AI doctor matching work?",
      answer: "Our AI analyzes your symptoms, medical history, and preferences to match you with doctors who have the right expertise and experience for your specific condition. The system continuously learns from successful matches to improve future recommendations."
    },
    {
      question: "Is my medical data secure on the platform?",
      answer: "Yes, we implement industry-leading security measures including end-to-end encryption, strict access controls, and regular security audits. We comply with all healthcare data regulations and never share your personal information without your explicit consent."
    },
    {
      question: "Can I use Medicare AI without insurance?",
      answer: "Absolutely! Medicare AI is designed to be accessible to everyone regardless of insurance status. We provide transparent pricing for all services, and many of our basic features are completely free to use."
    },
    {
      question: "How accurate is the symptom checker?",
      answer: "Our symptom checker has a 92% accuracy rate based on clinical validation studies. However, it's designed as a preliminary assessment tool and not a replacement for professional medical diagnosis. Always consult with a healthcare provider for definitive advice."
    }
  ];
  
  export function FAQSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to the most common questions about our platform
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
  {faqs.map((faq, index) => (
    <AccordionItem key={index} value={`item-${index}`}>
      <AccordionTrigger className="text-left text-lg font-semibold">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 leading-relaxed">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
        </div>
      </section>
    );
  }