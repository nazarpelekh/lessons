function reverce(a) {
    var b = a.split(" ");
    b.unshift(b[b.length-1]);
    alert(b);
}

reverce('Hello my friend');