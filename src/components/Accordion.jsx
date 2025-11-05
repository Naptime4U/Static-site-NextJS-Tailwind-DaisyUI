import React from "react";
import InteractiveStack from "./InteractiveStack";

function Accordion({ items }) {
    return (
        <div className="w-full max-w-[90vw] mx-auto space-y-2 whitespace-pre-line mt-4">
    {items.map((item, index) => (
        <div
            key={index}
            className="collapse collapse-arrow bg-blue-950 border border-base-300"
        >
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">{item.title}</div>

            <div className="collapse-content text-sm space-y-4 break-words">
                {item.parts
                    ? item.parts.map((part, i) => {
                        if (part.type === "text") {
                            return <p key={i}>{part.value}</p>;
                        } else if (part.type === "stack") {
                            return (
                                <InteractiveStack
                                    key={i}
                                    activities={part.activities}
                                />
                            );
                        }
                    })
                    : item.content}
            </div>
        </div>
    ))}
</div>
    );
}

export default Accordion;

