interface TextHeaderProps {
    children?: React.ReactNode
    className?: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({ children, className }) => {
    return (
        <h1 className={`z-30 text-3xl ${className}`}>{children}</h1>
    )
}

export default TextHeader;