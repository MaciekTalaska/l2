// Generated by CoffeeScript 1.10.0
(function() {
  var categoryRibbonFilter, colorRegex, escape;

  //console.log('hexo: ', hexo);
  //console.log('hexo util: ', hexo.util);

  //var util = require('hexo-util');
  //console.log('util', util);
  //console.log('util.escape: ', util.escape);

  //escape = hexo.util.escape;
  //escape = util.escapeRexExp;

  colorRegex = /^\s*(?:\#[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]|\#[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]|rgba?\(.*\)|hsla?\(.*\))\s*$/;

  categoryRibbonFilter = function(data, callback) {
    console.log('-- -- -- --')
    //console.log('data:', data.categories)
    //console.log('data.categories[0]', data.categories[0])
    //console.log('data.cateories.name: ', data.categories.name)
    console.log('* * * * * * * * * * *')
    //console.log('xxx:', data.categories.data[0].name )
    //console.log('link: ', data.categories.data[0].permalink)
    console.log('-- -- -- --')
    var categoryConfig, ref, ribbon;
    if (data.categories == null) {
      //return callback();
      return "";
    }
    if (data.ribbon == null) {
      data.ribbon = {};
    }
  
    let t = "";
    let l = "";
    let u = hexo.config.default_category
    if (data.categories.data && data.categories.data[0] && data.categories.data[0].name) {
      t = data.categories.data[0].name
      l = data.categories.data[0].permalink
    } else {
      t = u
    }

    if (typeof data.ribbon === 'string') {
      data.ribbon = {
        //text: data.ribbon
        //text: data.categories.data[0].name
        text: t
      };
    }
    ribbon = data.ribbon;
    if (ribbon.text == null) {
      //ribbon.text = data.categories[0];
      //ribbon.link = "/categories/" + (ribbon.text, hexo.config.filename_case) + "/";
      ribbon.text = t
      ribbon.link = l
    }
    categoryConfig = (ref = hexo.config.category_ribbon) != null ? ref[ribbon.text] : void 0;
    if (categoryConfig) {
      if (typeof categoryConfig === 'string') {
        if (categoryConfig.match(colorRegex)) {
          ribbon.color = categoryConfig;
        } else {
          ribbon.style = categoryConfig;
        }
      } else {
        ribbon.style = categoryConfig.style;
        ribbon.color = categoryConfig.color;
      }
    } else {
      console.log("Unknown Category: " + ribbon.text);
    }
//    if (callback) {
//      return callback(null, data);
//    }
    //return data.categories.name;
  };

  hexo.extend.filter.register('before_post_render', categoryRibbonFilter);

}).call(this);
