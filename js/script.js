const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const fadeUpElements = document.querySelectorAll('.fadeup');
fadeUpElements.forEach((el) => observer.observe(el));

const fadeDownElements = document.querySelectorAll('.fadedown');
fadeDownElements.forEach((el) => observer.observe(el));

const fadeRightElements = document.querySelectorAll('.faderight');
fadeRightElements.forEach((el) => observer.observe(el));

const fadeLeftElements = document.querySelectorAll('.fadeleft');
fadeLeftElements.forEach((el) => observer.observe(el));

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach((el) => observer.observe(el));