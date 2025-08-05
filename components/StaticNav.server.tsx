/**
 * A visually-hidden nav so Googlebot (and our live-crawl script)
 * can discover every important URL.  Does **not** change UI.
 */
export default function StaticNav() {
  const links: { href: string; label: string }[] = [
    // --- Core pages
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/about/FAQs", label: "FAQs" },
    { href: "/patient-forms", label: "Patient Forms" },
    { href: "/insurance-policy", label: "Insurance Policy" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/condition-check", label: "Condition Check" },

    // --- Finder pages
    { href: "/find-care/book-an-appointment", label: "Book Appointment" },
    { href: "/find-care/find-a-doctor", label: "Find a Doctor" },
    { href: "/find-care/free-mri-review", label: "Free MRI Review" },
    { href: "/find-care/second-opinion", label: "Second Opinion" },

    // --- Add any still-orphan pages here as you confirm them
  ];

  return (
    <nav aria-label="Hidden crawler nav">
      <ul className="sr-only">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 
