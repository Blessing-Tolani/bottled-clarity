'use client'

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/button'
import EmailInput from '@/components/email-input'
import { enqueueSnackbar } from 'notistack'
import Spinner from '@/components/spinner'
import { validateEmail } from '@/utils'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleJoinWaitlist = async () => {
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
        body: JSON.stringify({ email: email, formType: 'waitlist' }),
      })
      const result = await response?.json()
      if (result.ok) {
        enqueueSnackbar({
          variant: 'success',
          message: 'You have successfully joined the waitlist',
        })
        setEmail('')
      } else {
        enqueueSnackbar({
          variant: 'error',
          message: `Error: ${result.message}`,
        })
      }
    } catch (error: any) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Error: Failed to send',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleButtonClick = () => {
    // Get the element by ID and scroll to it
    const target = document.getElementById('targetSection')
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start', // Align to the top of the page
      })
    }
  }

  return (
    <section className="h-[100vh] relative">
      <Image src="/images/hero_section_body.png" fill quality={100} alt="" />
      <div className=" absolute top-0  ">
        <div className=" h-20   border border-blue-100 border-opacity-20  flex justify-between w-screen px-5 lg:px-20 xl:px-40 items-center">
          <Image
            src="/images/logo.png"
            quality={100}
            alt=""
            width={88}
            height={44}
          />
          <div className="flex  items-center md:space-x-10 ">
            <h1 className="text-blue-100 mdMax:hidden font-roboto mdMax:text-xs font-medium">
              Mindset Moment
            </h1>
            <Button
              variant="primary"
              className="font-roboto mdMax:text-xs"
              onClick={handleButtonClick}
            >
              Sign up to our waitlist
            </Button>
          </div>
        </div>
        <div className="w-screen mdMax:px-4 md:w-[70vw] xl:w-[40vw] text-center  mx-auto text-blue-100 my-8 md:my-16">
          <h2 className=" font-lora font-medium text-2xl md:text-4xl">
            Your Clarity Journey is <span className="font-bold">almost</span>{' '}
            here!
          </h2>
          <p className="text-sm md:text-xl font-roboto my-1 ">
            Life can feel overwhelming, uncertain, or stuck. But deep down, you
            know there’s something more—a clearer direction, a deeper purpose, a
            better you. We’re here to guide you toward clarity. And guess what?
          </p>
          <h1 className="font-roboto font-bold text-base md:text-xl">
            WE ARE LAUNCHING SOON!
          </h1>
          <div
            id="targetSection"
            className="space-x-2 md:space-x-4 flex mdMax:flex-row justify-center items-start mt-9"
          >
            <div className="flex flex-col items-start">
              <EmailInput
                email={email}
                setEmail={(value) => {
                  setEmail(value)
                  error ? setError('') : ''
                }}
                disabled={isSubmitting}
                className="mdMax:placeholder:text-sm placeholder:text-[#2F3C7E80] placeholder:font-medium bg-[#2F3C7E33]"
              />
              <p className="text-red-600 ml-4  mt-1 text-xs md:text-sm font-medium">
                {error}
              </p>
            </div>

            <Button
              variant="primary"
              className="font-roboto mdMax:text-xs min-w-[6.5rem] md:w-[12.5rem]"
              onClick={handleJoinWaitlist}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : ' Join waitlist'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
