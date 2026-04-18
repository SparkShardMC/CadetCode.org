// --- THE BRAIN: SAVING & LOADING ---

/**
 * Saves the current mission path and completed levels.
 * No backend required! This stays in the user's browser.
 */
function saveMyProgress() {
    const currentPath = window.location.pathname;
    
    // Save the current URL as the "Resume" point
    localStorage.setItem('cadet_save_point', currentPath);
    
    // Create a timestamp to show when it was last synced
    const now = new Date();
    const timeStr = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');
    
    // Update the UI
    document.getElementById('saveStatus').innerText = "Status: Synced at " + timeStr;
    document.getElementById('saveBtn').style.boxShadow = "0 0 20px #00ff00";
    
    // Tell the Stickman to react (Calling function from uiLogic.js)
    updateStickman("Mission Log Updated! 💾", "happy");
}

/**
 * Loads the last saved mission.
 */
function resumeMission() {
    const lastSpot = localStorage.getItem('cadet_save_point');
    
    if (lastSpot && lastSpot !== "/index.html") {
        window.location.href = lastSpot;
    } else {
        // If no save, send them to Level 1
        window.location.href = "levels/level_01_print/index.html";
    }
}
