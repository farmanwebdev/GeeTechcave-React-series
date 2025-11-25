 // <====== Simple mobile menu toggle ======>
    (function(){
        const toggle = document.querySelector('.toggle');
        const navLinks = document.querySelector('.nav-links');
        if (!toggle || !navLinks) return;
        toggle.addEventListener('click', function(){
            navLinks.classList.toggle('active');
        });
    })();