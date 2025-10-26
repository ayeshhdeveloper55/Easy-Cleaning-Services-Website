var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

        // Counter
        $('[data-toggle="counter-up"]').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });

        // WhatsApp Button Functionality
        $('#whatsappIcon').click(function() {
            const phoneNumber = '923004550539';
            const message = 'Hello! I would like to get more information about your cleaning services.';
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });

        // Contact Form Submission
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: $('#gname').val(),
                email: $('#gmail').val(),
                mobile: $('#cname').val(),
                service: $('#cage').val(),
                message: $('#message').val()
            };
            
            // Basic validation
            if (!formData.name || !formData.mobile || !formData.service) {
                alert('Please fill in all required fields: Name, Mobile, and Service Type.');
                return;
            }
            
            // Show success message
            $('#successAlert').fadeIn();
            setTimeout(function() {
                $('#successAlert').fadeOut();
            }, 5000);
            
            // In a real scenario, you would send the data to your server here
            // For example: 
            // $.post('your-server-url', formData, function(response) {
            //     // Handle response
            // });
            
            // Reset form
            this.reset();
        });

        // Newsletter Form Submission
        $('#newsletterForm').on('submit', function(e) {
            e.preventDefault();
            const email = $(this).find('input[name="email"]').val();
            
            if (email && validateEmail(email)) {
                // Show success message
                $('#successAlert').text('Thank you for subscribing to our newsletter!').fadeIn();
                setTimeout(function() {
                    $('#successAlert').fadeOut();
                }, 5000);
                
                // In a real scenario, you would send the data to your server here
                // For example: 
                // $.post('your-newsletter-endpoint', {email: email}, function(response) {
                //     // Handle response
                // });
                
                $(this).find('input[name="email"]').val('');
            } else {
                $('#errorAlert').text('Please enter a valid email address.').fadeIn();
                setTimeout(function() {
                    $('#errorAlert').fadeOut();
                }, 5000);
            }
        });

        // Email validation function
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Smooth scrolling for anchor links
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            
            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top - 70,
                },
                500,
                'linear'
            );
        });