import SlipAndFallClient from "./SlipAndFallClient";
import { slipFallFaqs } from "./faqs";

export const revalidate = 86400;

export default function SlipAndFallPage() {
    return <SlipAndFallClient faqs={slipFallFaqs} />;
}