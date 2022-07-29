import React from 'react'
import Link from 'next/link'

interface HoverLinkProps {
    title: string
    hoverColor: string
}

const HoverLink = ({ title, hoverColor }: HoverLinkProps) => {
    return (
        <Link href="/">
            <a className={`text-white font-light hover:text-${hoverColor}-300`}>
                {title}
            </a>
        </Link>
    )
}

export default HoverLink