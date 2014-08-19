var apiURL = 'http://api.domaintools.com/v1/';

function requestRegistrar(domain) {
  var registrar;
  console.log(domain);
  var domainArr = domain.split('.');
  var cleanDomain = domainArr[domainArr.length-2]+"."+domainArr[domainArr.length-1];
  console.log(cleanDomain);
  $.get(apiURL+cleanDomain+'/whois/', function(data) {
    console.log(data);
    var resp = data.response;
    registrar = resp.registration.registrar;
    console.log(registrar);

    console.log("changing dom");
    $("#Registrar").text(registrar);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  console.log("Run");
  chrome.runtime.sendMessage({type:'request_domain'},function(resp) {
    console.log("got domain");
    requestRegistrar(resp.domain[0]);
  });
});
