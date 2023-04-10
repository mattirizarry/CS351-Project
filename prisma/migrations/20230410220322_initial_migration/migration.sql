-- CreateTable
CREATE TABLE "User" (
    "userNum" CHAR(2) NOT NULL,
    "lastName" VARCHAR(15) NOT NULL,
    "firstName" VARCHAR(15) NOT NULL,
    "street" VARCHAR(15) NOT NULL,
    "city" VARCHAR(15) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "postalCode" VARCHAR(5) NOT NULL,
    "commission" DECIMAL(7,2) NOT NULL,
    "rate" DECIMAL(3,2) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userNum")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customerNum" CHAR(3) NOT NULL,
    "customerName" VARCHAR(35) NOT NULL,
    "street" VARCHAR(20) NOT NULL,
    "city" VARCHAR(15) NOT NULL,
    "state" CHAR(2) NOT NULL,
    "postalCode" VARCHAR(5) NOT NULL,
    "balance" DECIMAL(8,2) NOT NULL,
    "creditLimit" DECIMAL(8,2) NOT NULL,
    "userNum" CHAR(2),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerNum")
);

-- CreateTable
CREATE TABLE "Orders" (
    "orderNum" CHAR(5) NOT NULL,
    "orderDate" DATE NOT NULL,
    "customerNum" CHAR(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("orderNum")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemNum" CHAR(4) NOT NULL,
    "description" VARCHAR(30) NOT NULL,
    "onHand" DECIMAL(4,0) NOT NULL,
    "category" VARCHAR(4) NOT NULL,
    "storehouse" VARCHAR(1) NOT NULL,
    "price" DECIMAL(6,2) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemNum")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "orderNum" CHAR(5) NOT NULL,
    "itemNum" CHAR(4) NOT NULL,
    "numOrdered" DECIMAL(3,0) NOT NULL,
    "price" DECIMAL(6,2) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("orderNum","itemNum")
);

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_userNum_fkey" FOREIGN KEY ("userNum") REFERENCES "User"("userNum") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customerNum_fkey" FOREIGN KEY ("customerNum") REFERENCES "Customer"("customerNum") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderNum_fkey" FOREIGN KEY ("orderNum") REFERENCES "Orders"("orderNum") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_itemNum_fkey" FOREIGN KEY ("itemNum") REFERENCES "Item"("itemNum") ON DELETE RESTRICT ON UPDATE CASCADE;
