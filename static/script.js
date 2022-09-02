//Sidebar Code Start

    //For On Mouse Over

    document.getElementById("sideabout").addEventListener("mouseenter", function() {
        borderopacity(0);
    });

    document.getElementById("sidecode").addEventListener("mouseenter", function() {
        borderopacity(1);
    });

    document.getElementById("sideteam").addEventListener("mouseenter", function() {
        borderopacity(2);   
    });

    document.getElementById("sideeducation").addEventListener("mouseenter", function() {
        borderopacity(3);
    });

    //For On Mouse Move
    document.getElementById("sideabout").addEventListener("mouseleave", function() {
        borderopacity(4);
    });

    document.getElementById("sidecode").addEventListener("mouseleave", function() {
        borderopacity(5);
    });

    document.getElementById("sideteam").addEventListener("mouseleave", function() {
        borderopacity(6); 
    });

   document.getElementById("sideeducation").addEventListener("mouseleave", function() {
    borderopacity(7);  
   });

    //Function For Changing Opacity Of Box Around Sidebar Navigation
    function borderopacity(x) {
        if (x == 0 || x == 1 || x == 2 || x == 3){ //activates on mouse over
            borderopac(x);
            if (x != 0) document.getElementById("sideabout").style.outlineColor = "rgba(255, 255, 255, 0)";
            if (x != 1) document.getElementById("sidecode").style.outlineColor = "rgba(255, 255, 255, 0)";
            if (x != 2) document.getElementById("sideteam").style.outlineColor = "rgba(255, 255, 255, 0)";
            if (x != 3) document.getElementById("sideeducation").style.outlineColor = "rgba(255, 255, 255, 0)";
        } 
        if (x == 4 || x == 5 || x == 6 || x == 7) { //activates on mouse leave
            borderopacdec(x);
        }
    
    function borderopacdec(x) { //sets all opacities back to 0
        if (x == 4) document.getElementById("sideabout").style.outlineColor = "rgba(255, 255, 255, 0)";
        if (x == 5) document.getElementById("sidecode").style.outlineColor = "rgba(255, 255, 255, 0)";
        if (x == 6) document.getElementById("sideteam").style.outlineColor = "rgba(255, 255, 255, 0)";
        if (x == 7) document.getElementById("sideeducation").style.outlineColor = "rgba(255, 255, 255, 0)";
    }

    function borderopac(x) { //increments border opacity and clears interval when mouse is moved
            let items = [
                "sideabout", "sidecode", "sideteam", "sideeducation",
            ];
            let y = document.getElementById(items[x]);

            y.style.outlineColor = "rgba(255, 255, 255, 1)";
        }
    }

//Side Bar Code End

//Coding Experience Code Start
document.getElementById("codeinformation").addEventListener("mouseover", function() { //listens for mouseover
    let y1 = document.getElementById("yearsnumber1");
    let y2 = document.getElementById("yearsnumber2");
    let y3 = document.getElementById("yearsnumber3");
    let y4 = document.getElementById("yearsnumber4");
    let y5 = document.getElementById("yearsnumber5");

    let id = setInterval(itemanimation, 100);
    var opacity1 = 0;

    function itemanimation() {
        if (opacity1 < 1.1) {    
            opacity1 += .1; //increments opacity
            y1.style.opacity = opacity1;
            y2.style.opacity = opacity1;
            y3.style.opacity = opacity1;
            y4.style.opacity = opacity1;
            y5.style.opacity = opacity1;
        } else {
            clearintervalld();
        }
    }

    function clearintervalld() { //function for clearing the interval of the animation
        clearInterval(id);
    }
}, {once: true}); //runs the event listener only once


//Coding Experience Code End

//Projects Grid Start

function textincopac(x) {
    let y = document.getElementById(x);
    var opacity1 = 0;
    y.style.opacity = .8;
}
    //mouse over for grid text start
        document.getElementById("item1").addEventListener("mouseover", function() {
            textincopac("item11");
            document.getElementById("item22").style.opacity = 0;
            document.getElementById("item33").style.opacity = 0;
            document.getElementById("item44").style.opacity = 0;
        });

        document.getElementById("item2").addEventListener("mouseover", function() {
            textincopac("item22");
            document.getElementById("item11").style.opacity = 0;
            document.getElementById("item33").style.opacity = 0;
            document.getElementById("item44").style.opacity = 0;
        });

        document.getElementById("item3").addEventListener("mouseover", function() {
            textincopac("item33");
            document.getElementById("item22").style.opacity = 0;
            document.getElementById("item11").style.opacity = 0;
            document.getElementById("item44").style.opacity = 0;
        });

        document.getElementById("item4").addEventListener("mouseover", function() {
            textincopac("item44");
            document.getElementById("item22").style.opacity = 0;
            document.getElementById("item33").style.opacity = 0;
            document.getElementById("item11").style.opacity = 0;
        });
    //mouse over for grid text end

    //mouse leave for grid text start
        document.getElementById("item1").addEventListener("mouseleave", function() {
            document.getElementById("item11").style.opacity = 0;
        });

        document.getElementById("item2").addEventListener("mouseleave", function() {
            document.getElementById("item22").style.opacity = 0;
        });

        document.getElementById("item3").addEventListener("mouseleave", function() {
            document.getElementById("item33").style.opacity = 0;
        });

        document.getElementById("item4").addEventListener("mouseleave", function() {
            document.getElementById("item44").style.opacity = 0;
        });
    //mouse leave for grid text end

//Projects Grid End

//Sidebar Code Start

    //Sidebar Scroll Button Start

    $("#sideabout").click(function() {
        //animate html body and use jQuery scrollTop
            $('html, body').animate({
                scrollTop: $("#aboutme").offset().top
            }, 1000);
    });

    $("#sidecode").click(function() {
        //animate html body and use jQuery scrollTop
            $('html, body').animate({
                scrollTop: $("#codingexperience").offset().top
            }, 1000);
    });

    $("#sideteam").click(function() {
        //animate html body and use jQuery scrollTop
            $('html, body').animate({
                scrollTop: $("#teamexperience").offset().top
            }, 1000);
    });

    $("#sideeducation").click(function() {
        //animate html body and use jQuery scrollTop
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 1000);
    });

    //Sidebar Scroll Button End

    //Email Window Code Start

    document.getElementById("emaillink").addEventListener("click", function() {
        document.getElementById("emailwin").style.display = "flex";

        let anione = document.getElementById("emailwin");
        let anitwo = document.getElementById("contactme");
        let id = setInterval(emailanimation, 40);
        let id2 = setInterval(emailbackanimation, 40);
        var opacity1 = 0;
        var opacity2 = 0;
    
        function emailanimation() {
            if (opacity1 < 1.1) {    
                opacity1 += .1; //increments opacity
                anitwo.style.opacity = opacity1;
            } else {
                clearInterval(id);
            }
        }

        function emailbackanimation() {
            if (opacity2 < .7) {    
                opacity2 += .1; //increments opacity
                anione.style.backgroundColor = "rgba(255, 255, 255, " + opacity2 + ")";
            } else {
                clearInterval(id2);
            }
        }
    });
    
    document.getElementById("emailwin").addEventListener("click", function() {
        document.getElementById("emailwin").style.backgroundColor = "rgba(255, 255, 255, 0)";
        document.getElementById("contactme").style.opacity = 0;
        document.getElementById("emailwin").style.display = "none"; 
    });

    //Email Window Code End

//Sidebar Code End

//Chatbot Code Start

document.getElementById("chatbutton").addEventListener("click", function() {
    document.getElementById("chatmenu").style.display = "inline-block";
    document.getElementById("chatbutton").style.display = "none";
});

document.getElementById("chatexit").addEventListener("click", function() {
    document.getElementById("chatbutton").style.display = "inline-block";
    document.getElementById("chatmenu").style.display = "none";
});

document.getElementById("questionbutton").addEventListener("click", function() {
    document.getElementById("mainmenupage").style.display = "none";
    document.getElementById("questionsmainmenu").style.display = "inline-block";
});

document.getElementById("backtomenu").addEventListener("click", function() {
    document.getElementById("questionsmainmenu").style.display = "none";
    document.getElementById("mainmenupage").style.display = "inline-block";
});

document.getElementById("submitquestion").addEventListener("click", function() {
    var bubble = document.createElement('div');
    bubble.style.backgroundColor = "green";
    bubble.style.width = "192px";
    bubble.style.height = "39.32px";
    bubble.style.borderRadius = "19.2px";
    bubble.style.marginTop = "19.66px";
    bubble.style.marginLeft = "19.2px";
    bubble.style.textAlign = "center";
    bubble.textContent = document.getElementById("questionsinput").value
    document.getElementById("useranswers").appendChild(bubble);

    var botbubble = document.createElement('div');
    botbubble.style.backgroundColor = "green";
    botbubble.style.width = "192px";
    botbubble.style.height = "39.32px";
    botbubble.style.borderRadius = "19.2px";
    botbubble.style.marginTop = "19.66px";
    botbubble.style.marginLeft = "19.2px";
    botbubble.style.textAlign = "center";
    document.getElementById("botanswers").appendChild(botbubble);

});
//Chatbot Code End