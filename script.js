// script.js

function startTest() {
    // Reset chart and values
    document.getElementById("ping-value").textContent = "Testing...";
    document.getElementById("download-value").textContent = "Testing...";
    document.getElementById("upload-value").textContent = "Testing...";
    
    // Simulate results (ping, download, upload)
    setTimeout(function() {
        document.getElementById("ping-value").textContent = "62";
        document.getElementById("download-value").textContent = "8.6";
        document.getElementById("upload-value").textContent = "14.3";
    }, 2000);
}
