const n = 10;
let i;
let k;
let r;
let d = [];

for (k = 1; k <= n; k++) {
    r = 0;
    for (i = 1; i <= (k - 1); i++) {
        r = 10 * r + d[i];
        d[i] = Math.floor(r/2);
        r = r - 2 * d[i];
    }
    d[k] = 5;
    console.log("." + d.join(""));
}