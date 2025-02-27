const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
        const data = await res.json();
        // console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
};

export { fetchProducts };
