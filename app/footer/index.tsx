'use client'

import { useState } from 'react'
import Button from '@/components/button'
import EmailInput from '@/components/email-input'
import Image from 'next/image'
import React from 'react'
import { enqueueSnackbar } from 'notistack'
import Spinner from '@/components/spinner'
import { validateEmail } from '@/utils'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleNewsletter = async () => {
    const isEmailValidated = validateEmail(email)
    if (!isEmailValidated) {
      setError('Invalid Email')
      return false
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-to-sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, formType: 'newsletter' }),
      })
      const result = await response?.json()
      if (result.ok) {
        enqueueSnackbar({
          variant: 'success',
          message: 'You have sucessfully subscribed to our newsletter',
        })
        setEmail('')
      } else {
        enqueueSnackbar({
          variant: 'error',
          message: `Error: ${result.message}`,
        })
      }
    } catch (_) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Error: Failed to send',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative">
      <div className="relative w-full h-[35.5rem]">
        <Image src="/images/footer_background.png" alt="" fill />
      </div>
      <div className="absolute top-0 w-full mt-24 md:my-10  flex flex-col items-center justify-center">
        <div className="w-screen mdMax:px-4 md:w-[70vw] xl:w-[60vw] text-center text-white my-8 md:my-16">
          <h2 className=" font-lora font-medium text-2xl md:text-[2.5rem]">
            Introducing Mindset Moment
          </h2>
          <p className="text-xs md:text-xl font-roboto mt-4 ">
            Your daily mindset newsletter packed with practical insights to help
            busy professionals like you cultivate resilience, focus, and
            personal growth—one minute a day.
          </p>

          <div className="space-x-2 md:space-x-4 flex mt-4 mb-10  mdMax:flex-row justify-center items-start ">
            <div className="flex flex-col items-start">
              <EmailInput
                email={email}
                setEmail={(value) => {
                  setEmail(value)
                  setError('')
                }}
                disabled={isSubmitting}
                className="mdMax:placeholder:text-sm placeholder:text-white placeholder:text-opacity-50 placeholder:font-medium bg-white bg-opacity-20"
              />
              <p className="text-red-600 ml-4  mt-1 text-xs md:text-sm font-medium">
                {error}
              </p>
            </div>

            <Button
              variant="secondary"
              onClick={handleNewsletter}
              disabled={isSubmitting}
              className="font-roboto mdMax:text-xs min-w-[6.5rem] md:w-[12.5rem]"
            >
              {isSubmitting ? <Spinner color="#2F3C7E" /> : ' Subscribe Now'}
            </Button>
          </div>
          <a
            href="#"
            className="text-lg underline mt-10 font-roboto mdMax:text-sm "
          >
            Take a look
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 py-6 md:py-9 text-white text-opacity-70 text-center text-xs md:text-sm w-full border-t-[0.1px] border-white border-opacity-70 ">
        <p className="">{`© Bottled Clarity, ${new Date().getFullYear()} - All rights reserved.`}</p>
      </div>
    </section>
  )
}
