// ============================================
// SMOOTH SCROLL TO TOP
// ============================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all link cards
document.querySelectorAll('.link-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// CLICK ANALYTICS (Optional)
// ============================================
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const linkTitle = this.querySelector('h3').textContent;
        console.log(`Clicked: ${linkTitle}`);
        
        // You can add Google Analytics or other tracking here
        // Example: gtag('event', 'click', { 'event_category': 'Social Link', 'event_label': linkTitle });
    });
});

// ============================================
// LOGO ROTATION ON SCROLL
// ============================================
let lastScroll = 0;
const logo = document.querySelector('.logo-container');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        logo.style.transform = `rotate(${currentScroll * 0.5}deg)`;
    } else {
        // Scrolling up
        logo.style.transform = `rotate(${-currentScroll * 0.5}deg)`;
    }
    
    lastScroll = currentScroll;
});

// ============================================
// PARTICLES EFFECT (Optional Enhancement)
// ============================================
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = 'rgba(255, 215, 0, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-5px';
    particle.style.zIndex = '0';
    
    document.body.appendChild(particle);
    
    const fallDuration = 3 + Math.random() * 3;
    const fallDistance = window.innerHeight + 10;
    const drift = (Math.random() - 0.5) * 100;
    
    particle.animate([
        { 
            transform: 'translateY(0) translateX(0)',
            opacity: 0
        },
        {
            transform: `translateY(${fallDistance}px) translateX(${drift}px)`,
            opacity: 1
        },
        {
            transform: `translateY(${fallDistance}px) translateX(${drift}px)`,
            opacity: 0
        }
    ], {
        duration: fallDuration * 1000,
        easing: 'linear'
    }).onfinish = () => particle.remove();
}

// Create particles periodically
setInterval(createParticle, 300);

// ============================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ============================================
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        // Show copied notification
        const notification = document.createElement('div');
        notification.textContent = 'Copied!';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 215, 0, 0.9);
            color: #0a0e27;
            padding: 15px 30px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            animation: fadeOut 1s forwards;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 1000);
    });
}

// Add copy functionality to email and phone
document.querySelector('.link-card.email')?.addEventListener('click', function(e) {
    e.preventDefault();
    const email = this.querySelector('.link-content p').textContent;
    copyToClipboard(email, this);
    setTimeout(() => {
        window.location.href = this.href;
    }, 500);
});

document.querySelector('.link-card.phone')?.addEventListener('click', function(e) {
    e.preventDefault();
    const phone = this.querySelector('.link-content p').textContent;
    copyToClipboard(phone, this);
    setTimeout(() => {
        window.location.href = this.href;
    }, 500);
});

// ============================================
// FADE OUT ANIMATION
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🎬 GAYANDISSANAYAKE PHOTOGRAPHY 📸', 
    'font-size: 20px; font-weight: bold; color: #ffd700; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%cCapturing Your Precious Moments', 
    'font-size: 14px; color: #b0b8d4;');

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});