function SummerClothing(input) {
    let degrees = Number(input[0]);
    let dayTime = String(input[1]);
    let outfit = "";
    let shoes = "";
    if (degrees >= 10 && degrees <= 18) {
        if (dayTime == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (dayTime == "Afternoon" || dayTime == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    if (degrees > 18 && degrees <= 24) {
        if (dayTime == "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayTime == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins"
        }
    } if (degrees >= 25) {
        if (dayTime == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayTime == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }

    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
} SummerClothing([1, "Afternoon"])