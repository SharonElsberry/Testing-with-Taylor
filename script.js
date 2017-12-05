 $(function() {
   WireEvents();
 });

 function WireEvents() {
   $('#SubmitButton').click(function() {
     var firstNameVal = $('#FirstNameTextBox').val();
     var lastNameVal = $('#LastNameTextBox').val();
     $('#DivOutput').text(firstNameVal + ' ' + lastNameVal);
     //Using unbind();
    // $('#MyDiv').unbind('mouseup');
   });

   //Handle select
   $('.MyInput').change(function() {
     alert(`This is from an Input Named  `+ $(this).attr('id'));
     $(this).addClass('Highlight');
   });

   //Using short-cut event functions not using .on
   $('#myID').click(function() {alert('The element myID was clicked');    });
  // $('#myID').off('click');
  // $('#otherID').click(function() {     $('#myID').click();  }); 
   
   //          $('#MyDiv').mouseenter(function () {
   //            Toggle(this);
   //$(this).css('cursor', 'pointer');
   //         })
   //       .mouseleave(function () {
   //         Toggle(this);
   //              })
   //            .mouseup(function (e) {
   //               alert($(e.target).attr('id'));
   //             $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
   //       });
   //
   //              function Toggle(div) {
   //               $(div).toggleClass('Highlight');
   //          }

   //bind() and on()
   /*  bind() is deprecated - use on() as shown below or the short-cut event functions shown above
    */

   $('#MyDiv').on('mouseenter mouseleave mouseup', function(e) {
     $(this).toggleClass('Highlight');
     $(this).css('cursor', 'pointer');
     if (e.type == 'mouseup') {
       $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
     }
   });
                   //$('#MyDiv').on('mouseenter mouseleave mouseup', function (e) {
                //    $(this).toggleClass('Highlight');
                //    $(this).css('cursor', 'pointer');
                //    if (e.type == 'mouseup') {
                //        $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
                //    }
                //});

   //Using hover()
   //            $('#MyTable tr').hover(
   //                function () {
   //                    //mousenter
   //                    $(this).css('background-color', '#efefef');
   //                },
   //                function () {
   //                    //mouseleave
   //                    $(this).css('background-color', '#fff');
   //                });

   $('#MyTable tr').hover(function() {
     $(this).toggleClass('LightHighlight');
   });

   //Using toggle()
   //            $('#MyTable tr').toggle(
   //                function () {
   //                    //mousenter
   //                    $(this).css('background-color', '#efefef');
   //                },
   //                function () {
   //                    //mouseleave
   //                    $(this).css('background-color', '#fff');
   //                },
   //                function () {
   //                    //mouseleave
   //                    $(this).css('background-color', 'Yellow');
   //                }
   //                );


   var phonesDiv = $('#PhonesDiv');

   $('#AddPhone').click(function() {
     var phoneSelDiv = $('div:eq(0)', phonesDiv).clone();
     var phoneTbDiv = $('div:eq(1)', phonesDiv).clone();
     $('select', phoneSelDiv).val('');
     $('input', phoneTbDiv).val('');
     phonesDiv.append('<div style="clear:both;" />')
       .append(phoneSelDiv)
       .append(phoneTbDiv);
   });

   //Note that live/die has been removed in jQuery 1.9+ so if you're using a newer script version
   //as in this project then you should use on/off or delegate : http://api.jquery.com/on/
   //            $('input', phonesDiv).live('keypress', function (e) {
   //                if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
   //                    e.stopPropagation();
   //                    return false;
   //                }
   //            });

   /*
   delegate() example but use on()
   phonesDiv.delegate('input', 'keypress', function (e) {
       if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
           e.stopPropagation();
           return false;
       }
   });*/

   phonesDiv.on('keypress', 'input', function(e) {
     if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
       e.stopPropagation();
       return false;
     }
   });

 }