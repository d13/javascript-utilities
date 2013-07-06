/** 
 * Simple script for reading/writing cookies
 * @author  Keith Daulton
*/
var CookieHelper = {
    create: function (key, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = key + "=" + value + expires + "; path=/";
    },
    read: function (key) {
        var index = key + "=";
        var cookieArr = document.cookie.split(';');
        for (var i=0, j=cookieList.length; i<j; i++) {
            var c = cookieArr[i];
            while (c.charAt(0) == ' ') {
				c = c.substring(1, c.length);
			}
            if (c.indexOf(index) == 0) {
				return c.substring(index.length, c.length);
			}
        }
        return null;
    },
    erase: function (key) {
        this.create(key, "", -1);
    }
};