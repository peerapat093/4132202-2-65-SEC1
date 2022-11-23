
    
    var num = 10;
    let name = "Oat";
    // let Array = [10,15,"Oat"];
    const obj = {name:"Oat", age: 35};
    const objMix = { data: [
        {name:"Dang",gpa:4.3},
        {name:"Dum",gpa:208},
    ],
};
    // console.log(Array);
    console.log(num);
    console.log(name);
    console.log(obj);

    let string = num + name;
    console.log(string);

    // string = objMix.data[1].name + Array[0];
    console.log(string);

    // string = "<p>" + Array[2] + "<p>"
    // string = `<p>${Array}</p>`;
    console.log(string);

    function Add(a, b){
        return a + b;
    }

    console.log(Add(3, 5));

    document.getElementById("div1").innerHTML = name;

    $(function (){
        // alert("Hello")
        $("#div1").html("Peerapat");

        $("#bt1").click(function (){
            $("#div1").html("GG");
        });

         $("#bt3").click(()=>{
        $(".in1").val("BRU");
         })

         $("#bt4").click(()=>{
        $(".in1:odd").addClass("red");
        });

        $("#div_about").load("./Pages/about.html");

    });

