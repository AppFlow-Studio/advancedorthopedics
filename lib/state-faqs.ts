/**
 * State-specific FAQs for state landing pages
 * Used for both on-page display and FAQPage JSON-LD schema
 */

export interface StateFAQ {
  question: string;
  answer: string;
}

export const STATE_FAQS: Record<string, StateFAQ[]> = {
  florida: [
    {
      question: "How do I choose the right orthopedic specialist in Florida?",
      answer: "Choosing the right specialist depends on your symptoms and body area affected. For back or neck pain, our spine specialists focus on spinal conditions and can review your imaging. For joint pain in the knee, hip, or shoulder, our joint specialists provide targeted evaluation. We recommend scheduling a consultation where we review your symptoms, imaging (if available), and medical history to match you with the most appropriate specialist. Same-day and next-day appointments are often available at our Florida locations to help you get started quickly."
    },
    {
      question: "Do you offer same-day orthopedic appointments across Florida?",
      answer: "Yes, subject to availability. Many patients can be seen with same-day or next-day appointments depending on location and provider schedules. You can request an appointment online through our booking system or call (561) 223-9959 to speak with our scheduling team. With multiple Florida locations, we work to accommodate urgent orthopedic needs promptly."
    },
    {
      question: "What conditions do you treat at your Florida locations?",
      answer: "Our Florida locations treat a comprehensive range of orthopedic and spine conditions including herniated discs, sciatica, spinal stenosis, degenerative disc disease, joint arthritis (knee, hip, shoulder), sports injuries, meniscus tears, rotator cuff injuries, carpal tunnel syndrome, plantar fasciitis, and work-related injuries. Browse the Conditions section on this page to see options organized by body area, or call (561) 223-9959 to discuss your specific condition and schedule an evaluation."
    },
    {
      question: "What should I bring to my first orthopedic visit in Florida?",
      answer: "Bring a valid photo ID, your insurance card, and a list of current medications. If you have recent imaging studies (MRI, CT, or X-ray reports and images on CD or digital format), bring those as they help our specialists make an accurate diagnosis. Also bring any prior medical records related to your condition, details about your injury or symptoms (when they started, what makes them better or worse), and questions you'd like to discuss. Arriving prepared helps ensure a thorough evaluation and treatment plan."
    },
    {
      question: "Do you treat auto accident and slip-and-fall injuries in Florida?",
      answer: "Yes. We evaluate and treat injuries resulting from auto accidents and slip-and-fall incidents at our Florida locations. Our specialists review your imaging, assess the extent of your injuries, and develop a personalized treatment plan that may include conservative care, injections, or surgery when appropriate. We also work with Personal Injury Protection (PIP) insurance coverage. Visit our injury care pages or call (561) 223-9959 to schedule an evaluation if you've been injured in an accident."
    }
  ],
  'new-jersey': [
    {
      question: "Do you have orthopedic clinics in North, Central, and South New Jersey?",
      answer: "Yes. Our New Jersey locations serve patients throughout North Jersey, Central Jersey, and South Jersey. You can find our clinics in cities across these regions, with convenient access via major corridors including the Garden State Parkway and Route 22. Each location page lists nearby communities commonly served. View the Locations section on this page to find the clinic nearest you or call (561) 223-9959 for assistance selecting the best location for your needs."
    },
    {
      question: "Can I get a second opinion from an orthopedic specialist in New Jersey?",
      answer: "Yes. We offer second opinion consultations at our New Jersey locations to help you understand your diagnosis and explore all available treatment options. Bring your recent imaging studies (MRI, CT, or X-ray images and reports), prior medical records, current medications list, and any treatment recommendations you've received. Our specialists will review your case, explain your condition clearly, discuss all appropriate treatment options, and answer your questions to help you make an informed decision about your care."
    },
    {
      question: "What are the most common reasons patients visit an orthopedic doctor in New Jersey?",
      answer: "Common reasons include persistent back pain or neck pain, joint pain (knee, hip, or shoulder), arthritis-related discomfort, sports injuries (such as ACL tears or meniscus injuries), work-related musculoskeletal strain, sciatica or radiating leg pain, rotator cuff problems, and carpal tunnel syndrome. Whether your symptoms result from an injury, overuse, or age-related wear, our New Jersey specialists provide expert evaluation and personalized treatment plans tailored to your specific condition and goals."
    },
    {
      question: "Do you accept insurance at your New Jersey orthopedic locations?",
      answer: "Yes. We accept most major PPO insurance plans and Personal Injury Protection (PIP) coverage at our New Jersey locations. To verify that your specific plan is accepted and understand your coverage details, copay requirements, and any authorization requirements, contact your preferred New Jersey office directly or call (561) 223-9959 before your visit. Our team can help you understand your benefits and any out-of-pocket costs."
    },
    {
      question: "How quickly can I be seen at a New Jersey location?",
      answer: "Same-day and next-day appointments are often available at our New Jersey locations, subject to provider schedules. We prioritize urgent orthopedic needs when possible. To request the earliest available appointment, call (561) 223-9959 or use our online booking system. Our clinics are open 8AM–8PM, 7 days a week, providing flexible scheduling options to accommodate your needs."
    }
  ],
  'new-york': [
    {
      question: "Do you see patients from outside Manhattan (Brooklyn, Queens, NJ)?",
      answer: "Yes. Our New York location serves patients from throughout the New York metropolitan area, including Brooklyn, Queens, the Bronx, and nearby communities in New Jersey such as Jersey City and Hoboken. We're easily accessible via public transit and offer convenient parking for those driving. Patients from throughout the region visit our Manhattan location for expert orthopedic and spine care. Call (561) 223-9959 to schedule your appointment."
    },
    {
      question: "What orthopedic services are available at your New York location?",
      answer: "Our New York location provides comprehensive orthopedic and spine services including evaluation and treatment for back pain, neck pain, joint conditions (knee, hip, shoulder), sports injuries, work-related injuries, and chronic pain conditions. We offer advanced diagnostic imaging coordination, targeted injections when appropriate, and both non-surgical and surgical treatment options. Visit our body-part service pages (Spine Care, Knee Care, Hip Care, etc.) on this page to learn more about specific services, or call (561) 223-9959 to discuss your needs."
    },
    {
      question: "How do I schedule an orthopedic appointment in NYC?",
      answer: "Schedule an appointment by calling (561) 223-9959 or using our online booking system. Same-day and next-day appointments are often available, subject to provider schedules. Our scheduling team will confirm your appointment time and match you with the appropriate specialist based on your symptoms. You'll receive confirmation details and information about what to bring to your visit, including any prior imaging or medical records."
    },
    {
      question: "Do you treat neck and back pain in New York?",
      answer: "Yes. Our New York specialists evaluate and treat neck and back pain resulting from various spine conditions including herniated discs, degenerative disc disease, spinal stenosis, sciatica, pinched nerves, and arthritis. We provide comprehensive evaluation using advanced imaging when needed, and offer both conservative and surgical treatment options tailored to your specific condition. Treatment plans may include medications, targeted injections, or minimally invasive surgical procedures when appropriate. Call (561) 223-9959 to schedule your evaluation."
    },
    {
      question: "What should I bring to my first NYC orthopedic consultation?",
      answer: "Bring a valid photo ID, your insurance card, and a list of current medications. If you have recent imaging studies (MRI, CT, or X-ray reports and images on CD or accessible via online portal), bring those as they help our specialists make an accurate diagnosis. Also bring any prior medical records related to your condition, details about your symptoms (when they started, what makes them better or worse), and a list of questions you'd like to discuss. Coming prepared helps ensure a thorough evaluation and comprehensive treatment plan."
    }
  ],
  pennsylvania: [
    {
      question: "Will Mountain Spine & Orthopedics expand locations in Pennsylvania?",
      answer: "This page supports Pennsylvania expansion as new offices open. Locations and services will be listed here as they become available. When Pennsylvania locations are added, they will offer the same comprehensive orthopedic and spine care available at our other locations, including same-day and next-day appointments when available."
    },
    {
      question: "What orthopedic services will be offered in Pennsylvania?",
      answer: "Core services at Pennsylvania locations will include spine care for back and neck pain, joint care for knee, hip, and shoulder conditions, sports medicine evaluation and treatment, pain management options including targeted injections, advanced diagnostic imaging coordination, and both non-surgical and surgical treatment options for qualifying patients. Services will be similar to those offered at our Florida, New Jersey, and New York locations."
    },
    {
      question: "Do you offer same-day appointments in Pennsylvania?",
      answer: "As Pennsylvania locations are added, same-day or next-day appointments will be available subject to office and provider schedules. Scheduling options and availability will appear on each city page once locations open. We aim to provide timely access to orthopedic care across all our locations, including Pennsylvania."
    },
    {
      question: "Do you accept insurance in Pennsylvania locations?",
      answer: "Yes. We accept PPO insurance plans and Personal Injury Protection (PIP) coverage. As Pennsylvania clinics open, contact the location directly to verify that your specific plan is accepted and understand your coverage details, copay requirements, and any authorization requirements. Our team can help you understand your benefits and any out-of-pocket costs."
    },
    {
      question: "How can I find the nearest Pennsylvania location when available?",
      answer: "Use the Locations directory on our website and select Pennsylvania to view the most current list of city pages, addresses, and contact details. As new Pennsylvania locations open, they will appear on this state page and in our locations directory. You can also call (561) 223-9959 for information about Pennsylvania locations and services."
    }
  ]
};
