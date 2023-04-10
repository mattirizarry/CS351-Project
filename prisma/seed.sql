INSERT INTO "User"
VALUES
('15','Campos','Rafael','724 Vinca Dr.','Grove','CA','90092',23457.50,0.06);
INSERT INTO "User"
VALUES
('30','Gradey','Megan','632 Liatris St.','Fullton','CA','90085',41317.00,0.08);
INSERT INTO "User"
VALUES
('45','Tian','Hui','1785 Tyler Ave.','Northfield','CA','90098',27789.25,0.06);
INSERT INTO "User"
VALUES
('60','Sefton','Janet','267 Oakley St.','Congaree','CA','90097',0.00,0.06);
INSERT INTO "Customer"
VALUES
('126','Toys Galore','28 Laketon St.','Fullton','CA','90085',1210.25,7500.00,'15');
INSERT INTO "Customer"
VALUES
('260','Brookings Direct','452 Columbus Dr.','Grove','CA','90092',575.00,10000.00,'30');
INSERT INTO "Customer"
VALUES
('334','The Everything Shop','342 Magee St.','Congaree','CA','90097',2345.75,7500.00,'45');
INSERT INTO "Customer"
VALUES
('386','Johnson''s Department Store','124 Main St.','Northfield','CA','90098',879.25,7500.00,'30');
INSERT INTO "Customer"
VALUES
('440','Grove Historical Museum Store','3456 Central Ave.','Fullton','CA','90085',345.00,5000.00,'45');
INSERT INTO "Customer"
VALUES
('502','Cards and More','167 Hale St.','Mesa','CA','90104',5025.75,5000.00,'15');
INSERT INTO "Customer"
VALUES
('586','Almondton General Store','3345 Devon Ave.','Almondton','CA','90125',3456.75,15000.00,'45');
INSERT INTO "Customer"
VALUES
('665','Cricket Gift Shop','372 Oxford St.','Grove','CA','90092',678.90,7500.00,'30');
INSERT INTO "Customer"
VALUES
('713','Cress Store','12 Rising Sun Ave.','Congaree','CA','90097',4234.60,10000.00,'15');
INSERT INTO "Customer"
VALUES
('796','Unique Gifts','786 Passmore St.','Northfield','CA','90098',124.75,7500.00,'45');
INSERT INTO "Customer"
VALUES
('824','Kline''s','945 Gilham St.','Mesa','CA','90104',2475.99,15000.00,'30');
INSERT INTO "Customer"
VALUES
('893','All Season Gifts','382 Wildwood Ave.','Fullton','CA','90085',935.75,7500.00,'15');
INSERT INTO "Orders"
VALUES
('51608','2015-10-12','126');
INSERT INTO "Orders"
VALUES
('51610','2015-10-12','334');
INSERT INTO "Orders"
VALUES
('51613','2015-10-13','386');
INSERT INTO "Orders"
VALUES
('51614','2015-10-13','260');
INSERT INTO "Orders"
VALUES
('51617','2015-10-15','586');
INSERT INTO "Orders"
VALUES
('51619','2015-10-15','126');
INSERT INTO "Orders"
VALUES
('51623','2015-10-15','586');
INSERT INTO "Orders"
VALUES
('51625','2015-10-16','796');
INSERT INTO "Item"
VALUES
('AH74','Patience',9.00,'GME','3',22.99);
INSERT INTO "Item"
VALUES
('BR23','Skittles',21.00,'GME','2',29.99);
INSERT INTO "Item"
VALUES
('CD33','Wood Block Set (48 piece)',36.00,'TOY','1',89.49);
INSERT INTO "Item"
VALUES
('DL51','Classic Railway Set',12.00,'TOY','3',107.95);
INSERT INTO "Item"
VALUES
('DR67','Giant Star Brain Teaser',24.00,'PZL','2',31.95);
INSERT INTO "Item"
VALUES
('DW23','Mancala',40.00,'GME','3',50.00);
INSERT INTO "Item"
VALUES
('FD11','Rocking Horse',8.00,'TOY','3',124.95);
INSERT INTO "Item"
VALUES
('FH24','Puzzle Gift Set',65.00,'PZL','1',38.95);
INSERT INTO "Item"
VALUES
('KA12','Cribbage Set',56.00,'GME','3',75.00);
INSERT INTO "Item"
VALUES
('KD34','Pentominoes Brain Teaser',60.00,'PZL','2',14.95);
INSERT INTO "Item"
VALUES
('KL78','Pick Up Sticks',110.00,'GME','1',10.95);
INSERT INTO "Item"
VALUES
('MT03','Zauberkasten Brain Teaser',45.00,'PZL','1',45.79);
INSERT INTO "Item"
VALUES
('NL89','Wood Block Set (62 piece)',32.00,'TOY','3',119.75);
INSERT INTO "Item"
VALUES
('TR40','Tic Tac Toe',75.00,'GME','2',13.99);
INSERT INTO "Item"
VALUES
('TW35','Fire Engine',30.00,'TOY','2',118.95);
INSERT INTO "OrderItem"
VALUES
('51608','CD33',5.00,86.99);
INSERT INTO "OrderItem"
VALUES
('51610','KL78',25.00,10.95);
INSERT INTO "OrderItem"
VALUES
('51610','TR40',10.00,13.99);
INSERT INTO "OrderItem"
VALUES
('51613','DL51',5.00,104.95);
INSERT INTO "OrderItem"
VALUES
('51614','FD11',1.00,124.95);
INSERT INTO "OrderItem"
VALUES
('51617','NL89',4.00,115.99);
INSERT INTO "OrderItem"
VALUES
('51617','TW35',3.00,116.95);
INSERT INTO "OrderItem"
VALUES
('51619','FD11',2.00,121.95);
INSERT INTO "OrderItem"
VALUES
('51623','DR67',5.00,29.95);
INSERT INTO "OrderItem"
VALUES
('51623','FH24',12.00,36.95);
INSERT INTO "OrderItem"
VALUES
('51623','KD34',10.00,13.10);
INSERT INTO "OrderItem"
VALUES
('51625','MT03',8.00,45.79);