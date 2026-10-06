const api = "https://dummyjson.com/products";

type Dimensions = {
    width: number;
    height: number;
    depth: number;
}

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;

}

type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string,
    qrCode: string
}


type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    weight: number;
    dimensions: Dimensions;
    reviews: Review[];
    meta: Meta;
    images: string[];
    thumbnail: string;

}

type ApiProducts = {
    products : Product[],
    total : number,
    limit : number,
    skip : number
}

const fetchProducts = async ():Promise<ApiProducts | undefined | null> =>{
    try{
        const res = await fetch(api);
        const response = await res.json();
        return response
    }catch(err)
        {
            console.log(err);
        }

    }

(async()=>{
    const fetchData = await fetchProducts();
    fetchData?.products.forEach(pdt =>{
        pdt.reviews.forEach(review =>{
            console.log(review.date);
        })
    })
})();