import { headers } from 'next/headers'

async function getHeaders() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'
  const fullUrl = headersList.get('x-url') || ''

  return { pathname, fullUrl }
}

export const serverUtil = { getHeaders }