function pressed(){
    document.getElementById('lbsinput').addEventListener('input',function(e){
        var pounds = e.target.value;
        document.getElementById('kg').innerHTML = kgFromPound(pounds);
        document.getElementById('gram').innerHTML = gramFromPound(pounds);
        document.getElementById('ounce').innerHTML = ounceFromPound(pounds);
    });
}

function kgFromPound(pounds){
    return (pounds/2.205);
}

function gramFromPound(pounds){
    return (pounds/2.205)*1000;
}

function ounceFromPound(pounds){
    return (pounds*16);
}