const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
    const data = await res.json();
    // console.log(data);

    return data;
};

export { getTodos };
