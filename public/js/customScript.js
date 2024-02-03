$(document).ready(function () {
    // Set default values
    $('#wordsPerLine').val(17);
    $('#minutesRead').val(2);

    // Attach click event to the button
    $('#calculateButton').on('click', function () {
      // Get input values
      const linesRead = parseInt($('#linesRead').val(), 10);
      const minutesRead = parseInt($('#minutesRead').val(), 10);
      const wordsPerLine = parseInt($('#wordsPerLine').val(), 10);

      // Validate inputs
      if (isNaN(linesRead) || isNaN(minutesRead) || isNaN(wordsPerLine) ||
          linesRead <= 0 || minutesRead <= 0 || wordsPerLine <= 0) {
        alert('Please enter valid numbers for lines, minutes, and average words per line.');
        return;
      }

      // Calculate lines per minute
      const linesPerMinute = linesRead / minutesRead;

      // Calculate words per minute
      const wordsPerMinute = linesPerMinute * wordsPerLine;

      // Display results as an unordered list
      const outputResults = $('#outputResults');
      outputResults.html(`<ul><li>Lines per minute: ${linesPerMinute.toFixed(2)}</li><li>Words per minute: ${wordsPerMinute.toFixed(2)}</li></ul>`);

      // Replace the button with the link
    });
  });

  $(document).ready(function () {
    // Open modal when the trigger button is clicked
    $(".modal-trigger").on("click", function () {
      var targetModal = $(this).data("modal-target");
      $(targetModal).addClass("active");
      $("body").css("overflow", "hidden"); // Prevent scrolling when modal is open
    });

    // Close modal only when the close button is clicked
    $(".close-modal").on("click", function () {
      var parentModal = $(this).closest(".modal");
      parentModal.removeClass("active");
      $("body").css("overflow", "auto"); // Allow scrolling when modal is closed
    });
  });

  $(document).ready(function () {
    // Function to execute when the timer is up
    function timesUp() {
        $('#timerButton').prop('disabled', false).addClass('yellow').text('Time Out');
    }

    // Function to start the timer
    function startTimer(duration, callback) {
        var timer = duration;
        var intervalId = setInterval(function () {
            // Format minutes and seconds as mm:ss
            var minutes = Math.floor(timer / 60);
            var seconds = timer % 60;
            var formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            $('#timerButton').text(formattedTime);

            if (--timer < 0) {
                clearInterval(intervalId);
                callback(); // Call the provided callback when the timer is up
            }
        }, 1000);
    }

    // Read the initial duration from the data-duration attribute
    var initialDuration = parseInt($('#timerButton').data('duration'), 10);
    startTimer(initialDuration, timesUp);
    $('#timerButton').prop('disabled', true); // Disable the button during the timer
});