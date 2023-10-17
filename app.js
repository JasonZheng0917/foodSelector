let button = document.querySelector("#but");

let arr = [
    {
        name: '拉雅'.link("https://www.laya.com.tw/product/"),
        phone: '02 2311 2200',
        pic: 'https://cf.shopee.tw/file/279a0e8e1b55cada20c2cd0a4c37992a',
        star: '4'
    },
    {
        name: '一級排骨'.link("https://www.facebook.com/ichibanintaipei/?locale=zh_TW"),
        phone: '02 2371 9739',
        pic: 'https://live.staticflickr.com/65535/51669526060_2900147a43_c.jpg',
        star: '4.3'
    }
    ,{
        name: '魷魚羹'.link("https://leafyeh.com/atian-late-night-supper/"),
        phone: '02 8877 7788',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpvsq9OfemWlkElZsDIsrFoDS3bQUmOqAaA&usqp=CAU',
        star: '4.1'
    },{
        name: '良品'.link("https://blog.triccsegg.com/2021/01/liangpin-beef-noodle.html"),
        phone: '02 2371 2644',
        pic:'https://i2.momoshop.com.tw/1659672040/goodsimg/0010/401/177/10401177_R_m.webp',
        star: '4'
    },{
        name: 'Macdonald'.link("https://www.mcdonalds.com/tw/zh-tw.html"),
        phone: '02 2371 7777',
        pic:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/09/02/98/13688234.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600',
        star: '5'
    },{
        name: '鴨肉扁'.link("https://www.facebook.com/pages/%E9%B4%A8%E8%82%89%E6%89%81/187227481301671"),
        phone: '02 2371 3918',
        pic:'https://1.bp.blogspot.com/-bLkCNurxc2c/YFC5X4krEVI/AAAAAAABQDc/aoAdNv7NiY8xKs0GIt87_d9u2b17WhtmgCLcBGAsYHQ/w640-h426/IMG_9399.JPG',
        star: '3.2'
    },{
        name: '天天利'.link("https://nash.tw/tiantianli2023/"),
        phone: '02 2371 3918',
        pic:'https://pic.pimg.tw/anrine910070/1519112892-2651048618.jpg',
        star: '3.2'
    },{
        name: '健康餐盒'.link("https://www.mcdonalds.com/tw/zh-tw.html"),
        phone: '02 2371 3918',
        pic:'https://mimiya888.com/wp-content/uploads/20210706013457_1.jpg',
        star: '3.2'
    },{
        name: '羊城燒腊'.link("https://www.facebook.com/1YangCheng/"),
        phone: '02 2371 3918',
        pic:'https://pic.pimg.tw/bravejim/1651834072-2888905095-g_n.jpg',
        star: '3.2'
    }
];

function myFunction() {
    let all = document.getElementById("all");
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let img = document.getElementById("pic");
    let gif =document.getElementById("gif");
    if (all.style.display === "block" & img.style.display === "block" & gif.style.display === "block") {
        all.style.display = "none";
        img.style.display = "none";
        gif.style.display = "none";
        button.textContent ='吃啦!' ;
    } else {
        all.style.display = "block";
        img.style.display = "block";
        gif.style.display = "block";
        let i = Math.floor(Math.random() * arr.length); //length=3，回傳值會在0~2
        a.innerHTML = arr[i].name +'<br>';
        b.innerHTML = '電話:'+arr[i].phone+'<br>';
        c.innerHTML = '星級:'+arr[i].star;
        img.src = arr[i].pic;
        button.textContent ='重選一家';
    }
}