import React from 'react'
import { parseISO, format } from 'date-fns'

function DateFormat({ dateString, ...props }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <>
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </>
  )
}

export default DateFormat
