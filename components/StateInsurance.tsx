'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, HeartHandshake, FileText } from 'lucide-react';

interface StateInsuranceProps {
  stateName: string;
}

export default function StateInsurance({ stateName }: StateInsuranceProps) {
  const plans = [
    {
      icon: ShieldCheck,
      title: 'Major PPO Plans',
      desc: 'We accept most major PPO insurance plans for both in-network and out-of-network benefits.',
    },
    {
      icon: UserCheck,
      title: 'Workers\' Compensation',
      desc: `Specialized expertise in handling ${stateName} workers' compensation claims and employer coordination.`,
    },
    {
      icon: HeartHandshake,
      title: 'Personal Injury',
      desc: 'Expert evaluation and treatment for auto accident (PIP) and slip-and-fall injuries.',
    },
    {
      icon: FileText,
      title: 'Easy Verification',
      desc: 'Our administrative team provides fast insurance verification for your surgical procedures.',
    },
  ];

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 
              style={{ fontFamily: "var(--font-public-sans)" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#252932] mb-4 sm:mb-6 md:mb-8"
            >
              Insurances We Accept in {stateName}
            </h2>
            <p 
              style={{ fontFamily: "var(--font-public-sans)" }}
              className="text-base sm:text-lg md:text-xl text-[#424959] leading-relaxed mb-6 sm:mb-8 md:mb-10"
            >
              At Mountain Spine & Orthopedics, we believe quality healthcare should be accessible. Our clinics work directly with multiple insurance carriers and coordinators to streamline your experience.
            </p>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm inline-block">
              <p className="text-[#0A50EC] font-bold text-lg mb-2">Need to verify coverage?</p>
              <p className="text-[#424959]">Contact our billing team today for immediate assistance.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="bg-[#0A50EC]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <plan.icon className="w-6 h-6 text-[#0A50EC]" />
                </div>
                <h3 
                  style={{ fontFamily: "var(--font-public-sans)" }}
                  className="text-xl font-bold text-[#252932] mb-3"
                >
                  {plan.title}
                </h3>
                <p 
                  style={{ fontFamily: "var(--font-inter)" }}
                  className="text-[#424959] leading-relaxed"
                >
                  {plan.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
