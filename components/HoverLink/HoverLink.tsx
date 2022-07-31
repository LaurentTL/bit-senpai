import React from 'react'
import Link from 'next/link'
import { Url } from 'url'

interface HoverLinkProps {
    route: string
    title: string
    hoverColor: string
}

const HoverLink = ({ route, title, hoverColor }: HoverLinkProps) => {
    return (
        <Link href={route}>
            <a className={`text-white font-light hover:text-${hoverColor}-300`}>
                {title}
            </a>
        </Link>
    )
}

export default HoverLink