-- 사용자 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
);

-- 초기 사용자 추가
INSERT INTO users(id, username, password) VALUES
    (1, 'user1', 'password1'),
    (2, 'user2', 'password2'),
    (3, 'user3', 'password3');

-- 상품 테이블 추가
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER
);

-- 초기 상품 추가
INSERT INTO products(id, name, price) VALUES
    (1, 'Product1', '1000'),
    (2, 'Product2', '2000'),
    (3, 'Product3', '3000');

 -- 도서 테이블 추가
CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    genre TEXT
);

-- 초기 도서 추가
INSERT INTO books(id, title, author, genre) VALUES
    (1, 'Books 1', 'Author 1', 'Fiction'),
    (2, 'Books 2', 'Author 2', 'Non-Fiction'),
    (3, 'Books 3', 'Author 3', 'Mystery');