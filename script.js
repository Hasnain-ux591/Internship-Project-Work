document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Countdown Timer Logic
    const countdown = () => {
        const timeBoxes = document.querySelectorAll('.time-box');
        if (timeBoxes.length === 0) return;

        // Extract current values from the HTML
        let days = parseInt(timeBoxes[0].textContent);
        let hours = parseInt(timeBoxes[1].textContent);
        let mins = parseInt(timeBoxes[2].textContent);
        let secs = parseInt(timeBoxes[3].textContent);

        const timer = setInterval(() => {
            if (secs > 0) {
                secs--;
            } else {
                secs = 59;
                if (mins > 0) {
                    mins--;
                } else {
                    mins = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 23;
                        if (days > 0) days--;
                    }
                }
            }

            // Update UI
            timeBoxes[0].innerHTML = `${days.toString().padStart(2, '0')}<span>Days</span>`;
            timeBoxes[1].innerHTML = `${hours.toString().padStart(2, '0')}<span>Hour</span>`;
            timeBoxes[2].innerHTML = `${mins.toString().padStart(2, '0')}<span>Min</span>`;
            timeBoxes[3].innerHTML = `${secs.toString().padStart(2, '0')}<span>Sec</span>`;

            if (days === 0 && hours === 0 && mins === 0 && secs === 0) clearInterval(timer);
        }, 1000);
    };

    countdown();

    // 2. Sidebar Activity
    const menuItems = document.querySelectorAll('.sidebar-nav li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // 3. Simple Form Handling
    const rfqBtn = document.querySelector('.rfq-form .btn-primary');
    rfqBtn?.addEventListener('click', () => {
        const val = document.querySelector('.rfq-form input').value;
        if(val) alert(`Quote request for "${val}" has been sent!`);
        else alert("Please enter the item you need.");
    });
});
