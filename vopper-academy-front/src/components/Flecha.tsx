import Link from "next/link";

export type FlechaDirection = "left" | "right" | "up" | "down";
export type FlechaSize = "small" | "medium" | "large" | "xlarge";

export type FlechaProps = {
    href: string;
    direction?: FlechaDirection;
    size?: FlechaSize;
    colorHex: string;
}


export default function Flecha({ href,colorHex, direction = "right", size = "medium" }: FlechaProps) {
    const pathData = {
        right: "M8 4l8 8-8 8",
        left: "M16 4l-8 8 8 8",
        up: "M4 16l8-8 8 8",
        down: "M4 8l8 8 8-8"
    };

    const sizes = {
        small: 16,
        medium: 24,
        large: 32,
        xlarge: 40
    };

    return (
        <Link href={href}>
            <svg
                width={sizes[size]}
                height={sizes[size]}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d={pathData[direction]}
                    stroke={colorHex}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
        </Link>
    );
}