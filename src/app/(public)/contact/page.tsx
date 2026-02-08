import ContactSection from "@/app/(public)/contact/ContactPage";
import {Metadata} from "next";

export const metadata:Metadata= {
    title: "Contact Us",
    description: "Contact us for any inquiries or questions.",
}
export default function ContactPage() {
    return <ContactSection/>
}