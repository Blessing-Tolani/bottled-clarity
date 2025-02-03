import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, formType } = await req.json()

    const googleScriptUrl =
      formType === 'waitlist'
        ? process.env.NEXT_PUBLIC_WAITLIST_GOOGLE_SCRIPT_URL
        : process.env.NEXT_PUBLIC_NEWSLETTER_GOOGLE_SCRIPT_URL

    if (googleScriptUrl) {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      return NextResponse.json({
        status: response.status,
        message: response.statusText,
        ok: true,
      })
    } else {
      return NextResponse.json(
        { message: 'Web app script url is missing' },
        { status: 500 }
      )
    }
  } catch {
    return NextResponse.json(
      { message: 'Failed to send data' },
      { status: 500 }
    )
  }
}
