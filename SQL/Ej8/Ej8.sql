BEGIN TRANSACTION;
SAVEPOINT SP1;
DELETE FROM Books
WHERE book_id = 103;
ROLLBACK TO SP1;