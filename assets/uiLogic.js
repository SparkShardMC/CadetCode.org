// --- THE HEART: INTERACTIVE UI ---

/**
 * Shows the hover preview box in the sidebar.
 */
function showPreview(levelId) {
    // Hide all previews first
    const previews = document.querySelectorAll('.hover-box');
    previews.forEach(p => p.style.display = 'none');

    // Show the specific one
    const activePreview = document.getElementById('preview-' + levelId);
    if (activePreview) {
        activePreview.style.display = 'block';
    }
}

/**
 * Makes Commander Stick talk and change expressions.
 * @param {string} message - What he says.
 * @param {string} mood - 'happy', 'warning', or 'idle'.
 */
function updateStickman(message, mood) {
    const bubble = document.querySelector('.speech-bubble');
    const stickman = document.getElementById('commander-stick');

    bubble.innerText = message;

    // Change his face/pose based on mood
    if (mood === "happy") {
        stickman.innerHTML = "<pre>  (^o^)\n  <| |>\n   / \\ </pre>";
    } else if (mood === "warning") {
        stickman.innerHTML = "<pre>  (>_<)\n  --| |--\n   / \\ </pre>";
    } else {
        stickman.innerHTML = "<pre>  (o_o)\n  <| |>\n   / \\ </pre>";
    }
}

// Ensure hover boxes disappear when mouse leaves sidebar
document.querySelector('.sidebar').addEventListener('mouseleave', () => {
    const previews = document.querySelectorAll('.hover-box');
    previews.forEach(p => p.style.display = 'none');
});
