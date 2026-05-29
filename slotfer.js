(function () {
    function addCrashArcadeGames() {
        const target = document.querySelector('section[data-mj="widget-fixed-image-banner"]');

        if (!target) return;
        if (document.querySelector(".slotfer-crash-area")) return;

        const style = document.createElement("style");
        style.innerHTML = `
            .slotfer-crash-area {
                width: 100%;
                max-width: 1164px;
                margin: 22px auto 28px;
                padding: 0 16px;
                box-sizing: border-box;
            }

            .slotfer-crash-title {
                color: #ffffff;
                font-size: 15px;
                font-weight: 800;
                margin: 0 0 10px;
                line-height: 1.2;
            }

            .slotfer-crash-list {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 10px;
                width: 100%;
            }

            .slotfer-crash-card {
                display: block;
                position: relative;
                overflow: hidden;
                border-radius: 6px;
                border: 1px solid rgba(207, 35, 255, 0.55);
                box-shadow: 0 0 12px rgba(178, 39, 255, 0.22);
                background: #160020;
                transition: transform .25s ease, box-shadow .25s ease;
            }

            .slotfer-crash-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 0 18px rgba(210, 55, 255, 0.45);
            }

            .slotfer-crash-card img {
                display: block;
                width: 100%;
                height: auto;
            }

            @media (max-width: 900px) {
                .slotfer-crash-list {
                    grid-template-columns: repeat(3, 1fr);
                }
            }

            @media (max-width: 600px) {
                .slotfer-crash-area {
                    margin: 16px auto 22px;
                    padding: 0 12px;
                }

                .slotfer-crash-title {
                    font-size: 14px;
                }

                .slotfer-crash-list {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 8px;
                }

                .slotfer-crash-card {
                    border-radius: 5px;
                }
            }
        `;
        document.head.appendChild(style);

        const html = document.createElement("section");
        html.className = "slotfer-crash-area";

        html.innerHTML = `
            <h2 class="slotfer-crash-title">Crash/Arcade Games</h2>

            <div class="slotfer-crash-list">
                <a class="slotfer-crash-card" href="/casino" aria-label="Crash Arcade Game 1">
                    <img src="https://sevenhilbet.com/slot/1.webp" alt="Crash Arcade Game 1">
                </a>

                <a class="slotfer-crash-card" href="/casino" aria-label="Crash Arcade Game 2">
                    <img src="https://sevenhilbet.com/slot/2.webp" alt="Crash Arcade Game 2">
                </a>

                <a class="slotfer-crash-card" href="/casino" aria-label="Crash Arcade Game 3">
                    <img src="https://sevenhilbet.com/slot/3.webp" alt="Crash Arcade Game 3">
                </a>

                <a class="slotfer-crash-card" href="/casino" aria-label="Crash Arcade Game 4">
                    <img src="https://sevenhilbet.com/slot/4.webp" alt="Crash Arcade Game 4">
                </a>

                <a class="slotfer-crash-card" href="/casino" aria-label="Crash Arcade Game 5">
                    <img src="https://sevenhilbet.com/slot/5.webp" alt="Crash Arcade Game 5">
                </a>
            </div>
        `;

        target.insertAdjacentElement("afterend", html);
    }

    document.addEventListener("DOMContentLoaded", addCrashArcadeGames);
    setTimeout(addCrashArcadeGames, 1000);
    setTimeout(addCrashArcadeGames, 3000);
})();
