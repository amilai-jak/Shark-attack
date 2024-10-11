const url="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?";

async function fetchData() {
    const response = await fetch(url)
        const data = await response.json();
        
    for (let index = 0; index < data.results.length; index++) {
        

        const element = document.querySelector(".boxes")
        element.innerHTML += "<div class='box'>"+
            "<p>"+ "Name: "+ data.results[index].name+ "</p>"+
            "<p>" + "Age: "+ data.results[index].age+ "</p>"+
            "<p>" + "Sex: " + data.results[index].sex+ "</p>"+
            "<p>" + "Date: "+ data.results[index].date+ "</p>"+
            "<p>" + "Species: "+ data.results[index].species+ "</p>" +
        "</div>"

        
    }
}
fetchData()