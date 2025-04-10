AOS.init();

function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imageSrc; 
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "none";
    modalImage.src = ""; 
}


window.onclick = function (event) {
    const imageModal = document.getElementById("imageModal");
    const contactModal = document.getElementById("contactModal");

    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }

    if (event.target === contactModal) {
        closeContactModal();
    }
};

function openContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'flex';

    sessionStorage.setItem('modalOpened', 'true');
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';

    sessionStorage.removeItem('modalOpened');
}

emailjs.init("jKbLJhoy1GYllvnTf"); 

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const serviceID = "service_3wkbt6e"; 
    const templateID = "template_wxw9u1f"; 

    const form = event.target;

    emailjs.sendForm(serviceID, templateID, form).then(
        function () {
            alert("Your message has been sent successfully!");
            form.reset(); 
        },
        function (error) {
            alert("Failed to send your message. Please try again later.");
            console.error("EmailJS Error:", error);
        }
    );
});


const text = "Backend Developer";
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeLoop() {
    const currentText = text.substring(0, index);
    typingElement.textContent = currentText;

    if (!isDeleting) {
        if (index < text.length) {
            index++;
        } else {
            isDeleting = true;
            setTimeout(typeLoop, 1500); // Dừng lại trước khi xóa
            return;
        }
    } else {
        if (index > 0) {
            index--;
        } else {
            isDeleting = false;
        }
    }

    setTimeout(typeLoop, isDeleting ? 70 : 120); // tốc độ xóa nhanh hơn một chút
}

window.onload = function () {
    typeLoop();

    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    if (imageModal) {
        imageModal.style.display = "none";
        modalImage.src = "";
    }

    const contactModal = document.getElementById("contactModal");
    if (contactModal) {
        contactModal.style.display = "none";
    }
};



document.addEventListener("DOMContentLoaded", () => {
    const observers = document.querySelectorAll('.details-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    observers.forEach(el => {
        el.classList.add('fade-in'); // khởi đầu ẩn
        observer.observe(el); // theo dõi mỗi phần tử
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const leftElements = document.querySelectorAll('.details-container.from-left');
    const rightElements = document.querySelectorAll('.details-container.from-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    leftElements.forEach(el => observer.observe(el));
    rightElements.forEach(el => observer.observe(el));
});