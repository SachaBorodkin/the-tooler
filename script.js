function openModal(id) {
    document.querySelectorAll('.modal-panel').forEach(panel => {
        panel.style.display = 'none';
    });

    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
    }
}