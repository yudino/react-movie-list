import popcorn from '../assets/popcorn.svg'

const Welcome = () => {
    return (
        <div className="welcome">
            <h1>Welcome to the React Movie List App</h1>
            <p>Choose a movie on the list beside or search for a movie in the search bar. </p>
            <p>Enjoy !</p>
            <img id="popcornImg" src={popcorn} alt="popcorn" />
        </div>
    )
}

export default Welcome
