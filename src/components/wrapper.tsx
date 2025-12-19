import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

export default function Wrapper({ children, className = "" }: WrapperProps) {
    return (
        <div className={`mx-auto w-full max-w-360 px-4 ${className}`}>
            {children}
        </div>
    );
}
