// 當頁面內容載入後，發送 API 請求
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://example.com/api/fruits'; // 替換成你的 API URL

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // 將回應轉換成 JSON
        })
        .then(data => {
            console.log(data); // 打印 API 返回的數據
            displayFruits(data); // 呼叫函數將資料顯示到頁面
        })
        .catch(error => {
            console.error('Fetch error:', error); // 處理錯誤
        });
});

// 顯示 API 返回的水果資料
function displayFruits(fruits) {
    const fruitContainer = document.querySelector('.maincontent .row');
    fruits.forEach(fruit => {
        const fruitCard = `
            <div class="col-md-4 mt-4">
                <div class="card text-center h-100 border-0 box-shadow">
                    <img src="${fruit.imageUrl}" alt="${fruit.name}">
                    <div class="card-body">
                        <p>${fruit.description}</p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                        <button class="check"><a href="${fruit.link}">查看商品</a></button>
                    </div>
                </div>
            </div>
        `;
        fruitContainer.insertAdjacentHTML('beforeend', fruitCard);
    });
}
