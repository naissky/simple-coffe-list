import Link from "next/link"

interface ButtonProps {
    href?: string,
    className?: string,
    children: React.ReactNode
}

export default function Button({ href, className, children, }: ButtonProps) {
    if (href) {
        return (
            <Link href={href} className={`py-2 px-5 bg-[#6F757C] font-semibold text-sm rounded-lg text-coffe hover:bg-gray-800 ease-in-out duration-200 hover:text-gray-700 hover:shadow-sm ${className}    `}>
                {children}
            </Link>
        )
    }

    return (
        <button className={`py-2 px-5 bg-[#6F757C] font-semibold text-sm rounded-lg text-coffe hover:bg-gray-800 ease-in-out duration-200 hover:text-gray-700 hover:shadow-sm ${className}`}>
            {children}
        </button>
    )
}