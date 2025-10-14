import CarAccidentClient from "./CarAccidentClient";
import { carAccidentFaqs } from "./faqs";

export const revalidate = 86400;

export default function CarAccidentPage() {
    return <CarAccidentClient faqs={carAccidentFaqs} />;
}