function reverce(a) {
    var b = a.split('');
//     b.unshift(b[b.length-1]);
    for(i = a.length, i > 0, i--) {
        b[i].push(); 
    }
    alert(b);
}

reverce('Hello my friend');
