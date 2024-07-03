for (let dialog of document.querySelectorAll("dialog")) {
    if (dialog.dataset.handler === "hash-modal") {
        let dialogButtonClose = dialog.querySelector(".hash-modal-close");
        dialog.addEventListener('click', (e) => { if (dialog == e.target) dialog.close(); });
        dialogButtonClose.addEventListener('click', () => { dialog.close(); })
        dialog.addEventListener("close", () => { history.pushState("", document.title, window.location.pathname + window.location.search); })
    }
}

function hashWatcher() {
    if (location.hash) {
        let hash = location.hash.replace("#", "");
        let dialog = document.getElementById(hash);
        if (dialog.dataset.handler !== "hash-modal") return;
        dialog.showModal();
    }
}

window.addEventListener('DOMContentLoaded', hashWatcher)
window.addEventListener('hashchange', hashWatcher);
