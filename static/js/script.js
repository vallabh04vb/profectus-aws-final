$('select[name*="location"]').change(function() {
    var selectedOptions = $('select option:selected');
    $('select option').removeAttr('disabled');
    selectedOptions.each(function() {        
        var value = this.value;
        if (value !== ''){           
        var id = $(this).parent('select[name*="location"]').attr('id');
        var options = $('select:not(#' + id + ') option[value=' + value + ']');
        options.attr('disabled', 'true');
        }
    });
});	

    // Initialize the carousel
  



<script>
  const button = document.getElementById('about');
  const elementToAnimate = document.querySelector('#resumepic');

  button.addEventListener('click', () = {
    elementToAnimate.classList.add('slideInR')
  }
  );
</script>
