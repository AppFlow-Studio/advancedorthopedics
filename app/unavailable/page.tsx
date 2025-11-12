export default function Unavailable() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
      <h1 className="text-3xl font-bold text-[#0A50EC]">Service Unavailable</h1>
      <p className="mt-4 text-gray-700 max-w-md">
        We currently provide care and consultations for patients located in the United States only.
      </p>
    </main>
  );
}

