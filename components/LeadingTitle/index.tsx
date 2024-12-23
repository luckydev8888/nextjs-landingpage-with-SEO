import React from "react"

interface LeadingTitleProps {
  label: string
}

const LeadingTitle = ({ label }: LeadingTitleProps) => {
  return (
    <h5 className="text-lg sm:text-xl text-balance text-center text-primary font-semibold">
      {label}
    </h5>
  )
}

export default LeadingTitle
