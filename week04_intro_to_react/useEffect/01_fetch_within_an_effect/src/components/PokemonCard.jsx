const PokemonCard = ({ name, sprites, id, types }) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center'>
            <img src={sprites.front_default} alt={name} />
            <h3>{name}</h3>
            <p>{`ID: ${id} | Type: ${types
                .map((typeInfo) => typeInfo.type.name)
                .join(', ')}`}</p>
        </div>
    );
};

export default PokemonCard;
