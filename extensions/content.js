(()=>{"use strict";chrome.runtime.onMessage.addListener((function(e,t,o){if("getDocumentBody"===e.type){var n=document.querySelectorAll(".all_work_time");console.log("element: ",n),o(n)}}))})();