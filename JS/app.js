 let monthly = $("#Monthly")
 let Annualy = $("#Annualy")
 let checkbox = $("#cmn-toggle-1")

 checkbox.click(function() {
     if (checkbox.val() === "Annualy") {
         $("#annualybox").slideToggle()
         $("#monthlybox").slideToggle()
     } else {
         $("#monthlybox").slideToggle()
     }
 })

 let btnsupport = $(".btn-support")

 btnsupport.click(function() {
     alert("Plan select")
 })