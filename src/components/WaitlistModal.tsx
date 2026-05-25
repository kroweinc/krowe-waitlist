"use client"

import { useState, FormEvent } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import { supabase } from "../lib/supabase"
import { cn } from "../lib/utils"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const inputClassName = cn(
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 sm:py-3 text-[16px] sm:text-base transition-colors",
  "placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
  "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-70"
)

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [referralSource, setReferralSource] = useState("")
  const [referralSourceOther, setReferralSourceOther] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    if (!referralSource) {
      setStatus("error")
      setErrorMessage("Please select where you heard from us.")
      return
    }

    if (referralSource === "Other" && !referralSourceOther.trim()) {
      setStatus("error")
      setErrorMessage("Please specify where you heard from us.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const { error } = await supabase.from("waitlist").insert({
        email: trimmed,
        heard_from: referralSource || null,
        heard_from_other: referralSource === "Other" ? referralSourceOther.trim() : null,
      })

      if (error) {
        setStatus("error")
        console.error("Waitlist signup error:", error)
        if (error.code === "23505") {
          setErrorMessage("You're already on the list.")
        } else if (error.code === "42P01") {
          setErrorMessage("Waitlist table not found. Please check your Supabase setup.")
        } else if (error.code === "42501" || error.message?.includes("policy") || error.message?.includes("permission")) {
          setErrorMessage("Permission denied. Check Supabase RLS policies allow public inserts.")
        } else if (error.message?.includes("fetch") || error.message?.includes("network")) {
          setErrorMessage("Connection failed. Check your internet and Supabase URL.")
        } else {
          setErrorMessage(error.message || "Something went wrong. Please try again.")
        }
        return
      }

      setStatus("success")
      setEmail("")
      setReferralSource("")
      setReferralSourceOther("")
      setTimeout(() => {
        onOpenChange(false)
        setStatus("idle")
      }, 2000)
    } catch (err) {
      setStatus("error")
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again."
      setErrorMessage(msg)
      console.error("Waitlist signup error:", err)
    }
  }

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setStatus("idle")
      setErrorMessage("")
      setEmail("")
      setReferralSource("")
      setReferralSourceOther("")
    }
    onOpenChange(next)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[calc(100%-2rem)] max-w-[25rem] max-h-[calc(100vh-2rem)] overflow-y-auto translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg sm:text-xl font-bold text-gray-900 font-serif">
              Join the waitlist
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </Dialog.Close>
          </div>

          {status === "success" ? (
            <div className="mt-6 py-4 text-center">
              <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                check_circle
              </span>
              <p className="text-lg font-medium text-gray-900">You're on the list!</p>
              <p className="mt-1 text-sm text-gray-500">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={status === "loading"}
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="waitlist-referral" className="block text-sm font-medium text-gray-700 mb-1">
                  Where did you hear from us?
                </label>
                <select
                  id="waitlist-referral"
                  value={referralSource}
                  onChange={(e) => setReferralSource(e.target.value)}
                  disabled={status === "loading"}
                  className={inputClassName}
                >
                  <option value="">Select an option</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Reddit">Reddit</option>
                  <option value="X">X (Twitter)</option>
                  <option value="Newsletter">Newsletter</option>
                  <option value="Word of mouth">Word of mouth</option>
                  <option value="Other">Other</option>
                </select>
                {referralSource === "Other" && (
                  <input
                    id="waitlist-referral-other"
                    type="text"
                    value={referralSourceOther}
                    onChange={(e) => setReferralSourceOther(e.target.value)}
                    placeholder="Please specify"
                    disabled={status === "loading"}
                    className={cn(inputClassName, "mt-2")}
                    aria-label="Please specify where you heard from us"
                  />
                )}
              </div>

              {status === "error" && errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-4 sm:py-6 rounded-lg"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Joining...
                  </span>
                ) : (
                  "Join waitlist"
                )}
              </Button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
