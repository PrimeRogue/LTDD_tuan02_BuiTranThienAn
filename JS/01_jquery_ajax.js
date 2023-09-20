const endpoint = "https://62c1218ceff7f7856f0990a7.mockapi.io/shopeelink/link";
$.ajax({
    url: endpoint,
    beforeSend: function(xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
}).done(function(data) {
    if (console && console.log) {
        console.log("Sample of Data: ", data.slice(0, 100));
    }
});