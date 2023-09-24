const Title = () => {
    return (
        <>
            <div className="header-left">
                <a href="./">
                    <img src="https://imgs.search.brave.com/dbfUbzep11fUE-F45pfy8yN1blyodeVjwsfsZL2JmpY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHJp/dmVteXdheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDQvRmFzdC1Gb29k/LVJlc3RhdXJhbnQt/TmFtZXMuanBn" alt="img"></img>
                </a>
                <h1>Food Villa</h1> 
            </div>
        </>
    )
};
const Header = () => {
    return (
        <div className="header-container">
            <Title />
            <div className="header-right">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}
export default Header