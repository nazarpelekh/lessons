function reverce(a) {
    var b = a.split('');
//     b.unshift(b[b.length-1]);
    for(i = b.length, i > 0, i--) {
        b[i].push(); 
        return b;
    }
    alert(b);
}

reverce('Hello my friend');
