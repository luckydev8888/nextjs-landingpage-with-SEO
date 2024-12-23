import React, { useState } from "react"

import { faqData } from "@/config/constants"

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div id="faq" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-5 pb-3 text-gray-600 text-xl">
          Browse through these FAQs to find answers to commonly asked questions.
        </p>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-[linear-gradient(138.18deg,#fbdcdc,#f8b8b8_94.44%)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-base font-semibold text-red-500 flex justify-between items-center p-5"
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-[300px]" : "max-h-0"
                }`}
              >
                <p className="mt-2 text-gray-600 text-sm p-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection
