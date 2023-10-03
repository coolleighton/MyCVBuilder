function FavouriteFood() {

    const foods = ["chicken", "yoghurt", "bread", "corn"]
    const foodList = foods.map((foods) => <li key={foods}>{foods}</li>);
    return (
        <>
            <h1>My favourite foods</h1>
            <ul>
                {foodList}
            </ul>
        </>
    )
}

export default FavouriteFood;