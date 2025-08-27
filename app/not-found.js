import Link from "next/link"
import { Bone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A50EC] text-white p-4">
      <div className="container flex max-w-md flex-col items-center justify-center space-y-8 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
          <Bone className="h-12 w-12 text-[#0A50EC]" />
        </div>

        <h1 className="text-6xl font-bold">Oops!</h1>

        <h2 className="text-3xl font-semibold">Page Not Found</h2>

        <p className="text-xl">
          Looks like this page took a little tumble! Don't worry, we're experts at fixing things that are out of place.
        </p>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">
            <div className="text-9xl font-bold">404</div>
          </div>
        </div>

        <Button asChild className="mt-8 bg-white text-[#0A50EC] hover:bg-white/90">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <p className="mt-8 text-sm opacity-80">If you need immediate assistance, please call our office.</p>
      </div>
    </div>
  )
}
