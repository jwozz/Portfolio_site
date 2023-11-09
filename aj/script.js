        // mobile menu script

        $(document).ready(function() {
            // menu click event
            $(".menu-toggle").on('click', function() {
                $(this).toggleClass("on");
                $('.menu-section').toggleClass("on");
                $("nav ul").toggleClass('hidden');
            });
        });