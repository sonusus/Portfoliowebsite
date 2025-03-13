// Smooth scrolling effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});




//
document.addEventListener("DOMContentLoaded", function () {
    // Animate Technical Skill Progress Bars
    document.querySelectorAll(".progress").forEach((progress) => {
        gsap.to(progress, {
            width: progress.getAttribute("data-width"),
            duration: 1.5,
            ease: "power2.out",
        });
    });

    // Animate Professional Skill Circular Progress
    document.querySelectorAll(".circular-progress").forEach((circle) => {
        let percent = circle.getAttribute("data-percent");
        let angle = (percent / 100) * 360;

        gsap.to(circle, {
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
                let progressAngle = this.progress() * angle;
                circle.style.background = `conic-gradient(#00d4ff ${progressAngle}deg, #333 ${progressAngle}deg)`;
                circle.innerHTML = `${Math.round((this.progress()) * percent)}%`;
            }
        });
    });
});
