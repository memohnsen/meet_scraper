interface LiftingResult {
    meet: string;
    date: string;
    lifter: string;
    age: string;
    bodyWeight: number;
    snatch1: number;
    snatch2: number;
    snatch3: number;
    snatch: number;
    cj1: number;
    cj2: number;
    cj3: number;
    cj: number;
    total: number;
}

export const liftingResults: LiftingResult[] = [
    {
        meet: "BKTH March Closed Meet",
        date: "2025-03-01",
        lifter: "Ajeet Seenivasan",
        age: "Open Men's 109kg",
        bodyWeight: 107.85,
        snatch1: 120,
        snatch2: 125,
        snatch3: -130,
        snatch: 125,
        cj1: 155,
        cj2: -160,
        cj3: -160,
        cj: 155,
        total: 280
    },
    {
        meet: "BKTH March Closed Meet",
        date: "2025-03-01",
        lifter: "Sahil Gupta",
        age: "Open Men's 67kg",
        bodyWeight: 64.75,
        snatch1: 75,
        snatch2: 79,
        snatch3: -82,
        snatch: 79,
        cj1: 100,
        cj2: 103,
        cj3: 0,
        cj: 103,
        total: 182
    }
];