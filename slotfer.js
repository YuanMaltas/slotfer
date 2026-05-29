console.log("Slotfer JS yüklendi");

(function () {
    function addCrashArcadeGames() {
        const target =
            document.querySelector('section[data-mj="widget-fixed-image-banner"]') ||
            document.querySelector('section[data-mj="widget-collection-slider"]');

        if (!target) {
            console.log("Hedef alan bulunamadı");
            return;
        }

        if (document.querySelector(".slotfer-crash-area")) {
            console.log("Alan zaten eklenmiş");
            return;
        }

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
                color: #fff;
                font-size: 15px;
                font-weight: 800;
                margin: 0 0 10px;
            }

            .slotfer-crash-list {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 10px;
            }

            .slotfer-crash-card {
                display: block;
                overflow: hidden;
                border-radius: 6px;
                border: 1px solid rgba(207, 35, 255, 0.55);
                background: #160020;
            }

            .slotfer-crash-card img {
                width: 100%;
                display: block;
            }

            @media (max-width: 900px) {
                .slotfer-crash-list {
                    grid-template-columns: repeat(3, 1fr);
                }
            }

            @media (max-width: 600px) {
                .slotfer-crash-list {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        `;
        document.head.appendChild(style);

        const html = document.createElement("section");
        html.className = "slotfer-crash-area";
        html.innerHTML = `
            <h2 class="slotfer-crash-title">Crash/Arcade Games</h2>
            <div class="slotfer-crash-list">
                <a class="slotfer-crash-card" href="/casino"><img src="https://sevenhilbet.com/slot/1.webp"></a>
                <a class="slotfer-crash-card" href="/casino"><img src="https://sevenhilbet.com/slot/2.webp"></a>
                <a class="slotfer-crash-card" href="/casino"><img src="https://sevenhilbet.com/slot/3.webp"></a>
                <a class="slotfer-crash-card" href="/casino"><img src="https://sevenhilbet.com/slot/4.webp"></a>
                <a class="slotfer-crash-card" href="/casino"><img src="https://sevenhilbet.com/slot/5.webp"></a>
            </div>
        `;

        if (target.getAttribute("data-mj") === "widget-fixed-image-banner") {
            target.insertAdjacentElement("afterend", html);
        } else {
            target.insertAdjacentElement("beforebegin", html);
        }

        console.log("Crash Arcade alanı eklendi");
    }

    addCrashArcadeGames();
    setInterval(addCrashArcadeGames, 1000);
})();
