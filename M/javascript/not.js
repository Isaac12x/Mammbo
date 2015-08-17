// lock scroll position, but retain settings for later
      var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      var overlay = jQuery('overlay'); // it would make more sense to apply this to body, but IE7 won't have that
      overlay.data('scroll-position', scrollPosition);
      overlay.data('previous-overflow', html.css('overflow'));
      overlay.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);

