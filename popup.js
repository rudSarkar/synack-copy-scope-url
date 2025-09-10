function fetchAndPopulateLinks() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "copyLinks" }, (response) => {
      if (response && response.links) {
        const links = response.links;
        const output = document.getElementById('output');
        output.value = links;  // auto-populate
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Auto-populate when popup opens
  fetchAndPopulateLinks();

  // Also handle button click
  document.getElementById('copyButton').addEventListener('click', () => {
    fetchAndPopulateLinks();
    const output = document.getElementById('output');
    navigator.clipboard.writeText(output.value).then(() => {
      alert('Links copied to clipboard!');
    });
  });
});
