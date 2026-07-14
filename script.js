// =========================
// GET ALL ELEMENTS
// =========================

const openingScreen = document.getElementById("openingScreen");
const introScreen = document.getElementById("introScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const memoriesScreen = document.getElementById("memoriesScreen");

const beginBtn = document.getElementById("beginBtn");
const continueBtn = document.getElementById("continueBtn");
const nextPhotoBtn = document.getElementById("nextPhotoBtn");
const afterMemoriesBtn = document.getElementById("afterMemoriesBtn");

const introText = document.getElementById("introText");
const thingsScreen =
  document.getElementById("thingsScreen");

const afterThingsBtn =
  document.getElementById("afterThingsBtn");
  const giftScreen =
  document.getElementById("giftScreen");

const giftBox =
  document.getElementById("giftBox");

const birthdayLetter =
  document.getElementById("birthdayLetter");

const giftInstruction =
  document.getElementById("giftInstruction");

const afterGiftBtn =
  document.getElementById("afterGiftBtn");

  const wishScreen =
  document.getElementById("wishScreen");

const wishBefore =
  document.getElementById("wishBefore");

const blowCandleBtn =
  document.getElementById("blowCandleBtn");

const flame =
  document.getElementById("flame");

const finalBirthdayMessage =
  document.getElementById("finalBirthdayMessage");

const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.20;
const musicToggle = document.getElementById("musicToggle");

const lastSurpriseBtn =
  document.getElementById("lastSurpriseBtn");

const lastSurpriseScreen =
  document.getElementById("lastSurpriseScreen");

const lastMessage =
  document.getElementById("lastMessage");

const lastSignature =
  document.getElementById("lastSignature");

  const finalEndingBtn =
  document.getElementById("finalEndingBtn");

const endingScreen =
  document.getElementById("endingScreen");

const replayBtn =
  document.getElementById("replayBtn");

  // =========================
// HEART GAME ELEMENTS
// =========================

const heartGameScreen =
  document.getElementById("heartGameScreen");

const heartGameArea =
  document.getElementById("heartGameArea");

const catchHeart =
  document.getElementById("catchHeart");

const heartCount =
  document.getElementById("heartCount");

const heartGameSecret =
  document.getElementById("heartGameSecret");

const afterHeartGameBtn =
  document.getElementById("afterHeartGameBtn");

  // =========================
// SCRATCH CARD ELEMENTS
// =========================

const scratchScreen =
  document.getElementById("scratchScreen");

const scratchCanvas =
  document.getElementById("scratchCanvas");

const scratchCard =
  document.getElementById("scratchCard");

const scratchProgressText =
  document.getElementById("scratchProgressText");

const scratchComplete =
  document.getElementById("scratchComplete");

const afterScratchBtn =
  document.getElementById("afterScratchBtn");

  const voiceNote =
  document.getElementById("voiceNote");

const voiceNoteBtn =
  document.getElementById("voiceNoteBtn");

const voiceStatus =
  document.getElementById("voiceStatus");
// =========================
// SCREEN CHANGE FUNCTION
// =========================

function showScreen(screen) {

  if (!screen) {
    console.error("Screen not found!");
    return;
  }

  document.querySelectorAll(".screen").forEach((item) => {
    item.classList.remove("active");
  });

  setTimeout(() => {
    screen.classList.add("active");
  }, 500);
}


// =========================
// TYPING FUNCTION
// =========================

function typeText(text, element, speed, callback) {

  if (!element) {
    console.error("Typing element not found!");
    return;
  }

  let index = 0;
  element.innerHTML = "";

  function type() {

    if (index < text.length) {

      element.innerHTML += text.charAt(index);
      index++;

      setTimeout(type, speed);

    } else {

      if (callback) {
        callback();
      }
    }
  }

  type();
}


// =========================
// TAP TO BEGIN
// =========================

if (beginBtn) {

  beginBtn.addEventListener("click", () => {

    bgMusic.play().catch(() => {
  console.log("Music could not start");
});
    showScreen(introScreen);

    setTimeout(() => {

      typeText(
        "There are ordinary days…",
        introText,
        70,
        () => {

          setTimeout(() => {

            typeText(
              "And then… there is 28 July. ❤️",
              introText,
              70,
              () => {

                setTimeout(() => {

                  typeText(
                    "The day someone very special came into this world… ✨",
                    introText,
                    60,
                    () => {

                      setTimeout(() => {

                        showScreen(birthdayScreen);

                      }, 1500);

                    }
                  );

                }, 1000);

              }
            );

          }, 1000);

        }
      );

    }, 700);

  });

}


// =========================
// THERE'S MORE BUTTON
// =========================

if (continueBtn) {

  continueBtn.addEventListener("click", () => {

    showScreen(memoriesScreen);

  });

}


// =========================
// MEMORIES SLIDESHOW
// =========================

const photoCards = document.querySelectorAll(".photo-card");

let currentPhoto = 0;


if (nextPhotoBtn && photoCards.length > 0) {

  nextPhotoBtn.addEventListener("click", () => {

    // Hide current photo
    photoCards[currentPhoto].classList.remove("active-photo");

    // Go to next photo
    currentPhoto++;

    // Safety check
    if (currentPhoto < photoCards.length) {

      // Show next photo
      photoCards[currentPhoto].classList.add("active-photo");

    }

    // Last photo reached
    if (currentPhoto === photoCards.length - 1) {

      nextPhotoBtn.style.display = "none";

      if (afterMemoriesBtn) {
        afterMemoriesBtn.style.display = "inline-block";
      }

    }

  });

}
// =========================
// OPEN THINGS I LIKE SCREEN
// =========================

if (afterMemoriesBtn) {

  afterMemoriesBtn.addEventListener("click", () => {

    showScreen(thingsScreen);

  });

}

// =========================
// THINGS I LIKE CARDS
// =========================

const thingCards =
  document.querySelectorAll(".thing-card");

let openedCards = 0;


thingCards.forEach((card) => {

  card.addEventListener("click", () => {

    // Same card ko baar-baar count nahi karega
    if (!card.classList.contains("open")) {

      card.classList.add("open");

      openedCards++;


      // Sab cards open hone ke baad
      if (openedCards === thingCards.length) {

        setTimeout(() => {

          if (afterThingsBtn) {

            afterThingsBtn.style.display =
              "inline-block";

          }

        }, 500);

      }

    }

  });

});
// =========================
// OPEN GIFT SCREEN
// =========================

if (afterThingsBtn) {

  afterThingsBtn.addEventListener("click", () => {

    showScreen(giftScreen);

  });

}

// =========================
// OPEN VIRTUAL GIFT
// =========================

let giftOpened = false;

if (giftBox) {

  giftBox.addEventListener("click", () => {

    // Gift sirf ek baar open hoga
    if (giftOpened) {
      return;
    }

    giftOpened = true;

    // Gift opening animation
    giftBox.classList.add("open");

    // Instruction text change
    if (giftInstruction) {
      giftInstruction.innerHTML =
        "This one is from my heart... ❤️";
    }

    // Animation ke baad gift hide aur letter show
    setTimeout(() => {

      giftBox.style.display = "none";

      if (birthdayLetter) {

        birthdayLetter.style.display = "block";

        setTimeout(() => {
          birthdayLetter.classList.add("show");
        }, 50);

      }

      // Letter ke baad next button show
      setTimeout(() => {

        if (afterGiftBtn) {
          afterGiftBtn.style.display = "inline-block";
        }

      }, 1000);

    }, 1000);

  });

}

// =========================
// OPEN FINAL WISH SCREEN
// =========================

if (afterGiftBtn) {

  afterGiftBtn.addEventListener("click", () => {

    showScreen(wishScreen);

  });

}

// =========================
// BLOW CANDLE
// =========================

let candleBlown = false;


if (blowCandleBtn) {

  blowCandleBtn.addEventListener("click", () => {

    if (candleBlown) {
      return;
    }

    candleBlown = true;


    // Candle flame goes out
    if (flame) {
      flame.classList.add("out");
    }


    // Button disappears
    blowCandleBtn.style.display = "none";


    // Wait, then show final celebration
    setTimeout(() => {

      if (wishBefore) {
        wishBefore.style.display = "none";
      }


      if (finalBirthdayMessage) {

        finalBirthdayMessage.style.display = "block";


        setTimeout(() => {

          finalBirthdayMessage.classList.add("show");

        }, 50);

      }


      // Start confetti
      createConfetti();


    }, 1200);

  });

}


// =========================
// CONFETTI FUNCTION
// =========================

function createConfetti() {

  const confettiColors = [
    "#ff4d8d",
    "#ffd166",
    "#ff7eb6",
    "#d8b4fe",
    "#ffffff",
    "#00f5ff"
  ];


  // Create 120 confetti pieces
  for (let i = 0; i < 120; i++) {

    setTimeout(() => {

      const confetti =
        document.createElement("div");


      confetti.classList.add("confetti");


      confetti.style.left =
        Math.random() * 100 + "vw";


      confetti.style.background =
        confettiColors[
          Math.floor(
            Math.random() *
            confettiColors.length
          )
        ];


      const duration =
        Math.random() * 3 + 3;


      confetti.style.animationDuration =
        duration + "s";


      confetti.style.transform =
        `rotate(${Math.random() * 360}deg)`;


      document.body.appendChild(confetti);


      setTimeout(() => {

        confetti.remove();

      }, duration * 1000);


    }, i * 20);

  }

}


// =========================
// BACKGROUND PARTICLES
// =========================

setInterval(() => {

  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left =
    Math.random() * 100 + "vw";

  const size =
    Math.random() * 4 + 2;

  particle.style.width =
    size + "px";

  particle.style.height =
    size + "px";

  const duration =
    Math.random() * 5 + 5;

  particle.style.animationDuration =
    duration + "s";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, duration * 1000);

}, 250);

if (musicToggle && bgMusic) {

  musicToggle.addEventListener("click", () => {

    if (bgMusic.paused) {

      bgMusic.play();
      musicToggle.innerHTML = "🎵";

    } else {

      bgMusic.pause();
      musicToggle.innerHTML = "🔇";

    }

  });

}

// =========================
// ONE LAST SURPRISE
// =========================

if (lastSurpriseBtn) {

  lastSurpriseBtn.addEventListener("click", () => {

    showScreen(lastSurpriseScreen);

    // Signature pehle hidden rahega
    lastSignature.classList.remove("show");
    finalEndingBtn.classList.remove("show");

    setTimeout(() => {

      typeText(
        "I don't know what the future holds, but I do know that meeting you became one of the most beautiful and unexpected parts of my life. Thank you for being someone I can talk to, laugh with, and genuinely care about. On your birthday, I just hope life gives you every happiness you deserve. And no matter where life takes us, I will always be quietly rooting for you. ❤️",
        lastMessage,
        35,
        () => {

          setTimeout(() => {

  lastSignature.classList.add("show");

  setTimeout(() => {

    finalEndingBtn.classList.add("show");

  }, 1200);

}, 700);

        }
      );

    }, 1000);

  });

}

// =========================
// TAP / CLICK MAGIC BURST
// =========================

document.addEventListener("pointerdown", (event) => {

  // Buttons par click karne par burst nahi hoga
  if (
    event.target.closest("button") ||
    event.target.closest(".gift-box") ||
    event.target.closest(".thing-card")
  ) {
    return;
  }

  createMagicBurst(
    event.clientX,
    event.clientY
  );

});


function createMagicBurst(x, y) {

  const symbols = [
    "❤️",
    "✨",
    "⭐",
    "💛"
  ];

  // Ek tap par 8 particles
  for (let i = 0; i < 8; i++) {

    const particle =
      document.createElement("span");

    particle.classList.add(
      "tap-particle"
    );

    particle.innerHTML =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    // Tap position
    particle.style.left =
      x + "px";

    particle.style.top =
      y + "px";


    // Random direction
    const moveX =
      (Math.random() - 0.5) * 160;

    const moveY =
      (Math.random() - 0.5) * 160;


    particle.style.setProperty(
      "--moveX",
      moveX + "px"
    );

    particle.style.setProperty(
      "--moveY",
      moveY + "px"
    );


    // Random size
    particle.style.fontSize =
      Math.random() * 10 + 12 + "px";


    document.body.appendChild(
      particle
    );


    // Remove after animation
    setTimeout(() => {

      particle.remove();

    }, 1000);

  }

}

// =========================
// FLOATING SPECIAL ELEMENTS
// =========================

const floatingSymbols = [
  "28",
  "✨",
  "♡",
  "⭐",
  "L"
];

setInterval(() => {

  const floatingItem =
    document.createElement("span");

  floatingItem.classList.add(
    "floating-special"
  );

  // Random symbol
  floatingItem.innerHTML =
    floatingSymbols[
      Math.floor(
        Math.random() *
        floatingSymbols.length
      )
    ];

  // Random horizontal position
  floatingItem.style.left =
    Math.random() * 95 + "vw";

  // Random size
  const size =
    Math.random() * 12 + 12;

  floatingItem.style.fontSize =
    size + "px";

  // Random animation duration
  const duration =
    Math.random() * 7 + 10;

  floatingItem.style.animationDuration =
    duration + "s";

  // Random opacity
  floatingItem.style.opacity =
    Math.random() * 0.25 + 0.12;

  document.body.appendChild(
    floatingItem
  );

  // Remove after animation
  setTimeout(() => {

    floatingItem.remove();

  }, duration * 1000);

}, 1400);

// =========================
// FINAL CINEMATIC ENDING
// =========================

// =========================
// OPEN HEART GAME
// =========================

if (finalEndingBtn && heartGameScreen) {

  finalEndingBtn.addEventListener("click", () => {

    showScreen(heartGameScreen);

    resetHeartGame();

  });

}


// =========================
// FINAL CELEBRATION
// =========================

function createEndingCelebration() {

  const symbols = [
    "✨",
    "❤️",
    "⭐",
    "💛",
    "✦"
  ];

  for (let i = 0; i < 35; i++) {

    setTimeout(() => {

      const item =
        document.createElement("span");

      item.classList.add(
        "ending-particle"
      );

      item.innerHTML =
        symbols[
          Math.floor(
            Math.random() *
            symbols.length
          )
        ];

      item.style.left =
        Math.random() * 100 + "vw";

      item.style.fontSize =
        Math.random() * 12 +
        12 +
        "px";

      const duration =
        Math.random() * 3 + 4;

      item.style.animationDuration =
        duration + "s";

      document.body.appendChild(
        item
      );

      setTimeout(() => {

        item.remove();

      }, duration * 1000);

    }, i * 100);

  }

}


// =========================
// REPLAY THE SURPRISE
// =========================

if (replayBtn) {

  replayBtn.addEventListener("click", () => {

    // Reset photo slideshow
    currentPhoto = 0;

    photoCards.forEach((card) => {
      card.classList.remove("active-photo");
    });

    if (photoCards.length > 0) {
      photoCards[0].classList.add("active-photo");
    }

    if (nextPhotoBtn) {
      nextPhotoBtn.style.display = "inline-block";
    }

    if (afterMemoriesBtn) {
      afterMemoriesBtn.style.display = "none";
    }


    // Reset Things I Like cards
    thingCards.forEach((card) => {
      card.classList.remove("open");
    });

    openedCards = 0;

    if (afterThingsBtn) {
      afterThingsBtn.style.display = "none";
    }


    // Reset gift
    if (giftBox) {
      giftBox.classList.remove("open");
      giftBox.style.display = "";
    }

    if (birthdayLetter) {
      birthdayLetter.classList.remove("show");
    }

    if (giftInstruction) {
      giftInstruction.style.display = "";
    }

    if (afterGiftBtn) {
      afterGiftBtn.style.display = "none";
    }


    // Reset candle
    if (flame) {
      flame.classList.remove("out");
    }


    // Return to opening screen
    showScreen(openingScreen);

  });

}

// =========================
// CATCH THE HEARTS GAME
// =========================

let heartsCaught = 0;
let heartGameFinished = false;


function moveCatchHeart() {

  if (!heartGameArea || !catchHeart) {
    return;
  }

  const areaWidth =
    heartGameArea.clientWidth;

  const areaHeight =
    heartGameArea.clientHeight;

  const heartWidth =
    catchHeart.offsetWidth;

  const heartHeight =
    catchHeart.offsetHeight;


  const maxX =
    Math.max(
      0,
      areaWidth - heartWidth
    );

  const maxY =
    Math.max(
      0,
      areaHeight - heartHeight
    );


  const randomX =
    Math.random() * maxX;

  const randomY =
    Math.random() * maxY;


  catchHeart.style.left =
    randomX + "px";

  catchHeart.style.top =
    randomY + "px";

}


function resetHeartGame() {

  heartsCaught = 0;
  heartGameFinished = false;

  if (heartCount) {
    heartCount.textContent = "0";
  }

  if (heartGameSecret) {
    heartGameSecret.classList.remove("show");
  }

  if (heartGameArea) {
    heartGameArea.style.display = "block";
  }

  if (catchHeart) {
    catchHeart.style.display = "flex";
  }


  setTimeout(() => {

    moveCatchHeart();

  }, 700);

}


if (catchHeart) {

  catchHeart.addEventListener("click", () => {

    if (heartGameFinished) {
      return;
    }


    heartsCaught++;


    if (heartCount) {

      heartCount.textContent =
        heartsCaught;

    }


    // Little burst on every catch
    createHeartCatchBurst();


    if (heartsCaught >= 5) {

      heartGameFinished = true;


      catchHeart.style.display =
        "none";


      setTimeout(() => {

        heartGameArea.style.display =
          "none";

        heartGameSecret.classList.add(
          "show"
        );

      }, 500);


    } else {

      // Heart moves after every catch
      moveCatchHeart();

    }

  });

}


// =========================
// HEART CATCH BURST
// =========================

function createHeartCatchBurst() {

  const symbols = [
    "❤️",
    "💖",
    "✨"
  ];


  for (let i = 0; i < 8; i++) {

    const burst =
      document.createElement("span");


    burst.classList.add(
      "heart-catch-burst"
    );


    burst.innerHTML =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    burst.style.left =
      Math.random() * 100 + "vw";


    burst.style.top =
      Math.random() * 100 + "vh";


    document.body.appendChild(
      burst
    );


    setTimeout(() => {

      burst.remove();

    }, 1000);

  }

}

// =========================
// HEART GAME COMPLETE
// TEMPORARILY OPEN FINAL ENDING
// =========================

// =========================
// HEART GAME → SCRATCH CARD
// =========================

if (afterHeartGameBtn && scratchScreen) {

  afterHeartGameBtn.addEventListener(
    "click",
    () => {

      showScreen(scratchScreen);

      setTimeout(() => {

        setupScratchCard();

      }, 700);

    }
  );

}

// =========================
// SCRATCH CARD
// =========================

let scratchContext = null;
let isScratching = false;
let scratchFinished = false;
let scratchCheckTimer = null;


function setupScratchCard() {

  if (!scratchCanvas) {
    return;
  }


  scratchContext =
    scratchCanvas.getContext("2d");


  scratchFinished = false;
  isScratching = false;

  scratchCanvas.classList.remove(
  "scratch-finished"
);


  // Reset canvas
  scratchContext.globalCompositeOperation =
    "source-over";


  scratchContext.clearRect(
    0,
    0,
    scratchCanvas.width,
    scratchCanvas.height
  );


  // Scratch layer gradient
  const scratchGradient =
    scratchContext.createLinearGradient(
      0,
      0,
      scratchCanvas.width,
      scratchCanvas.height
    );


  scratchGradient.addColorStop(
    0,
    "#c89b3c"
  );

  scratchGradient.addColorStop(
    0.5,
    "#ffe29a"
  );

  scratchGradient.addColorStop(
    1,
    "#a8741a"
  );


  scratchContext.fillStyle =
    scratchGradient;


  scratchContext.fillRect(
    0,
    0,
    scratchCanvas.width,
    scratchCanvas.height
  );


  // Decorative text
  scratchContext.fillStyle =
    "#5c3a00";


  scratchContext.textAlign =
    "center";


  scratchContext.font =
    "bold 30px Poppins";


  scratchContext.fillText(
    "✨ SCRATCH HERE ✨",
    scratchCanvas.width / 2,
    scratchCanvas.height / 2 - 10
  );


  scratchContext.font =
    "18px Poppins";


  scratchContext.fillText(
    "A little surprise is waiting...",
    scratchCanvas.width / 2,
    scratchCanvas.height / 2 + 35
  );


  // Switch to erase mode
  scratchContext.globalCompositeOperation =
    "destination-out";


  if (scratchProgressText) {
    scratchProgressText.style.display =
      "block";
  }


  if (scratchComplete) {
    scratchComplete.classList.remove(
      "show"
    );
  }

}


// =========================
// GET POINTER POSITION
// =========================

function getScratchPosition(event) {

  const rect =
    scratchCanvas.getBoundingClientRect();


  const scaleX =
    scratchCanvas.width /
    rect.width;


  const scaleY =
    scratchCanvas.height /
    rect.height;


  return {

    x:
      (event.clientX - rect.left) *
      scaleX,

    y:
      (event.clientY - rect.top) *
      scaleY

  };

}


// =========================
// SCRATCH FUNCTION
// =========================

function scratchAt(event) {

  if (
    !isScratching ||
    scratchFinished ||
    !scratchContext
  ) {
    return;
  }


  const position =
    getScratchPosition(event);


  scratchContext.beginPath();


  scratchContext.arc(
    position.x,
    position.y,
    32,
    0,
    Math.PI * 2
  );


  scratchContext.fill();


  // Don't check every pixel on every movement
  clearTimeout(scratchCheckTimer);


  scratchCheckTimer =
    setTimeout(() => {

      checkScratchPercentage();

    }, 150);

}


// =========================
// POINTER EVENTS
// Works with mouse + mobile touch
// =========================

if (scratchCanvas) {

  scratchCanvas.addEventListener(
    "pointerdown",
    (event) => {

      if (scratchFinished) {
        return;
      }

      isScratching = true;

      scratchCanvas.setPointerCapture(
        event.pointerId
      );

      scratchAt(event);

    }
  );


  scratchCanvas.addEventListener(
    "pointermove",
    (event) => {

      scratchAt(event);

    }
  );


  scratchCanvas.addEventListener(
    "pointerup",
    () => {

      isScratching = false;

      checkScratchPercentage();

    }
  );


  scratchCanvas.addEventListener(
    "pointercancel",
    () => {

      isScratching = false;

    }
  );

}


// =========================
// CHECK HOW MUCH IS SCRATCHED
// =========================

function checkScratchPercentage() {

  if (
    !scratchContext ||
    scratchFinished
  ) {
    return;
  }


  const imageData =
    scratchContext.getImageData(
      0,
      0,
      scratchCanvas.width,
      scratchCanvas.height
    );


  const pixels =
    imageData.data;


  let transparentPixels = 0;


  // Check every 16th pixel for better performance
  for (
    let i = 3;
    i < pixels.length;
    i += 64
  ) {

    if (pixels[i] === 0) {

      transparentPixels++;

    }

  }


  const totalCheckedPixels =
    pixels.length / 64;


  const scratchedPercentage =
    (
      transparentPixels /
      totalCheckedPixels
    ) * 100;


  // Complete after approximately 40%
  if (scratchedPercentage >= 40) {

    completeScratchCard();

  }

}


// =========================
// COMPLETE SCRATCH
// =========================

function completeScratchCard() {

  if (scratchFinished) {
    return;
  }


  scratchFinished = true;
  isScratching = false;


  // Smoothly reveal everything
  scratchCanvas.classList.add(
    "scratch-finished"
  );


  if (scratchProgressText) {

    scratchProgressText.style.display =
      "none";

  }


  setTimeout(() => {

    if (scratchComplete) {

      scratchComplete.classList.add(
        "show"
      );

    }

    createScratchCelebration();

  }, 700);

}


// =========================
// SCRATCH CELEBRATION
// =========================

function createScratchCelebration() {

  const symbols = [
    "✨",
    "💖",
    "🌟",
    "❤️"
  ];


  for (let i = 0; i < 20; i++) {

    setTimeout(() => {

      const sparkle =
        document.createElement("span");


      sparkle.classList.add(
        "scratch-sparkle"
      );


      sparkle.innerHTML =
        symbols[
          Math.floor(
            Math.random() *
            symbols.length
          )
        ];


      sparkle.style.left =
        Math.random() * 100 + "vw";


      sparkle.style.top =
        Math.random() * 100 + "vh";


      document.body.appendChild(
        sparkle
      );


      setTimeout(() => {

        sparkle.remove();

      }, 1500);

    }, i * 70);

  }

}


// =========================
// SCRATCH → FINAL ENDING
// =========================

if (afterScratchBtn && endingScreen) {

  afterScratchBtn.addEventListener(
    "click",
    () => {
if (voiceNote) {
  voiceNote.pause();
  voiceNote.currentTime = 0;
}

const bgMusic =
  document.getElementById("bgMusic");

if (bgMusic) {
  bgMusic.volume = 0.35;
}
      showScreen(endingScreen);


      setTimeout(() => {

        createEndingCelebration();

      }, 700);

    }
  );

}

// =========================
// PERSONAL VOICE NOTE
// =========================

if (voiceNoteBtn && voiceNote) {

  voiceNoteBtn.addEventListener("click", () => {

    const bgMusic =
      document.getElementById("bgMusic");


    // If voice note is already playing
    if (!voiceNote.paused) {

      voiceNote.pause();

      voiceNoteBtn.innerHTML =
        "🎧 Continue My Message";

      voiceStatus.innerHTML =
        "Paused ❤️";

      return;
    }


    // Lower background music
    if (bgMusic) {
      bgMusic.volume = 0.08;
    }


    // Play voice
    voiceNote.play();

    voiceNoteBtn.innerHTML =
      "⏸ Pause My Message";

    voiceStatus.innerHTML =
      "Listen closely... ❤️";

  });


  // When voice note finishes
  voiceNote.addEventListener("ended", () => {

    const bgMusic =
      document.getElementById("bgMusic");


    // Restore background music
    if (bgMusic) {
      bgMusic.volume = 0.35;
    }


    voiceNoteBtn.innerHTML =
      "❤️ Play Again";

    voiceStatus.innerHTML =
      "A little message, just for you. ❤️";

  });

}
