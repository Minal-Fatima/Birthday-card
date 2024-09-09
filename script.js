// List of random love quotes
const loveQuotes = [
    "Every moment with you is a treasure to my heart.",
    "You are the light that guides me through every storm",  
    "In your arms, I’ve found my forever home",    
    "You are my everything, my entire universe",  
    "Without you, my world loses its color",  
    "My soul was made to love you, endlessly",    
    "With you, my heart found its rhythm, its purpose",  
    "Every moment without you feels like an eternity",  
    "Your love is my sanctuary, where I find peace",  
    "I wake up each day just to love you a little more",  
    "I never knew love could be this deep until you",    
    "Loving you feels like my heart has found its home",  
    "You are the missing piece that makes me whole",  
    "Your love is the greatest gift I’ve ever received",  
    "Every day with you feels like a beautiful eternity",  
    "In your eyes, I’ve seen the depth of true love",  
    "My heart was empty until you filled it with love",  
    "You are the sweetest part of my life, my love",  
    "You’ve turned my life into a fairytale, and I never want it to end",  
    "My love for you is a river that never stops flowing",  
    "With you, every moment feels like a precious gift",  
    "I didn’t know what true love was until I met you",  
    "My heart belongs to you, now and forever",  
    "You are the melody to my life’s song, always playing in my heart",  
    "Your love is the reason I believe in miracles",  
    "Without you, life would lose all its meaning",  
    "You are the fire that keeps my heart warm",  
    "Every second spent with you is a moment I treasure deeply",    
    "You are the calm to my storms, the peace in my chaos",  
    "You’ve shown me the true meaning of unconditional love",  
    "My love for you is infinite, stretching beyond the stars",  
    "You’ve given my life meaning in ways I can’t express",  
    "Without you, my world would crumble into darkness",  
    "You’ve captured my heart in a way no one ever could",  
    "Every smile I wear is because of the love you’ve given me",  
    "You are the answer to every prayer I’ve ever whispered",  
    "I’d cross oceans just to see you smile",      
    "I never believed in soulmates until I found you",  
    "You’ve written your love story on the pages of my heart",  
    "You’ve turned every tear into a memory of love",  
    "I could search a lifetime and never find a love like yours",  
    "With you, every sunset feels like the promise of forever",  
    "My soul dances in the warmth of your love",  
    "Loving you feels like I’m living a beautiful dream",  
    "You’ve unlocked a part of me that I never knew existed",  
    "You’ve brought so much light into my life, I never want it to dim",  
    "Every heartbeat belongs to you, now and always",  
    "You’ve colored my world in the most beautiful shades of love",  
    "Every kiss from you feels like coming home",  
    "I never knew love could be so deep until I found you",  
    "You’ve made my heart your home, and I never want you to leave",  
    "Your love is the warmth that chases away all my fears",  
    "You are the best part of me, the heart of my heart",  
    "Loving you is the most beautiful adventure I’ve ever been on",  
    "Your love is the sun that lights up even my darkest days",  
    "My heart belongs to you, now and for all eternity",  
    "You’ve turned my life into a love story I never want to end",  
    "In your arms, I’ve found the safest place in the world", 
    "You are my pyaara sa cute sa and most special big baby", 
    "You’ve shown me how beautiful truly loving someone can be.",  
    "Every moment with you feels like a lifetime of joy",    
    "Loving you is like breathing; it’s essential to my soul",  
    "You’ve filled every empty corner of my heart with love",  
    "My love for you is a fire that will never burn out",  
    "You are the reason my heart feels whole again",
    "I feel safe and cherished in your arms, as if nothing could ever harm me.",  
    "You’ve filled my life with a love so deep, I can hardly contain it",  
    "Every time I look at you, I see the rest of my life in your eyes",  
    "You are the heartbeat of my soul, the love of my life",  
    "You’ve turned my world into a canvas painted with love",    
    "You’ve made my heart a place of peace, love, and joy",  
    "Loving you has been the greatest blessing life has given me",  
    "You’ve made my life a story worth telling",  
    "With you, I’ve found the love I’ve always dreamed of",  
    "You are the reason I believe in forever",  
    "Every moment apart from you feels like a piece of my heart is missing",  
    "You’ve taught me that love is the most beautiful thing we can share",  
    "My heart is yours, now and always, forever and beyond",  
    "You are the light that chases away all my shadows",  
    "You’ve filled my heart with more love than I ever thought possible",    
    "You are the love of my life, the one I’ve been waiting for",  
    "My love for you will never fade, no matter how much time passes",
    "I’ve never been fond of waiting, but for you, I’d wait as long as it takes because you’re worth every moment.",  
    "You’ve filled my life with joy, love, and the purest happiness",  
    "You are the reason my heart feels complete, whole, and alive",  
    "My soul was made to love yours, and I will love you forever",  
    "You’ve turned every moment with you into a memory I cherish deeply",  
    "With you, love feels endless, like the stars in the sky",  
    "You are the answer to every question my heart has ever asked",  
    "You’ve given me a love that makes me feel invincible",  
    "My love for you is eternal, like the waves of the ocean",
    "I love the way you are, you don't need to change a single thing",  
    "You are the heartbeat of my existence, the reason I live",  
    "I love you more than words could ever express, deeper than the ocean’s depths",  
    "With you, love is not just a feeling, but a way of being",  
    "My heart will love you, today, tomorrow, and forever beyond forever",
    "I promise to stay by your side, fid dunya wal akhira",
    "You make my life complete and beautiful in ways that I have never imagined",
    "I want to do life with you",
    "I don't like being touched, but your touch is the one I crave, the only one that feels like home",
    "I want you to be the happiest and most successful version of yours"  
];

let hearts = [];
const heartCanvas = document.getElementById('heart-canvas');
const heartCtx = heartCanvas.getContext('2d');
let heartAnimationActive = false;

function openCard() {
    // Show a random love quote and Happy Birthday message
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    document.getElementById('love-quote').innerHTML = ` 𝑯𝒂𝒑𝒑𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚 𝑳𝒐𝒗𝒆 🎂<br>${randomQuote}`;

    // Show the message box
    document.getElementById('message-box').style.display = 'block';
    document.querySelector('.open-button').style.display = 'none';
    document.querySelector('.close-button').style.display = 'block';

    // Hide the heart.png image
    document.querySelector('.heart-image').style.display = 'none';

    // Hide the background gradient
    document.querySelector('.background').style.display = 'none';

    // Play the background music
    playMusic();

    // Start the heart animation
    startHearts();
}

function closeCard() {
    // Hide the message box
    document.getElementById('message-box').style.display = 'none';
    document.querySelector('.open-button').style.display = 'block';
    document.querySelector('.close-button').style.display = 'none';

    // Show the heart.png image again
    document.querySelector('.heart-image').style.display = 'block';

    // Show the background gradient again
    document.querySelector('.background').style.display = 'block';

    // Stop the background music
    stopMusic();

    // Stop the heart animation
    stopHearts();
}

function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}

function stopMusic() {
    const music = document.getElementById('background-music');
    music.pause();
}

function startHearts() {
    heartAnimationActive = true;
    generateHearts();
    heartAnimation();
}

function stopHearts() {
    heartAnimationActive = false;
    heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
}

function generateHearts() {
    hearts = [];
    for (let i = 0; i < 100; i++) {
        hearts.push({
            x: Math.random() * heartCanvas.width,
            y: Math.random() * -heartCanvas.height, // Start off-screen at the top
            size: Math.random() * 15 + 10,
            speed: Math.random() * 2 + 1
        });
    }
}

function drawHeart(ctx, x, y, size) {
    // Create a gradient for a 3D effect
    const gradient = ctx.createRadialGradient(x, y, size / 3, x, y, size);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)"); // Red color
    gradient.addColorStop(1, "rgba(200, 0, 0, 0.8)"); // Darker red for depth

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, 1.3); // Slightly elongate the heart vertically

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(size / 2, -size / 2, size, size / 3, 0, size);
    ctx.bezierCurveTo(-size, size / 3, -size / 2, -size / 2, 0, 0);

    // Fill the heart with gradient for a 3D effect
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add a shadow for more depth
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.restore();
}

function heartAnimation() {
    if (!heartAnimationActive) {
        heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
        return;
    }

    heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);

    for (let i = 0; i < hearts.length; i++) {
        const heart = hearts[i];
        drawHeart(heartCtx, heart.x, heart.y, heart.size);
        heart.y += heart.speed;

        // Reset heart position if it falls out of the screen
        if (heart.y > heartCanvas.height) {
            heart.y = Math.random() * -heartCanvas.height;
            heart.x = Math.random() * heartCanvas.width;
        }
    }

    requestAnimationFrame(heartAnimation);
}

window.onload = () => {
    heartCanvas.width = window.innerWidth;
    heartCanvas.height = window.innerHeight;
};
