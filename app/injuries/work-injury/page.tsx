import WorkInjuryClient from "./WorkInjuryClient"
import { workInjuryFaqs } from "./faqs"

export const revalidate = 86400

export default function WorkInjuryPage() {
  return <WorkInjuryClient faqs={workInjuryFaqs} />
}
