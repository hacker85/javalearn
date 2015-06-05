var Index = {
    getPath: function(el) {
        var path = [];
        while(true) {
            if(!utils.checkValue(el) || el.getAttribute('class') == 'sidebar-nav') break;
            if(el.nodeName == 'UL') {
                path.push(el.getAttribute('id'));
            }
            el = el.parentElement;
        }
        path.reverse();
        return path.join('/');
    },
    setSideMenuLinks: function(){
        //all a that has no children
        $('.sidebar-nav a:not(:has(*))').click(function() {
            var path = Index.getPath(this) + '/' + this.getAttribute('id');
            if (path.indexOf('null') == -1) {
                $.ajax('pages/' + path + '.html').done(function (data) {
                    $('#content').html(data);
                });
            }
        });
    },
    setClicks: function() {
      $('#begin').click(function() {
          $('#javaPreparement').click();
      });
    },
    init: function(){
        this.setSideMenuLinks();
        this.setClicks();
    }
};
$(document).ready(function() {
    Index.init();
});