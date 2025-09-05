// Firefox-compatible background script
// Use browser API for Firefox compatibility
const api = typeof browser !== 'undefined' ? browser : chrome;
const actionAPI = api.browserAction || api.action;

api.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      if (tab.url && tab.url.match(/^https:\/\/platform\.synack\.com\/targets\/.*\/scope$/)) {
        actionAPI.setIcon({ 
          tabId: tabId,
          path: {
            "16": "icons/icon16.png",
            "48": "icons/icon48.png",
            "128": "icons/icon128.png"
          }
        });
      } else {
        actionAPI.setIcon({ 
          tabId: tabId,
          path: {
            "16": "icons/grey/icon16_grey.png",
            "48": "icons/grey/icon48_grey.png",
            "128": "icons/grey/icon128_grey.png"
          }
        });
      }
    }
});