import { JSX } from "react";

export default function Footer({
    handler,
    count = 3,
}: {
    handler: (index: number) => void;
    count?: number;
}): JSX.Element {
    const dotElements = Array.from({ length: count - 1 }).map((_, index) => {
        return (
            <div
                className="w-[2vw] h-[2vw] md:w-[1vw] md:h-[1vw] rounded-[50%] bg-white cursor-pointer"
                onClick={() => handler(index + 2)}
                id={`dot-${index + 2}`}
                key={index + 2}>
            </div>
        );
    });
    return (
        <div className="absolute left-[45vw] right-[45vw] w-[10vw] md:w-[10vw] top-[80vh]">
            <div className="flex justify-between">
                <div
                    className="w-[2vw] h-[2vw] md:w-[1vw] md:h-[1vw] rounded-[50%] bg-black cursor-pointer"
                    onClick={() => handler(1)}
                    id={`dot-1`}
                    key={1}>
                </div>
                {dotElements}
            </div>
        </div>
    );
}
