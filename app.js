let countDownDate = new Date("February 28, 2025 00:00:00").getTime();
    let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes; 
    document.getElementById("seconds").innerHTML = seconds;
});


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            btn.innerText = "Stop";
        } else {
            audio.pause();
            audio.currentTime = 0;
            btn.innerText = "Click For Pleasure";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    document.getElementById("current-date").textContent = formattedDate;

    // Sehri & Iftar times list with Ramadan days
    const ramadanTimings = {
        "13 Feb 2025": { day: "1", sehri: "05:37 AM", iftar: "6:36 PM" },
        "14 Feb 2025": { day: "2", sehri: "05:36 AM", iftar: "6:36 PM" },
        "15 Feb 2025": { day: "3", sehri: "05:35 AM", iftar: "6:37 PM" },
        "16 Feb 2025": { day: "4", sehri: "05:34 AM", iftar: "6:37 PM" },
        "17 Feb 2025": { day: "5", sehri: "05:33 AM", iftar: "6:38 PM" }
    };

    if (ramadanTimings[formattedDate]) {
        document.getElementById("ramadan-day").textContent = ramadanTimings[formattedDate].day;
        document.getElementById("sehri-time").textContent = ramadanTimings[formattedDate].sehri;
        document.getElementById("iftar-time").textContent = ramadanTimings[formattedDate].iftar;

        // Table highlighting
        let rows = document.querySelectorAll("#ramadan-table tr");
        rows.forEach(row => {
            if (row.innerHTML.includes(formattedDate)) {
                row.classList.add("highlight");
            }
        });
    } else {
        document.getElementById("ramadan-day").textContent = "نامعلوم";
        document.getElementById("sehri-time").textContent = "نامعلوم";
        document.getElementById("iftar-time").textContent = "نامعلوم";
    }
});
