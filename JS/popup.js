window.onload = function() {
    // Show the popup and overlay when the page loads with fade-in effect
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    
    setTimeout(function() {
        document.getElementById('overlay').style.opacity = '1';
        document.getElementById('popup').style.opacity = '1';
    }, 10); // Timeout to trigger CSS transition

    // Close popup when "X" is clicked with fade-out effect
    document.getElementById('close-btn').onclick = function() {
        document.getElementById('overlay').style.opacity = '0';
        document.getElementById('popup').style.opacity = '0';

        setTimeout(function() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }, 2000); // Wait for 3 seconds (duration of fade-out)
    };

    // Close popup if overlay is clicked with fade-out effect
    document.getElementById('overlay').onclick = function() {
        document.getElementById('overlay').style.opacity = '0';
        document.getElementById('popup').style.opacity = '0';

        setTimeout(function() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }, 2000); // Wait for 3 seconds (duration of fade-out)
    };
};
