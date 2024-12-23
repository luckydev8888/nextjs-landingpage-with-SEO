import React from "react"
import Link from "next/link"

interface LogoProps {
  textColor: string // Define the type of the `textColor` prop
}

export default function Logo({ textColor }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_205_5385)">
          <path
            d="M19.5386 23.4366C19.3904 23.5849 19.2144 23.7025 19.0208 23.7828C18.8271 23.863 18.6195 23.9043 18.4099 23.9043C18.2003 23.9043 17.9927 23.863 17.799 23.7828C17.6053 23.7025 17.4294 23.5849 17.2812 23.4366L8.09921 14.2561C6.77491 12.9048 6.03741 11.0854 6.04697 9.19342C6.05652 7.30139 6.81236 5.48959 8.15024 4.15171C9.48812 2.81383 11.2999 2.05799 13.192 2.04843C15.084 2.03888 16.9033 2.77638 18.2547 4.10067L24.0578 9.90378C24.3563 10.2039 24.5235 10.6103 24.5224 11.0337C24.5213 11.457 24.3521 11.8626 24.052 12.1612C23.7518 12.4598 23.3454 12.6269 22.9221 12.6258C22.4987 12.6247 22.0931 12.4555 21.7945 12.1554L15.9987 6.35228C15.2499 5.60352 14.2344 5.18287 13.1755 5.18287C12.1166 5.18287 11.101 5.60352 10.3523 6.35228C9.6035 7.10104 9.18285 8.11658 9.18285 9.17549C9.18285 10.2344 9.6035 11.2499 10.3523 11.9987L19.5342 21.1807C19.8338 21.4793 20.0026 21.8847 20.0034 22.3078C20.0042 22.7308 19.837 23.1368 19.5386 23.4366Z"
            fill="#F00"
          />
          <path
            d="M24.0012 27.8992C22.6533 29.2436 20.8272 29.9987 18.9234 29.9987C17.0197 29.9987 15.1936 29.2436 13.8457 27.8992L8.04986 22.0961C7.88902 21.951 7.75941 21.7747 7.66891 21.5779C7.57841 21.3811 7.52892 21.1679 7.52346 20.9514C7.51799 20.7348 7.55667 20.5194 7.63713 20.3183C7.71758 20.1172 7.83814 19.9346 7.99145 19.7816C8.14477 19.6286 8.32762 19.5084 8.52889 19.4283C8.73015 19.3482 8.94561 19.31 9.16214 19.3158C9.37867 19.3217 9.59173 19.3716 9.78835 19.4625C9.98497 19.5534 10.161 19.6833 10.3058 19.8445L16.1017 25.6476C16.8516 26.3875 17.8637 26.8008 18.9172 26.7972C19.9707 26.7937 20.98 26.3737 21.7249 25.6287C22.4698 24.8838 22.8899 23.8745 22.8934 22.821C22.8969 21.7675 22.4837 20.7554 21.7437 20.0055L12.5618 10.8192C12.2624 10.5198 12.0942 10.1138 12.0942 9.69047C12.0942 9.26712 12.2624 8.86111 12.5618 8.56176C12.8611 8.26241 13.2671 8.09424 13.6905 8.09424C14.1138 8.09424 14.5198 8.26241 14.8192 8.56176L24.0012 17.7437C25.346 19.0914 26.1013 20.9176 26.1013 22.8215C26.1013 24.7253 25.346 26.5515 24.0012 27.8992Z"
            fill="#F00"
          />
        </g>
        <defs>
          <clipPath id="clip0_205_5385">
            <rect
              width="20.1005"
              height="28"
              fill="white"
              transform="translate(6 2)"
            />
          </clipPath>
        </defs>
      </svg>

      <span className={`inline-block text-3xl font-bold text-${textColor}`}>
        REDDKARMA
      </span>
    </Link>
  )
}
