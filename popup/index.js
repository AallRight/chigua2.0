document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-url');
    const input = document.getElementById('url-input');
    const element = document.querySelector('poster trigger-user-card');
    const avatar_element = document.querySelector('.topic-avatar');

    button.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            const fullUrl = tab.url; // 获取完整的 URL
            // const userInput = input.value; // 获取输入框中的内容
            const userInput = input.value.trim(); // 获取输入框中的内容并去除前后空格
            const middle_string = "?username_filters=";
            console.log('用户输入的网址:', userInput);
            console.log('当前网站完整 URL:', fullUrl);
            console.log(element);
            alert('当前网站完整 URL: ' + fullUrl);
            alert('用户输入的网址: ' + fullUrl + userInput);
            alert(element);
            alert(avatar_element);
            // if (userInput) {
            //     // 如果输入不为空，则跳转
            //     chrome.tabs.create({ url: fullUrl + middle_string + userInput }); // 在新标签页中打开网址
            // } else {
            //     alert('请输入有效id');
            // }
        });



    });
});
// document.getElementById("getIpBtn").addEventListener("click", () => {
//     const buttonInfo = "Button clicked!"; // 获取点击信息
//     console.log(buttonInfo); // 在控制台打印信息

//     // 获取当前标签页的 URL
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         const url = new URL(tabs[0].url);
//         fetch(`https://api.ipify.org?format=json`)
//             .then(response => response.json())
//             .then(data => {
//                 document.getElementById("ipAddress").textContent = `IP Address: ${data.ip}`;
//             })
//             .catch(error => {
//                 console.error("Error fetching IP:", error);
//             });
//     });
// });

