let dropp=document.getElementById('dropp')
    console.log(dropp);
    let number=1

    dropp.addEventListener('click',function () {
      console.log("working");
        number++;
        
        droppp=document.getElementById('dropdown')
        if (number%2==0) {
          droppp.classList.toggle("mystyle");
      // droppp.classList.add("mystyle");
      console.log(number);     
        }
       else{
        droppp.classList.toggle("mystyle");
        // droppp.classList.add("mystyles");
        
        number=1
       }
    })

    let open=document.getElementById('open');

    open.addEventListener('click',function () {
        console.log('this mwwnu');
        elemts=document.getElementById('menu')
        elemts.classList.toggle("dis");
    })