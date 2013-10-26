#= require "_helper"

# requirejs makes life a lot easier when dealing with more than one
# javascript file and any sort of dependencies, and loads faster.

# for more info on require config, see http://requirejs.org/docs/api.html#config
require.config
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.2.1/lodash.min'

require ['jquery', 'lodash'], ($, _) ->
  console.log 'jquery loaded (via assets/js/main.coffee)'
