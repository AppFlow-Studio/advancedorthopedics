import { AlertTriangle } from "lucide-react";

export default function Unavailable() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
      <AlertTriangle className="h-16 w-16 text-[#0A50EC]" aria-hidden="true" />
      <h1 className="mt-6 text-3xl font-bold text-[#0A50EC]">Service Unavailable</h1>
      <p className="mt-4 text-gray-700 max-w-md">
        We currently provide care and consultations for patients located in the United States only.
        If you are a U.S. resident, please disconnect from any VPN and submit the form again.
      </p>
    </main>
  );
}

