function check(){
    let q = [
        document.myfrom.q1.value,
        document.myfrom.q2.value,
        document.myfrom.q3.value,
        document.myfrom.q4.value,
        document.myfrom.q5.value,
        document.myfrom.q6.value,
        document.myfrom.q7.value,
        document.myfrom.q8.value,
        document.myfrom.q9.value
    ]

    let a = 0;
    let b = 0;
    let c = 0;

    for (let i = 0; i < q.length; i++) {

        if(q[i] == "a")
        {
            a++;
        }
        if(q[i] == "b")
        {
            b++;
        }
        if(q[i] == "c")
        {
            c++;
        }
    }
    alert("a="+a+" b="+b+" c="+c);
}