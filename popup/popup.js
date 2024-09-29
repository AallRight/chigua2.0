document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getDocumentInfo" }, (response) => {
        if (response) {
          document.getElementById("title").textContent = `Title: ${response.title}`;
          document.getElementById("url").textContent = `URL: ${response.url}`;
          document.getElementById("bodyContent").textContent = response.bodyContent;
        //   document.getElementById("post2").textContent = response.post2;
        //   document.getElementById("elements").textContent = response.elements;
        }
      });
    });
  });
//   document.querySelector("#ember24 > div > div:nth-child(3)")
//   #ember24 > div > div:nth-child(4)
//   #ember24 > div > div:nth-child(3)
//   #ember24 > div > div:nth-child(2)