#= require "_helper"

# requirejs makes life a lot easier when dealing with more than one
# javascript file and any sort of dependencies, and loads faster.

# for more info on require config, see http://requirejs.org/docs/api.html#config
require.config
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.2.1/lodash.min'

require ['jquery', 'lodash'], ($, _) ->
  $ ->
    
    navShown     = false        
    headerHeight = $('body > header').height() || 0
    $nav         = $('body > nav')

    toggleNav    = ->
      navShouldBeShown = $(window).scrollTop() >= headerHeight

      if navShouldBeShown and not navShown
        console.log 'here'
        navShown = true
        $nav.animate({height: "toggle", opacity: "toggle"}, queue: false)
      else if not navShouldBeShown and navShown
        navShown = false
        $nav.animate({height: "toggle", opacity: "toggle"}, queue: false)

    $(window).scroll _.throttle(toggleNav, 50)

    toggleNav()
