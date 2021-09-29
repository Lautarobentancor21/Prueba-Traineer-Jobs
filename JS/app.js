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

 //  monthly.click(function() {
 //      $("#monthlybox").slideToggle()
 //      $("#annualybox").slideToggle()
 //      change()
 //  })

 //  function change() {
 //      if (monthly.html() == 'Annualy') {
 //          monthly.html('Monthly')
 //      } else {
 //          monthly.html('Annualy')
 //      }
 //  }

 let btnsupport = $(".btn-support")

 btnsupport.click(function() {
     alert("Plan select")
 })