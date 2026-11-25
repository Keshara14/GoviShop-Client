const produceStyles = {
    tomato: { background: "produce-tile-bright", label: "Tomato" },
    "bell pepper": { background: "produce-tile-light", label: "Bell Pepper" },
    "green chilli": { background: "produce-tile-lime", label: "Green Chilli" },
    cucumber: { background: "produce-tile-lime", label: "Cucumber" },
    mango: { background: "produce-tile-pale", label: "Mango" },
    banana: { background: "produce-tile-dark", label: "Banana" }
};

function ProduceShape({ name }) {
    const normalizedName = name.toLowerCase();

    if (normalizedName.includes("tomato")) {
        return <><path className="produce-shape" d="M50 35c-5-7-13-8-18-3l7 7c-8-3-14 1-15 7 6-1 12 1 17 6-2 12 5 24 9 24s11-12 9-24c5-5 11-7 17-6-1-6-7-10-15-7l7-7c-5-5-13-4-18 3Z" /></>;
    }

    if (normalizedName.includes("chilli")) {
        return <><path className="produce-shape" d="M38 31c18 1 28 8 25 20-3 14-17 24-37 25 9-9 14-22 12-45Z" /><path className="produce-detail" d="M38 32c-3-7 2-11 8-10" /></>;
    }

    if (normalizedName.includes("mango")) {
        return <><path className="produce-shape" d="M53 27c19 4 25 23 14 40-10 15-30 13-38-1-8-16 7-42 24-39Z" /><path className="produce-shape" d="M52 29c-1-9 4-13 11-12-2 7-5 10-11 12Z" /></>;
    }

    return <><path className="produce-shape" d="M50 29c-8-7-18-4-22 5-4 9 1 18 5 25 4 7 10 12 17 12s13-5 17-12c4-7 9-16 5-25-4-9-14-12-22-5Z" /><path className="produce-shape" d="M50 29c-6-8-2-14 6-15 1 7-1 12-6 15Z" /><path className="produce-detail" d="M50 37v28" /></>;
}

function ProduceVisual({ name = "Vegetable", className = "" }) {
    const style = produceStyles[name.toLowerCase()] || { background: "produce-tile-light", label: name };

    return (
        <div className={`produce-visual ${style.background} ${className}`} aria-label={style.label} role="img">
            <svg viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                    <radialGradient id={`produce-shine-${style.background}`} cx="35%" cy="25%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity=".4" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill={`url(#produce-shine-${style.background})`} />
                <ProduceShape name={name} />
            </svg>
            <span>{style.label}</span>
        </div>
    );
}

export default ProduceVisual;
