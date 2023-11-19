window.onload = function () {
    var lookupBtn = document.querySelector("#lookup");
    var cityBtn = document.querySelector("#city");
    var result = document.getElementById("result");
    var httpRequest = new XMLHttpRequest();

    lookupBtn.addEventListener("click", FindCountry);
    cityBtn.addEventListener("click", FindCity);

    // Function to find Country
    function FindCountry(event) {
        event.preventDefault();
        var country = document.getElementById("country").value; // Move this line inside the function

        var phpurl = "http://localhost/info2180-lab5/world.php?country=" + encodeURIComponent(country);

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    result.innerHTML = response;
                } else {
                    result.textContent = "Error: There is an issue with this request. Please try again.";
                }
            }
        };
        httpRequest.open('GET', phpurl, true);
        httpRequest.send();
    };

    // Function to find City
    function FindCity(event) {
        event.preventDefault();
        var country = document.getElementById("country").value; // Move this line inside the function

        var phpurl = "http://localhost/info2180-lab5/world.php?country=" + encodeURIComponent(country) + "&lookup=cities";

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    result.innerHTML = response;
                } else {
                    result.textContent = "Error: There is an issue with this request. Please try again.";
                }
            }
        };
        httpRequest.open('GET', phpurl, true);
        httpRequest.send();
    };
};
