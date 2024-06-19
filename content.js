function getExternalLinks() {
    return [].slice.call(document.getElementsByClassName("external-link")).flatMap(e => e.href).join("\n");
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "copyLinks") {
      const links = getExternalLinks();
      sendResponse({ links: links });
    }
  });
  