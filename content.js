function getExternalLinks() {
    const parents = document.getElementsByClassName("target-show-scope-url-list-left-section");
    let links = [];

    for (const parent of parents) {
        links = links.concat(
            Array.from(parent.getElementsByClassName("external-link"))
                .map(e => e.href)
        );
    }

    return links.join("\n");
}
  
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "copyLinks") {
        const links = getExternalLinks();
        sendResponse({ links: links });
    }
});
  