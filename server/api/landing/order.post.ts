import type { H3Event } from 'h3'
import type { FetchError } from 'ofetch'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)

    const formattedBody = {
      name: body.name,
      email: body.email,
      companyName: body.companyName,
      phone: body.phone || null,
    }

    const response = await $fetch(
      `${process.env.MAIN_BACKEND_URL}/orders/create`,
      {
        method: 'POST',
        body: formattedBody,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return response
  } catch (error: unknown) {
    console.error('API Error:', error)

    const err = error as FetchError & {
      data?: { message?: string; error?: string }
      statusCode?: number
    }

    throw createError({
      statusCode: err.statusCode || 500,
      message:
        err.data?.message ||
        err.data?.error ||
        err.message ||
        'Failed to create order',
    })
  }
})
