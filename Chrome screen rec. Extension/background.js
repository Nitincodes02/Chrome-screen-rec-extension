//chrome

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(changeInfo.status === "complete" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./main.js"]
        }).then(()=>{
            console.log("we have injected the main script")
        }).catch(err=> console.log(err, "error in background script line 10"))
    }
})


