'use client'

import { useState, useEffect } from 'react'
import { Phone, AlertTriangle, CheckCircle } from 'lucide-react'

type InjuryType = 'car-accident' | 'slip-and-fall' | 'work-injury' | 'personal-injury'
type StateCode = 'FL' | 'NJ' | 'NY' | 'PA'

interface Props {
  injuryType: InjuryType
}

interface CoverageContent {
  title: string;
  coverageType: string;
  bullets: string[];
  urgentNote?: string;
  lienAvailable: boolean;
}

const coverageMatrix: Record<InjuryType, Record<StateCode, CoverageContent>> = {
  'car-accident': {
    FL: {
      title: 'Florida PIP (Personal Injury Protection)',
      coverageType: 'No-Fault Auto Insurance',
      bullets: [
        'Florida\'s PIP provides $10,000 in medical benefits — but only if you seek care within 14 days',
        'Requires treatment from an MD or DO (not just a chiropractor) to access the full $10,000',
        'Covers 80% of reasonable medical expenses up to the limit',
        'Mountain Spine & Orthopedics is a PIP-compliant provider — we bill your auto insurer directly',
        'Our patient advocates confirm your benefits before your first appointment',
      ],
      urgentNote: 'Florida PIP: You must see a doctor within 14 days of the accident or you permanently lose your $10,000 benefit.',
      lienAvailable: true,
    },
    NJ: {
      title: 'New Jersey No-Fault Auto Insurance',
      coverageType: 'PIP / No-Fault',
      bullets: [
        'NJ PIP covers medical expenses regardless of fault — minimum $15,000 up to $250,000 depending on your policy',
        'NJ no-fault requires prompt treatment and documentation to maximize your benefit',
        'Our NJ clinics (Paramus, Bridgewater, Edison, Cherry Hill) accept all major NJ auto insurers',
        'Lien-based care available if you have a personal injury attorney',
        'We coordinate records and billing with your insurer and attorney simultaneously',
      ],
      lienAvailable: true,
    },
    NY: {
      title: 'New York No-Fault Insurance ($50,000)',
      coverageType: 'No-Fault Auto Insurance',
      bullets: [
        'New York provides $50,000 in no-fault medical coverage — one of the highest in the nation',
        'You must file a no-fault claim within 30 days of the accident',
        'No-fault covers orthopedic exams, imaging (MRI/X-ray), injections, and surgical care',
        'Our NYC Midtown clinic is an authorized no-fault provider',
        'Lien-based care available if no-fault coverage is exhausted',
      ],
      urgentNote: 'NY No-Fault: File your claim within 30 days and seek treatment promptly — delays can reduce your benefits.',
      lienAvailable: true,
    },
    PA: {
      title: 'Pennsylvania Auto Insurance (Limited vs. Full Tort)',
      coverageType: 'PIP / Tort Auto Insurance',
      bullets: [
        'PA drivers choose between limited tort and full tort coverage at policy sign-up',
        'Full tort allows unlimited recovery for pain and suffering; limited tort restricts it to serious injuries',
        'PIP covers first-party medical expenses up to your policy limit',
        'Our Philadelphia and Allentown clinics work with PA auto insurers and injury attorneys',
        'Strong orthopedic documentation from day one protects your tort claim',
      ],
      lienAvailable: true,
    },
  },
  'slip-and-fall': {
    FL: {
      title: 'Florida Slip & Fall — Premises Liability',
      coverageType: 'Liability / Health Insurance',
      bullets: [
        'Slip-and-fall injuries in FL are typically covered by the property owner\'s liability insurance',
        'Health insurance covers your treatment regardless of fault — we bill your primary insurer first',
        'Florida\'s premises liability statute of limitations is 2 years from the date of injury',
        'Medical documentation is critical — we create a detailed orthopedic record of all injuries',
        'Lien-based care available if you\'re pursuing a premises liability claim with an attorney',
      ],
      urgentNote: 'Florida reduced its slip-and-fall SOL from 4 years to 2 years. Early medical documentation is now more critical than ever.',
      lienAvailable: true,
    },
    NJ: {
      title: 'New Jersey Slip & Fall — Premises Liability',
      coverageType: 'Liability / Health Insurance',
      bullets: [
        'NJ premises liability cases are covered by the property owner\'s general liability policy',
        'Your health insurance covers orthopedic care while liability is determined',
        'NJ\'s statute of limitations for slip-and-fall is 2 years',
        'Workers\' comp applies if the fall occurred at your workplace',
        'Our NJ clinics provide prompt documentation for fractures, FOOSH injuries, and spinal trauma',
      ],
      lienAvailable: true,
    },
    NY: {
      title: 'New York Slip & Fall — 3-Year SOL (1 Year for Government)',
      coverageType: 'Liability / Health Insurance',
      bullets: [
        'NY gives 3 years for private premises slip-and-fall claims — 1 year for government property',
        'Government property falls require a Notice of Claim within 90 days',
        'Health insurance or no-fault auto (if fall occurred near a vehicle) covers your treatment',
        'NYC sidewalk falls may involve municipal liability — document everything immediately',
        'Our NYC clinic provides same-week evaluations and detailed FOOSH/hip fracture documentation',
      ],
      urgentNote: 'Government property falls in NY: You must file a Notice of Claim within 90 days or lose your right to sue.',
      lienAvailable: true,
    },
    PA: {
      title: 'Pennsylvania Slip & Fall — Premises Liability',
      coverageType: 'Liability / Health Insurance',
      bullets: [
        'PA premises liability claims must be filed within 2 years',
        'Comparative negligence applies — your recovery is reduced by your percentage of fault',
        'Health insurance covers orthopedic treatment while your case is pending',
        'Workplace falls are covered by PA workers\' compensation',
        'Our Philadelphia and Allentown clinics see slip-and-fall patients same-week',
      ],
      lienAvailable: true,
    },
  },
  'work-injury': {
    FL: {
      title: 'Florida Workers\' Compensation',
      coverageType: 'Workers\' Compensation',
      bullets: [
        'FL workers\' comp covers 100% of medical expenses for authorized treatment',
        'Your employer designates an authorized treating physician (ATP) — our FL clinics serve as ATPs for many carriers',
        'You have a one-time right to change your ATP — do not waive this right prematurely',
        'Temporary disability benefits (64% of AWW) begin after 7 lost days',
        'Report your injury within 30 days to protect your claim',
      ],
      urgentNote: 'Florida ATP Selection: You get one change of treating physician — consult with us before signing any ATP selection forms.',
      lienAvailable: false,
    },
    NJ: {
      title: 'New Jersey Workers\' Compensation',
      coverageType: 'Workers\' Compensation',
      bullets: [
        'NJ workers\' comp pays 70% of AWW (up to state maximum) for temporary disability',
        'NJ generally allows employees to choose their own treating physician',
        'All reasonable and necessary medical expenses are covered at 100%',
        'Our NJ clinics (Bridgewater, Edison, Paramus) accept workers\' comp from all major NJ carriers',
        'We provide work status notes, restrictions, and FCE documentation upon request',
      ],
      lienAvailable: false,
    },
    NY: {
      title: 'New York Workers\' Compensation',
      coverageType: 'Workers\' Compensation',
      bullets: [
        'NY WCB provides medical care and wage replacement (2/3 of AWW up to weekly maximum)',
        'Treatment must be from WCB-authorized providers — our NYC clinic is WCB-authorized',
        'NY Scaffold Law (§240/241) provides additional protection for construction workers',
        'Disputed claims still allow emergency treatment — document everything',
        'IME (Independent Medical Exam) is common in NY WC — our physicians prepare detailed reports',
      ],
      urgentNote: 'NY Scaffold Law: Construction workers who fall from heights may have additional legal rights under Labor Law §240.',
      lienAvailable: false,
    },
    PA: {
      title: 'Pennsylvania Workers\' Compensation',
      coverageType: 'Workers\' Compensation',
      bullets: [
        'PA workers\' comp covers 100% of medical expenses and 66.67% of AWW for total disability',
        'For the first 90 days, you must use your employer\'s designated panel physicians',
        'After 90 days, you may choose your own treating physician',
        'Our Philadelphia and Allentown clinics are listed on many employer panels',
        'Functional Capacity Evaluations (FCE) help establish return-to-work timelines',
      ],
      urgentNote: 'PA Panel Physicians: You must use the panel list for 90 days — choosing outside the panel may jeopardize your benefits.',
      lienAvailable: false,
    },
  },
  'personal-injury': {
    FL: {
      title: 'Florida Personal Injury — Medical Lien Coverage',
      coverageType: 'PIP + Medical Lien',
      bullets: [
        'FL PIP provides up to $10,000 in first-party auto insurance coverage (14-day rule applies)',
        'Medical liens allow you to receive orthopedic care now — we are paid when your case settles',
        'We work with personal injury attorneys throughout Florida on lien-based arrangements',
        'Health insurance, Medicare, and Medicaid assignments may also apply',
        'Our patient advocates verify all available coverage before your first visit',
      ],
      urgentNote: 'FL Medical Lien: No upfront cost — our fee is paid from your settlement. We work with your attorney directly.',
      lienAvailable: true,
    },
    NJ: {
      title: 'New Jersey Personal Injury — No-Fault + Lien',
      coverageType: 'No-Fault + Medical Lien',
      bullets: [
        'NJ no-fault auto insurance covers medical expenses up to your PIP limit regardless of fault',
        'Lien-based care available for personal injury patients with pending civil claims',
        'Our NJ clinics coordinate directly with PI attorneys on records, scheduling, and depositions',
        'Health insurance accepted alongside or in lieu of no-fault coverage',
        'Statute of limitations: 2 years for most personal injury claims in NJ',
      ],
      lienAvailable: true,
    },
    NY: {
      title: 'New York Personal Injury — $50,000 No-Fault + Lien',
      coverageType: 'No-Fault + Medical Lien',
      bullets: [
        'NY\'s $50,000 no-fault benefit is the highest in the nation — covers most orthopedic care',
        'Medical liens available when no-fault is exhausted or for non-auto injury claims',
        'Pedestrian and bicycle accident victims can access no-fault benefits from the at-fault driver',
        'Our NYC clinic provides expert witness reports and IME referrals for PI cases',
        'NY SOL: 3 years for personal injury (1 year for government entities)',
      ],
      urgentNote: 'NY No-Fault for Pedestrians: Even if you weren\'t in a vehicle, you may access no-fault benefits from the at-fault driver\'s insurer.',
      lienAvailable: true,
    },
    PA: {
      title: 'Pennsylvania Personal Injury — PIP + Medical Lien',
      coverageType: 'PIP + Medical Lien',
      bullets: [
        'PA auto PIP covers first-party medical expenses regardless of fault',
        'Medical liens allow treatment without upfront payment when a PI case is pending',
        'PA SOL: 2 years for personal injury claims',
        'Our Philadelphia and Allentown specialists provide expert medical testimony and detailed records',
        'Full tort vs. limited tort selection affects your pain and suffering recovery — we document both',
      ],
      lienAvailable: true,
    },
  },
}

const stateTabs: StateCode[] = ['FL', 'NJ', 'NY', 'PA']

export default function InjuryInsuranceCoverage({ injuryType }: Props) {
  const [activeState, setActiveState] = useState<StateCode>('FL')

  useEffect(() => {
    const stored = sessionStorage.getItem('mso-state') as StateCode | null
    if (stored && stateTabs.includes(stored)) {
      setActiveState(stored)
    }
  }, [])

  const content = coverageMatrix[injuryType][activeState]

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className="text-3xl md:text-4xl text-gray-900 mb-3"
          >
            Insurance & Coverage Guide
          </h2>
          <p className="text-gray-600 text-lg">
            Select your state to see how your treatment is covered
          </p>
        </div>

        {/* State tabs */}
        <div className="flex gap-2 justify-center mb-8">
          {stateTabs.map((state) => (
            <button
              key={state}
              onClick={() => setActiveState(state)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeState === state
                  ? 'bg-[#0A50EC] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-[#0A50EC]/10 text-[#0A50EC] rounded-full uppercase tracking-wide">
              {content.coverageType}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{content.title}</h3>

          {content.urgentNote && (
            <div className="flex gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 font-medium">{content.urgentNote}</p>
            </div>
          )}

          <ul className="space-y-2.5 mb-6">
            {content.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#0A50EC] flex-shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {content.lienAvailable && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-4">
              <p className="text-sm text-blue-800">
                <strong>Medical Lien Available:</strong> No insurance? No problem. We treat you now and collect from your settlement — no out-of-pocket cost for the evaluation.
              </p>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 text-center bg-[#0A2342] rounded-xl py-5 px-6">
          <p className="text-sm text-gray-300 mb-3">
            Not sure if you&apos;re covered? Call (561) 223-9959 — our patient advocates verify your coverage before your first appointment.
          </p>
          <a
            href="tel:+15612239959"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0A50EC] text-white rounded-full text-sm font-semibold hover:bg-[#0A40CC] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Verify My Coverage — (561) 223-9959
          </a>
        </div>
      </div>
    </section>
  )
}
