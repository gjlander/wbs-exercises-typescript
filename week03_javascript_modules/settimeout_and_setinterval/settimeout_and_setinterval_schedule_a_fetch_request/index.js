let counter = 1;

const myInterval = setInterval(async () => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
        const { name, id } = await res.json();
        const pokemon = { name, id };
        console.log(pokemon);

        counter++;
        if (counter > 150) clearInterval(myInterval);
    } catch (error) {
        console.error(error);
    }
}, 1000);
