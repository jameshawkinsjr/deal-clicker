let interval = setInterval(() => {
    let buttons = Array.from(document.querySelectorAll("[data-testid]"));

    let button = buttons.find((button) => {
        return button.dataset.testid === "commerce-tile-button";
    });

    if (button) {
        console.log("[DealClicker] ========================");
        console.log("[DealClicker] Clicking Deal: " + button.ariaLabel)
        console.log("[DealClicker] Clicking Deal: ", { button })
        console.log("[DealClicker] ========================");
        button.click();
    } 

    return new Promise((resolve) => {
        setTimeout(() => {
            window.location =
                "https://secure05c.chase.com/web/auth/dashboard#/dashboard/merchantOffers/offer-hub";
        }, 2000);
    });
}, 2000);
