
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "c14377e49076861c3ec09b4032919404";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    let btn11 = document.getElementById("btn1");
    let data;


    if (btn11) {
        btn11.addEventListener("click", checkweather);
        async function checkweather() {
            const city = document.getElementById("cname").value;

            const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
            if (!response.ok) {
                document.querySelector(".err").textContent = "City not found";
                return;
            }
            data = await response.json();
            localStorage.setItem("d", JSON.stringify(data));
            window.location.href = "index1.html"


        }
    }
    if (document.querySelector(".card")) {

        const dd = JSON.parse(localStorage.getItem("d"));
        console.log(dd);

        document.querySelector(".temp1").textContent = dd.main.temp + "°C";
        let t2 = document.querySelector(".temp2");
        let e = document.querySelector(".ee");
        document.querySelector(".phh1").textContent = dd.main.humidity + "%";
        document.querySelector(".phh2").textContent = dd.wind.speed + " km/h";
        document.querySelector(".yy").textContent = dd.name;
        let x = document.querySelector(".myvideo source");
        if (dd.main.temp <= 0) {
            t2.textContent = "The air feels crisp and biting";
            e.textContent = "❄️";
            x.src = "cold_bg.mp4";
            document.querySelector(".myvideo").load();

        }
        else if ((dd.main.temp > 0) && (dd.main.temp <= 15)) {
            t2.textContent = "overcast skies and intermittent rain";
            e.textContent = "🌧️";
            x.src = "rain.mp4";
            document.querySelector(".myvideo").load();
        }
        else if ((dd.main.temp > 15) && (dd.main.temp <= 25)) {
            t2.textContent = "Pleasantly warm with gentle breezes";
            e.textContent = "🌤️";
            x.src = "mild.mp4";
            document.querySelector(".myvideo").load();
        }
        else if ((dd.main.temp > 25) && (dd.main.temp <= 35)) {
            t2.textContent = "The sun feels bright and energizing";
            e.textContent = "☀️";
            x.src = "hot.mp4";
            document.querySelector(".myvideo").load();
        } else {
            t2.textContent = "The heat is intense and often stifling";
            e.textContent = "🥵";
            x.src = "hott.mp4";
            document.querySelector(".myvideo").load();
        }


    }




});