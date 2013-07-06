/** 
 * X-Browser wrapper for setting events
 * @author  Keith Daulton
*/
var setEvent = (function() {
	if (window.addEventListener) {
		return function(obj, evnt, funct) { 
			if(obj) {
				obj.addEventListener(evnt, funct, false); 
				return true; 
			} 
			return false;
		};
	} else if (window.attachEvent) {
		return function(obj, evnt, funct) { 
			if(obj) {
				var r = obj.attachEvent("on"+evnt, funct); 
				return r; 
			} 
			return false;
		};
	} else {
		return function(obj, evnt, funct) { 
			if(obj) {
				obj["on"+evnt] = funct;
				return true; 
			} 
			return false;
		};
	}
})();