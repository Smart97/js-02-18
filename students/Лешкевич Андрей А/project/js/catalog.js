"use strict";
var prodCatalog = [
    {
        id: 1,
        name: "Mango People T-shirt #1",
        type: [{
            img: "img/catalog_item_01.png",
            price: 52.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 2,
        name: "Mango People T-shirt #2",
        type: [{
            img: "img/catalog_item_02.png",
            price: 32.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 3,
        name: "Mango People T-shirt #3",
        type: [{
            img: "img/catalog_item_03.png",
            price: 42.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 4,
        name: "Mango People T-shirt #4",
        type: [{
            img: "img/catalog_item_04.png",
            price: 62.34,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 5,
        name: "Mango People T-shirt #5",
        type: [{
            img: "img/catalog_item_05.png",
            price: 54.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 6,
        name: "Mango People T-shirt #6",
        type: [{
            img: "img/catalog_item_06.png",
            price: 53.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 7,
        name: "Mango People T-shirt #7",
        type: [{
            img: "img/catalog_item_07.png",
            price: 58.60,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 8,
        name: "Mango People T-shirt #8",
        type: [{
            img: "img/catalog_item_08.png",
            price: 50.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },

    {
        id: 9,
        name: "Mango People T-shirt #9",
        type: [{
            img: "img/catalog_item_09.png",
            price: 52.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 10,
        name: "Mango People T-shirt #10",
        type: [{
            img: "img/catalog_item_10.png",
            price: 32.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 11,
        name: "Mango People T-shirt #11",
        type: [{
            img: "img/catalog_item_11.png",
            price: 42.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 12,
        name: "Mango People T-shirt #12",
        type: [{
            img: "img/catalog_item_12.png",
            price: 62.34,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 13,
        name: "Mango People T-shirt #13",
        type: [{
            img: "img/catalog_item_13.png",
            price: 54.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 14,
        name: "Mango People T-shirt #14",
        type: [{
            img: "img/catalog_item_14.png",
            price: 53.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 15,
        name: "Mango People T-shirt #15",
        type: [{
            img: "img/catalog_item_15.png",
            price: 150,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 16,
        name: "Mango People T-shirt #16",
        type: [{
            img: "img/catalog_item_16.png",
            price: 120.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 17,
        name: "Mango People T-shirt #17",
        type: [{
            img: "img/catalog_item_17.png",
            price: 149.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 18,
        name: "Mango People T-shirt #18",
        type: [{
            img: "img/catalog_item_18.png",
            price: 32.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 19,
        name: "Mango People T-shirt #19",
        type: [{
            img: "img/catalog_item_19.png",
            price: 42.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 20,
        name: "Mango People T-shirt #20",
        type: [{
            img: "img/catalog_item_20.png",
            price: 62.34,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    },
    {
        id: 21,
        name: "Mango People T-shirt #21",
        type: [{
            img: "img/catalog_item_21.png",
            price: 54.00,
            star: 4.5,
            color: "red",
            size: "XLL"
        }]
    }

];
class CPoductCatalogHTML {
    html = null;
    items = [];
    catalog = [];
    constructor(obj, cat, init = []) {
        if (null !== obj) {
            this.html = obj;
            this.catalog = cat;
            this.items = init;
            this.clear();
            this.listFillByItems();
        } else {
            return null;
        }
    }
    clear() {
        this.html.innerHTML = '';
    }
    listFillByItems() {
        this.html.innerHTML = this.items.map(item => this.itemGen(this.catalog.find(obj => { return obj.id === item }))).join('');
    }

    itemGen(_obj,_t = 0) {
        return `<li data-catalog-item="${_obj.id}" data-catalog-item-t="${_t}" class="products-grid_item">
                        <div class="top-block">
                            <div class="visible"><img src="${_obj.type[_t].img}" alt=""></div>
                            <div class="hovered">
                                <div class="btn-sqr_adcw"><a href="cart/addItem/${_obj.id}/${_t}" onclick="cart.addAct(this);return false;" class="btn-sqr_adcw__link clear-fix">
                                        <div class="btn-sqr_adcw__wrap"><img src="img/cart_white.png" alt="" class="btn-sqr_adcw__icon"><span class="btn-sqr_adcw__text">Add to Cart</span></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="products-grid_link">
                            <h3>${_obj.name}</h3>
                            <p>$${float2str(_obj.type[_t].price)}</p>
                        </a>
                    </li>`;
    }
}
