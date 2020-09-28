class Statement {
    constructor(title, id, img, img2, img3, price) {
        this.title = title;
        this.id = id;
        this.img = img;
        this.img2 = img2;
        this.img3 = img3;
        this.price = price;
    }
}

class textclass {
    constructor(h1, p) {
        this.h1 = h1;
        this.p = p;
    }
}

class Mshirts extends Statement {
    constructor(title, id, img, img2, img3, price) {
        super(title, id, img, img2, img3, price);
        // this.toiletFriendly = toiletFriendly;
    }
}