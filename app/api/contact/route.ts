import { NextRequest, NextResponse } from 'next/server'
import { BRAND } from '@/lib/constants'

interface ContactPayload {
  name: string
  phone: string
  email?: string
  package: string
  pax: string
  date?: string
  location: string
  message?: string
}

/**
 * POST /api/contact
 *
 * Receives contact form submission from landing page.
 * - Validates basic fields
 * - Logs to console (replace with CRM / n8n webhook / Resend / DB in production)
 * - Returns success
 *
 * In production, forward to:
 *   - Resend email → halo@vicca.id + cc bunda.vicca@vicca.id
 *   - n8n webhook for WA notification
 *   - Supabase / Airtable for CRM
 *   - Meta CAPI for ad tracking
 */
export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ContactPayload

    // Validate required fields
    if (!data.name || !data.phone || !data.package || !data.pax || !data.location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Sanitize phone (digits only)
    const cleanPhone = data.phone.replace(/[^0-9]/g, '')
    if (cleanPhone.length < 8) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Log to server console (visible in Vercel logs)
    console.log('[Vicca Sera] New wedding inquiry:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: cleanPhone,
      email: data.email,
      package: data.package,
      pax: data.pax,
      date: data.date,
      location: data.location,
      message: data.message,
    })

    // TODO: Forward to n8n webhook + send confirmation email
    // await fetch(process.env.N8N_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(data) })
    // await resend.emails.send({ to: BRAND.email, subject: `New inquiry from ${data.name}`, ... })

    return NextResponse.json({
      success: true,
      message: `Inquiry received. Bund Vicca will contact you at ${cleanPhone} within 2 hours.`,
    })
  } catch (error) {
    console.error('[Vicca Sera] Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Health check for GET
export async function GET() {
  return NextResponse.json({
    service: 'Vicca Sera Wedding Landing Page',
    contact: BRAND.email,
    status: 'ok',
  })
}
