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
        "17 Feb 2025": { day: "5", sehri: "05:33 AM", iftar: "6:38 PM" },
        "18 Feb 2025": { day: "6", sehri: "05:32 AM", iftar: "6:38 PM" },
        "19 Feb 2025": { day: "7", sehri: "05:31 AM", iftar: "6:39 PM" },
        "20 Feb 2025": { day: "8", sehri: "05:30 AM", iftar: "6:39 PM" },
        "21 Feb 2025": { day: "9", sehri: "05:29 AM", iftar: "6:40 PM" },
        "22 Feb 2025": { day: "10", sehri: "05:28 AM", iftar: "6:40 PM" },
        "23 Feb 2025": { day: "11", sehri: "05:27 AM", iftar: "6:41 PM" },
        "24 Feb 2025": { day: "12", sehri: "05:26 AM", iftar: "6:41 PM" },
        "25 Feb 2025": { day: "13", sehri: "05:25 AM", iftar: "6:42 PM" },
        "26 Feb 2025": { day: "14", sehri: "05:24 AM", iftar: "6:42 PM" },
        "27 Feb 2025": { day: "15", sehri: "05:23 AM", iftar: "6:43 PM" },
        "28 Feb 2025": { day: "16", sehri: "05:22 AM", iftar: "6:43 PM" },
        "1 Mar 2025": { day: "17", sehri: "05:21 AM", iftar: "6:44 PM" },
        "2 Mar 2025": { day: "18", sehri: "05:20 AM", iftar: "6:44 PM" },
        "3 Mar 2025": { day: "19", sehri: "05:19 AM", iftar: "6:45 PM" },
        "4 Mar 2025": { day: "20", sehri: "05:18 AM", iftar: "6:45 PM" },
        "5 Mar 2025": { day: "21", sehri: "05:17 AM", iftar: "6:46 PM" },
        "6 Mar 2025": { day: "22", sehri: "05:16 AM", iftar: "6:46 PM" },
        "7 Mar 2025": { day: "23", sehri: "05:15 AM", iftar: "6:47 PM" },
        "8 Mar 2025": { day: "24", sehri: "05:14 AM", iftar: "6:47 PM" },
        "9 Mar 2025": { day: "25", sehri: "05:13 AM", iftar: "6:48 PM" },
        "10 Mar 2025": { day: "26", sehri: "05:12 AM", iftar: "6:48 PM" },
        "11 Mar 2025": { day: "27", sehri: "05:11 AM", iftar: "6:49 PM" },
        "12 Mar 2025": { day: "28", sehri: "05:10 AM", iftar: "6:49 PM" },
        "13 Mar 2025": { day: "29", sehri: "05:09 AM", iftar: "6:50 PM" },
        "14 Mar 2025": { day: "30", sehri: "05:08 AM", iftar: "6:50 PM" }
    };

    if (ramadanTimings[formattedDate]) {
        document.getElementById("ramadan-day").textContent = ramadanTimings[formattedDate].day;
        document.getElementById("sehri-time").textContent = ramadanTimings[formattedDate].sehri;
        document.getElementById("iftar-time").textContent = ramadanTimings[formattedDate].iftar;

        // Table highlighting
        let rows = document.querySelectorAll("#ramadanTable tr");
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
