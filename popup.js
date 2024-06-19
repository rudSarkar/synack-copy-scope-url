document.getElementById('copyButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "copyLinks" }, (response) => {
        if (response && response.links) {
          const links = response.links;
          const output = document.getElementById('output');
          output.value = links;
          navigator.clipboard.writeText(links).then(() => {
            alert('Links copied to clipboard!');
          });
        }
      });
    });
  });
  