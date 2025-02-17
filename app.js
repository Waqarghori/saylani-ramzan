// let countDownDate = new Date("February 28, 2025 00:00:00").getTime();
//     let x = setInterval(function(){
//     let now = new Date().getTime();
//     let distance = countDownDate - now;
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes; 
//     document.getElementById("seconds").innerHTML = seconds;
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const audio = document.getElementById("myAudio");
//     const btn = document.getElementById("btn");

//     btn.addEventListener("click", function () {
//         if (audio.paused) {
//             audio.play();
//             btn.innerText = "Stop";
//         } else {
//             audio.pause();
//             audio.currentTime = 0;
//             btn.innerText = "Click For Pleasure";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    document.getElementById("current-date").textContent = formattedDate;

    // Sehri & Iftar times list with Ramadan days
    const ramadanTimings = {
        "13 Feb 2025": { "day": "1", "sehri": "05:37:12 AM", "iftar": "06:36:45 PM" },
        "14 Feb 2025": { "day": "2", "sehri": "05:36:33 AM", "iftar": "06:36:21 PM" },
        "15 Feb 2025": { "day": "3", "sehri": "05:35:49 AM", "iftar": "06:37:55 PM" },
        "16 Feb 2025": { "day": "4", "sehri": "05:34:05 AM", "iftar": "06:37:30 PM" },
        "17 Feb 2025": { "day": "5", "sehri": "05:33:36 AM", "iftar": "06:38:43 PM" },
        "18 Feb 2025": { "day": "6", "sehri": "05:32:18 AM", "iftar": "06:38:27 PM" },
        "19 Feb 2025": { "day": "7", "sehri": "05:31:42 AM", "iftar": "06:39:13 PM" },
        "20 Feb 2025": { "day": "8", "sehri": "05:30:57 AM", "iftar": "06:39:50 PM" },
        "21 Feb 2025": { "day": "9", "sehri": "05:29:26 AM", "iftar": "06:40:34 PM" },
        "22 Feb 2025": { "day": "10", "sehri": "05:28:53 AM", "iftar": "06:40:09 PM" },
        "23 Feb 2025": { "day": "11", "sehri": "05:27:14 AM", "iftar": "06:41:41 PM" },
        "24 Feb 2025": { "day": "12", "sehri": "05:26:39 AM", "iftar": "06:41:12 PM" },
        "25 Feb 2025": { "day": "13", "sehri": "05:25:23 AM", "iftar": "06:42:37 PM" },
        "26 Feb 2025": { "day": "14", "sehri": "05:24:31 AM", "iftar": "06:42:14 PM" },
        "27 Feb 2025": { "day": "15", "sehri": "05:23:45 AM", "iftar": "06:43:28 PM" },
        "28 Feb 2025": { "day": "16", "sehri": "05:22:17 AM", "iftar": "06:43:53 PM" },
        "1 Mar 2025": { "day": "17", "sehri": "05:21:58 AM", "iftar": "06:44:05 PM" },
        "2 Mar 2025": { "day": "18", "sehri": "05:20:30 AM", "iftar": "06:44:49 PM" },
        "3 Mar 2025": { "day": "19", "sehri": "05:19:41 AM", "iftar": "06:45:22 PM" },
        "4 Mar 2025": { "day": "20", "sehri": "05:18:15 AM", "iftar": "06:45:37 PM" },
        "5 Mar 2025": { "day": "21", "sehri": "05:17:54 AM", "iftar": "06:46:59 PM" },
        "6 Mar 2025": { "day": "22", "sehri": "05:16:29 AM", "iftar": "06:46:11 PM" },
        "7 Mar 2025": { "day": "23", "sehri": "05:15:43 AM", "iftar": "06:47:25 PM" },
        "8 Mar 2025": { "day": "24", "sehri": "05:14:38 AM", "iftar": "06:47:08 PM" },
        "9 Mar 2025": { "day": "25", "sehri": "05:13:12 AM", "iftar": "06:48:56 PM" },
        "10 Mar 2025": { "day": "26", "sehri": "05:12:55 AM", "iftar": "06:48:19 PM" },
        "11 Mar 2025": { "day": "27", "sehri": "05:11:47 AM", "iftar": "06:49:31 PM" },
        "12 Mar 2025": { "day": "28", "sehri": "05:10:29 AM", "iftar": "06:49:43 PM" },
        "13 Mar 2025": { "day": "29", "sehri": "05:09:39 AM", "iftar": "06:50:27 PM" },
        "14 Mar 2025": { "day": "30", "sehri": "05:08:50 AM", "iftar": "06:50:17 PM" }
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
