function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the modal
var modal = document.getElementById("feedbackModal");


// Get the <span> element that closes the modal
var btnClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openPopup() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closePopup() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// CountDown
var countDownDate = new Date("Jan 19, 2022 0:0:0").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    //If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "KHUYẾN MÃI HẾT HẠN";
    }
}, 1000);

//Get the button:
mybutton = document.getElementById("btnToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// chat form
function openForm() {
    document.getElementById("chatForm").style.display = "block";
}

function closeForm() {
    document.getElementById("chatForm").style.display = "none";
}


function clearForm() {
    document.myForm.reset();
}

// Calculate the total payment
var qty1 = document.getElementById("qtyProduct1"),
    qty2 = document.getElementById("qtyProduct2"),
    checkboxs = document.getElementsByClassName("checkboxs"),
    checked1 = document.getElementById("checkboxProduct1"),
    checked2 = document.getElementById("checkboxProduct2"),
    total1 = document.getElementById("total1"),
    total2 = document.getElementById("total2"),
    total = document.getElementById("total"),
    payment = document.getElementById("payment"),
    totalitems = [total1, total2],
    checkeditems = [checked1, checked2];
qty1.addEventListener("keyup", function() {
    if (qty1.value < 0) {
        alert("Nhập sai rồi!");
        qty1.value = "";
        return;
    }
    total1.value = (qty1.value) * 950000;
});
qty2.addEventListener("keyup", function() {
    if (qty2.value < 0) {
        alert("Nhập sai rồi!");
        qty2.value = "";
        return;
    }
    total2.value = (qty2.value) * 750000;
});
var temp = 0;

checked1.addEventListener("change", function() {
    if (checked1.checked) {
        temp = parseInt(total1.value);
        total.value = parseInt(temp);
        payment.value = parseInt(total.value) + 35000;
        if (checked2.addEventListener("change", function() {
                if (checked2.checked) {
                    temp += parseInt(total2.value);
                    total.value = parseInt(temp);
                    payment.value = parseInt(total.value) + 35000;
                } else {
                    temp = parseInt(total1.value);
                    total.value = parseInt(temp);
                    payment.value = parseInt(total.value) + 35000;
                }
            }));
    }
})
checked2.addEventListener("change", function() {
    if (checked2.checked) {
        temp = parseInt(total2.value);
        total.value = parseInt(temp);
        payment.value = parseInt(total.value) + 35000;
        if (checked1.addEventListener("change", function() {
                if (checked1.checked) {
                    temp += parseInt(total1.value);
                    total.value = parseInt(temp);
                    payment.value = parseInt(total.value) + 35000;
                } else {
                    temp = parseInt(total2.value);
                    total.value = parseInt(temp);
                    payment.value = parseInt(total.value) + 35000;
                }
            }));
    }
})


//RESPONSIVE
function myFunction() {
    var a = document.getElementById("myTopnav");
    if (a.className === "topnav") {
        a.className += " responsive";
    } else {
        a.className = "topnav";
    }
}