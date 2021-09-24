var indexData1 = [{
        src: 'images/WGY-images/0_thumb_G_1489096810833.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 01
    },
    {
        src: 'images/WGY-images/0_thumb_G_1489097011644.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 02
    },
    {
        src: 'images/WGY-images/0_thumb_G_1489097621751.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 03
    },
    {
        src: 'images/WGY-images/0_thumb_G_1489097825348.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 04
    },
    {
        src: 'images/WGY-images/0_thumb_G_1489098265067.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 05
    },
    {
        src: 'images/WGY-images/0_thumb_G_1489098360804.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 06
    }, {
        src: 'images/WGY-images/0_thumb_G_1489105386951.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 07
    }, {
        src: 'images/WGY-images/0_thumb_G_1489098597912.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 08
    }, {
        src: 'images/WGY-images/0_thumb_G_1489098724131.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 09
    }, {
        src: 'images/WGY-images/0_thumb_G_1489099128797.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 10
    }, {
        src: 'images/WGY-images/0_thumb_G_1489105175252.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 11
    }, {
        src: 'images/WGY-images/0_thumb_G_1489105301550.jpg',
        text: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
        price: 2640.00,
        oldprice: 7700.00,
        id: 12
    }
];

function lodeindexData1(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        var newLi = $(`<li><div class="item-img"><a href="page/page2C.html?${arr[i].id}"><img src="${arr[i].src}" alt=""></a></div><div class="item-title"><a href="page/page2C.html?${arr[i].id}">${arr[i].text}</a></div><div class="item-price"><span class="goods-price">￥${arr[i].price}.00 </span><span class="original-price">￥${arr[i].oldprice}.00 </span></div></li>`);
        target.append(newLi);
    };
};

lodeindexData1(indexData1, $('#seckilllist'));
var indexData2 = [{
    src: 'images/WGY-images/0_thumb_G_1490211843119.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 13
}, {
    src: 'images/WGY-images/0_thumb_G_1489096810833.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 14
}, {
    src: 'images/WGY-images/0_thumb_G_1489097011644.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 15
}, {
    src: 'images/WGY-images/0_thumb_G_1489097621751.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 16
}, {
    src: 'images/WGY-images/0_thumb_G_1489097825348.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 17
}, {
    src: 'images/WGY-images/0_thumb_G_1489098265067.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 18
}, {
    src: 'images/WGY-images/0_thumb_G_1489098360804.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 19
}, {
    src: 'images/WGY-images/0_thumb_G_1489098597912.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 20
}, {
    src: 'images/WGY-images/0_thumb_G_1489098724131.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 21
}, {
    src: 'images/WGY-images/0_thumb_G_1489099128797.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 22
}, {
    src: 'images/WGY-images/0_thumb_G_1490211843119.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 23
}, {
    src: 'images/WGY-images/0_thumb_G_1489096810833.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 24
}, {
    src: 'images/WGY-images/0_thumb_G_1489097011644.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 25
}, {
    src: 'images/WGY-images/0_thumb_G_1489097621751.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 26
}, {
    src: 'images/WGY-images/0_thumb_G_1489097825348.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 27
}, {
    src: 'images/WGY-images/0_thumb_G_1489098265067.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 28
}, {
    src: 'images/WGY-images/0_thumb_G_1489098360804.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 29
}, {
    src: 'images/WGY-images/0_thumb_G_1489098597912.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 30
}, {
    src: 'images/WGY-images/0_thumb_G_1489098724131.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 31
}, {
    src: 'images/WGY-images/0_thumb_G_1489099128797.jpg',
    text: '雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
    price: 500.00,
    oldprice: 600.00,
    id: 32
}];

function lodeindexData2(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        var newLi = $(`<li><a href="page/page2C.html?${arr[i].id}"><div class="p-img"><img src="${arr[i].src}" alt=""></div><div class="p-name">${arr[i].text}</div><div class="p-price clearfix"><div class="shop-price">￥${arr[i].price}.00 </div><div class="original-price">￥${arr[i].oldprice}.00 </div></div></a></li>`);
        target.append(newLi);
    }
};
lodeindexData2(indexData2, $('#plenty'));