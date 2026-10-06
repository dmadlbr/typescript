"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = "https://dummyjson.com/products";
const fetchProducts = async () => {
    try {
        const res = await fetch(api);
        const response = await res.json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
};
(async () => {
    const fetchData = await fetchProducts();
    fetchData?.products.forEach(pdt => {
        pdt.reviews.forEach(review => {
            console.log(review.date);
        });
    });
})();
//# sourceMappingURL=dummyjson.js.map