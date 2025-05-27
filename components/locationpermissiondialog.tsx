"use client"

import { useState } from "react"
import { MapPin, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface LocationPermissionDialogProps {
  onLocationGranted?: (position: GeolocationPosition) => void
  onLocationDenied?: () => void
}

export function LocationPermissionDialog({ onLocationGranted, onLocationDenied }: LocationPermissionDialogProps) {
  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const requestLocation = () => {
    setLoading(true)
    setError(null)

    
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser")
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false)
        if (onLocationGranted) {
          onLocationGranted(position)
        }
        setOpen(false)
      },
      (error) => {
        setLoading(false)
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Location permission was denied")
            break
          case error.POSITION_UNAVAILABLE:
            setError("Location information is unavailable")
            break
          case error.TIMEOUT:
            setError("The request to get location timed out")
            break
          default:
            setError("An unknown error occurred")
            break
        }
        if (onLocationDenied) {
          onLocationDenied()
        }
      },
    )
  }

  const handleClose = () => {
    setOpen(false)
    if (onLocationDenied) {
      onLocationDenied()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-[#0094E0]">
        <DialogHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0094E0]">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-center text-xl font-bold text-[#0094E0] mt-4">
            Find Your Nearest Clinic
          </DialogTitle>
          <DialogDescription className="text-center">
            We'd like to access your location to show you the nearest orthopedic clinic and provide you with the most
            relevant care options.
          </DialogDescription>
        </DialogHeader>

        {error && <div className="rounded-md bg-red-50 p-4 text-sm text-red-500">{error}</div>}

        <div className="px-4 py-2">
          <p className="text-center text-sm text-gray-500">
            Your location will only be used to calculate distance to our clinics and will not be stored.
          </p>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <X className="mr-2 h-4 w-4" />
            No Thanks
          </Button>
          <Button
            type="button"
            onClick={requestLocation}
            className="bg-[#0094E0] text-white hover:bg-[#0094E0]/90"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Locating...
              </>
            ) : (
              <>
                <MapPin className="mr-2 h-4 w-4" />
                Allow Location
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
