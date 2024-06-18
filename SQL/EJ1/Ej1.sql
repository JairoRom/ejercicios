CREATE TABLE Books (
    book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    published_year INTEGER NOT NULL,
    isbn VARCHAR(50) UNIQUE NOT NULL,
    price FLOAT(2,2) NOT NULL,
    rating FLOAT(1,1)--El maximo es 9.9--,
    stock_count INTEGER NOT NULL
);