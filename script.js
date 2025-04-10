function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imageSrc; // Chỉ hiển thị khi có ảnh
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "none";
    modalImage.src = ""; // Xóa src để tránh hiển thị ảnh cũ hoặc khung trống
}

// Đóng modal khi bấm ra ngoài
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

window.onload = function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "none"; // Đảm bảo modal bị ẩn
    modalImage.src = ""; // Xóa src để tránh hiển thị ảnh cũ
};