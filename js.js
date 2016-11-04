function reverce(a) {
    var b = a.split('');
    var c = [];
//     b.unshift(b[b.length-1]);
    for(i = b.length; i >= 0; i--) {
        c.push(b[i]);
    }
    alert(c.join(''));
    
}

reverce('Hello my friend');
