"use client"

import { useEffect, useState } from "react"
import { LocationPermissionDialog } from "@/components/locationpermissiondialog"
import { useGeolocation } from "@/providers/geolocationcontext"
interface DelayedLocationPopupProps {
  delayInSeconds?: number
  sessionStorageKey?: string
}

export function DelayedLocationPopup({
  delayInSeconds = 2.5,
  sessionStorageKey = "location_popup_shown",
}: DelayedLocationPopupProps) {
  const [showPopup, setShowPopup] = useState(false)
  const { location, onSetLocation } = useGeolocation()
  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasBeenShown = sessionStorage.getItem(sessionStorageKey)
    const locationPermissionDenied = localStorage.getItem("location_permission_denied")
    if (!hasBeenShown && locationPermissionDenied !== "true") {
      // Set a timeout to show the popup after the specified delay
      const timer = setTimeout(() => {
        setShowPopup(true)
        // Mark that the popup has been shown in this session
        sessionStorage.setItem(sessionStorageKey, "true")
      }, delayInSeconds * 1000)
      // Clean up the timer if the component unmounts
      return () => clearTimeout(timer)
    }
  }, [])

  const handleLocationGranted = (position: GeolocationPosition) => {
    // Here you would typically call an API to find the nearest clinic
    console.log("Location granted:", position.coords)
    localStorage.setItem("location_permission_denied", "false")
    onSetLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: null,
    })
    // You could store the coordinates in localStorage or context for use elsewhere
    // localStorage.setItem("user_latitude", position.coords.latitude.toString())
    // localStorage.setItem("user_longitude", position.coords.longitude.toString())
  }

  const handleLocationDenied = () => {
    console.log("Location access denied")
    // You could set a flag in localStorage to remember the user's preference
    localStorage.setItem("location_permission_denied", "true")
  }

  if (!showPopup) return null

  return <LocationPermissionDialog onLocationGranted={handleLocationGranted} onLocationDenied={handleLocationDenied} />
}
