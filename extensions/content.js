(()=>{"use strict";chrome.runtime.onMessage.addListener((function(e,t,o){var r,n;"getWorkData"===e.type&&o({workDayCount:Number(null===(r=document.querySelector("div.work_count"))||void 0===r?void 0:r.textContent),workTime:Number(null===(n=document.querySelector("td.fixed_work"))||void 0===n?void 0:n.textContent)})}))})();