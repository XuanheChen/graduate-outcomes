// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

// Additional packages
require("chartkick")
require("chart.js")
//= require visualization


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import $ from 'jquery';

$(document).on('turbolinks:load', function() {
    var values = $("#visualization_filters_attributes_0_value1 option");
    var values2 = $("#visualization_filters_attributes_0_value2 option");
    
    $("#visualization_filters_attributes_0_variable_name").on('change', function () {
        var fil_var =  $('#visualization_filters_attributes_0_variable_name :selected').text()
        // alert(fil_var); // why would alert more than one times?
        values.prop('disabled', false).css('display', 'block'); // restore the setting from previous change
        values2.prop('disabled', false).css('display', 'block');
        
        values.filter(function() {
            return !$(this).text().startsWith(fil_var); // filter the values
        }).prop('disabled', true).css('display', 'none');
        
        values2.filter(function() {
            return !$(this).text().startsWith(fil_var); // filter the values
        }).prop('disabled', true).css('display', 'none');
        
        
    });
});
