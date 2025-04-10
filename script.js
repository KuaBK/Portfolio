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

window.onload = function () {
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