import PersonalInjuryClient from "./PersonalInjuryClient"
import { personalInjuryFaqs } from "./faqs"

export const revalidate = 86400

export default function PersonalInjuryPage() {
  return <PersonalInjuryClient faqs={personalInjuryFaqs} />
}

