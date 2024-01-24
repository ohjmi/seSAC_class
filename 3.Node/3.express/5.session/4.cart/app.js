const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// req.body <------- 저 내용을 파싱해서 채워준다


app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static('public'));

const products = [
    {id: 1, name: 'Product1', price: 2000},
    {id: 2, name: 'Product2', price: 3000},
    {id: 3, name: 'Product3', price: 4000},
    {id: 4, name: 'Product4', price: 5000},
];
// 데이터 상품들을 보여주는 역할
app.get('/products', (req, res) => {
    console.log('상품정보요청');
    res.json(products);
    console.log('Session Info:', req.session);
});

// session stroage에 있는 데이터들을 보여주는 역할
app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];
    res.json(cart);
    console.log('Session Info:', req.session);
});

// 프론트에서 ID를 받아오면, 해당 ID에 해당하는 데이터를 정리함
//session storage에 데이터를 저장하는 역할
app.get('/add-to-cart/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = products.find((p) => {p.id === productId});
    
    if (!product) {
        return res.status(404).json({message: '상품을 찾을 수 없습니다.'});
    }
    
    const cart = req.session.cart || []; 
    
    // 선택한 상품을 카트에 담기
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
    });

    // console.log(cart);
    req.session.cart = cart;
    res.json({ message: '상품이 장바구니에 추가되었습니다.', cart });
});

app.listen(port, () => {
    console.log(`서버가 ${port} 열렸습니다.`);
});

