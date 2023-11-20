window.onload=function(){
    var lookupBtn = document.querySelector("#lookup")
    var cityBtn = document.querySelector("#city")
    var result = document.getElementById("result")
   
    lookupBtn.addEventListener("click", findCountry)
    cityBtn.addEventListener("click", findCity)
    
    //Function to find Country
    function findCountry(event){

        event.preventDefault()

        const httpRequest = new XMLHttpRequest()

        country = document.getElementById("country").value

        var phpurl = "http://localhost/info2180-lab5/world.php?country="

        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState == 4 && httpRequest.status === 200){
                result.innerHTML = httpRequest.responseText
            }else {
                result.textContent = "Error: There is an issue with this request. Please try again.";
            }
        }

        httpRequest.open("GET", phpurl + country)
        httpRequest.send()
    }

    //Function to Find City
    function findCity(event){
        
        event.preventDefault()

        const httpRequest = new XMLHttpRequest()

        country = document.getElementById("country").value

        var phpurl = "http://localhost/info2180-lab5/world.php?country="


        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState == 4 && httpRequest.status === 200){
                result.innerHTML = httpRequest.responseText
            }else {
                result.textContent = "Error: There is an issue with this request. Please try again.";
            }
        }

        httpRequest.open("GET", phpurl + country + "&context=cities")
        httpRequest.send() 
        
    }
}
