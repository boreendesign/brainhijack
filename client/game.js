var clock;

    var level1;
    //level1 =



    $( document ).ready(function() {
      $('body').find('.letter_input').prop('disabled', true);
      /*clock = new FlipClock($('.your-clock'), {
        clockFace: 'MinuteCounter'
      }).reset();

      $( "body" ).data( "clock", clock );
      */
      current_time = 0;
        console.log(FlipClock);
      clock = new FlipClock($('.levelclock'), 0, {
          autoStart: false,
					clockFace: 'MinuteCounter',
		        callbacks: {
		        	interval: function() {
                var time = this.factory.getTime().time;
		        		if(time && time > current_time) {
                  //console.log(time + ' - ' +(time % 1));
                  if (time % 1 == 0) {
                    if(time == 6){
                      setValueOfProgressBars();
                    }
                  }
			        	}
                current_time = time;


		        	}
		        }
				});


    $('#start_timer').click(function() {
        clock.reset();
        clock.start();
        $('#stop_timer').show();
        $('#start_timer').hide();
        $('body').find('.letter_input').prop('disabled', false);
      });

      $('#stop_timer').click(function() {
        clock.stop();
        $('#start_timer').show();
        $('#stop_timer').hide();
      });

      $('.letter_input').keyup(function(e){

        $input = $(this).parent().find('.letter_input');
        $text = $(this).parent().find('.letter_text');

        //console.log(  $letter_text.val() + ' ' + $letter_input.val());
        if($text.val().startsWith($input.val())){
          $(this).parent().find('.input_status').removeClass('red_gly').removeClass('complete_gly').addClass('green_gly');
        }else{
          $(this).parent().find('.input_status').removeClass('green_gly').removeClass('complete_gly').addClass('red_gly');
        }

        if($text.val() == $input.val()){
          $(this).parent().find('.input_status').addClass('complete_gly');
        }
        $allcomplete = false;
        $container = $(this).parent().parent();
        $container.find('.input_status').each(function( index ) {
          if($(this).hasClass('complete_gly')){
            $allcomplete = true;
          }else{
            $allcomplete = false;
          }
        });

        if($allcomplete == true){
          $('#next_level').show();
            $container.find('.letter_input').prop('disabled', true);
            clock.stop();
            var time  = clock.getFaceValue();
          }
      });

      function setValueOfProgressBars(){

        decreaseDopamine();

        //console.log('setting');
        //
      }

      function increaseDopamine(){
        $('.progress .pro_dopamine').css('width', 80+'%').attr('aria-valuenow', 80);
        $('.progress .pro_cortisol').css('width', 10+'%').attr('aria-valuenow', 80);
        $('#brain').css("background-image", "url(./pics/brain_dopamine.png)");
      }

      function decreaseDopamine(){
        $('.progress .pro_dopamine').css('width', 30+'%').attr('aria-valuenow', 80);
        $('.progress .pro_cortisol').css('width', 60+'%').attr('aria-valuenow', 80);
        $('#brain').css("background-image", "url(./pics/brain_cortisol.png)");
      }

      function resetDopamine(){

        $('.progress .pro_dopamine').css('width', 50+'%').attr('aria-valuenow', 80);
        $('.progress .pro_cortisol').css('width', 20+'%').attr('aria-valuenow', 80);
        $('#brain').css("background-image", "url(./pics/brain.png)");

      }


    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });