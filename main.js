

function fetchData(pagina){

  url = 'https://catfact.ninja/facts?page='+pagina;
    
    params = {
        "method": "GET" 
    };
     
    return fetch(url, params);
}


// function firstPage(){
//     pagina = 1;
// }

// function lastPage(){
//     pagina = 34;
// }


// function nextPage(){
//     if(pagina<34){
//     pagina++;
// }
// }

// function prePage(){

//     if(pagina>1){
//          pagina--;
// }
// }



 // if (onclick="callRestApi(1)" == 0) {
            //     pagina = 1;
            // } else if (onclick="callRestApi(2)" == 1) {
            //     pagina = 34;
            // } else if (onclick="callRestApi(2)" == 2 && pagina < 34) {
            //     pagina++;
            // } else if (onclick="callRestApi(2)" == 3 && pagina > 1) {
            //     pagina--;
            // }