(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
      lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.2.1/lodash.min',
      jribbble: '/js/jribbble.min'
    }
  });

  require(['jquery', 'lodash'], function($, _) {
    require(['jribbble'], function() {
      return $(function() {
        var $nav, headerHeight, navShown, onShots, toggleNav;
        navShown = false;
        headerHeight = $('body > header').height() || $('.project-hero').height() || 0;
        $nav = $('body > nav');
        toggleNav = function() {
          var navShouldBeShown;
          $nav.css({
            left: -$(window).scrollLeft()
          });
          navShouldBeShown = $(window).scrollTop() >= headerHeight;
          if (navShouldBeShown && !navShown) {
            navShown = true;
            return $nav.animate({
              height: "toggle",
              opacity: "toggle"
            }, {
              queue: false
            });
          } else if (!navShouldBeShown && navShown) {
            navShown = false;
            return $nav.animate({
              height: "toggle",
              opacity: "toggle"
            }, {
              queue: false
            });
          }
        };
        $(window).scroll(_.throttle(toggleNav, 10));
        toggleNav();
        $('a[href*=#]:not([href=#])').click(function(event) {
          var name;
          name = $(event.target).attr('href').split('#')[1];
          $('html, body').animate({
            scrollTop: $("a[name='" + name + "']").offset().top
          }, 500);
          return false;
          return $.trim(title).substring(0, 10).split(" ").slice(0, -1).join(" ") + "...";
        });
        onShots = function(shots) {
          return $('.shot').each(function(i, s) {
            var thumb, title, url;
            url = shots[i].html_url;
            thumb = shots[i].images.hidpi || shots[i].images.normal || shots[i].images.teaser;
            title = $.trim(shots[i].title);
            $('img', s).attr('src', thumb);
            $('h4', s).text(title);
            return $('a', s).attr('href', url);
          });
        };
        $.jribbble.setToken('19a48c8b842f4f1a6c630f0116209cba4b787dc6f42266f7a6fd0301d1610411');
        return $.jribbble.users('marstoyship').shots({
          page: 1,
          per_page: 6
        }).then(onShots);
      });
    });
    return $('.reveal-more-projects button').click(function(e) {
      $('.bottom-6').toggle();
      $('.reveal-more-projects button').hide();
      e.preventDefault();
      return false;
    });
  });

}).call(this);
