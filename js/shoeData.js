var shoeData1 = [{
    src: '../images/p-img1C.jpg',
    text: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/29英寸大容量学生密码箱皮箱登机箱 瑰',
    price: 188.00,
    id: 33
}, {
    src: '../images/p-img1C.jpg',
    text: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/29英寸大容量学生密码箱皮箱登机箱 瑰',
    price: 188.00,
    id: 34
}, {
    src: '../images/p-img1C.jpg',
    text: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/29英寸大容量学生密码箱皮箱登机箱 瑰',
    price: 188.00,
    id: 35
}, {
    src: '../images/p-img1C.jpg',
    text: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/29英寸大容量学生密码箱皮箱登机箱 瑰',
    price: 188.00,
    id: 36
}, {
    src: '../images/p-img1C.jpg',
    text: '爱路思行李箱女24寸铝框拉杆箱男万向轮旅行箱20/22/26/29英寸大容量学生密码箱皮箱登机箱 瑰',
    price: 188.00,
    id: 37
}];

function shoeLode1(data, target) {
    for (var i = 0; i < data.length; i++) {
        var newLi = `<li>
        <div class="p-img">
            <a href="page2C.html?${data[i].id} ">
                <img src="${data[i].src}" alt=" ">
            </a>
        </div>
        <div class="p-name ">
            <a href="page2C.html?${data[i].id} ">${data[i].text}</a>
        </div>
        <div class="p-price ">￥${data[i].price}.00</div>
    </li>`
        target.append(newLi);
    };
};
shoeLode1(shoeData1, $('#lxx1'));
shoeLode1(shoeData1, $('#lxx2'));
var shoeData2 = [{
    src: '../images/goods-item1C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 38
}, {
    src: '../images/goods-item2C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 39
}, {
    src: '../images/goods-item3C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 40
}, {
    src: '../images/goods-item4C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 41
}, {
    src: '../images/goods-item5C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 42
}, {
    src: '../images/goods-item6C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 43
}, {
    src: '../images/goods-item7C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 44
}, {
    src: '../images/goods-item8C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 45
}, {
    src: '../images/goods-item9C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 46
}, {
    src: '../images/goods-item10C.jpg',
    text: 'WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004',
    price: 1200.00,
    id: 47
}];

function shoeLode2(data, target) {
    for (var i = 0; i < data.length; i++) {
        var newLi = `<li class="goods-item">
        <div class="p-img">
            <a href="page2C.html?${data[i].id}">
                <img src="${data[i].src}" alt="">
            </a>
        </div>
        <div class="p-name">
            <a href="page2C.html?${data[i].id}">WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004</a>
        </div>
        <div class="p-price">¥${data[i].price}.00</div>
    </li>`;
        target.append(newLi);
    };
};
shoeLode2(shoeData2, $('#shoeGoods'));
shoeLode2(shoeData2, $('#newShoe'));