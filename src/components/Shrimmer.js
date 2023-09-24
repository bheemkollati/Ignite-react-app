const Shrimmer = () =>{
    return (
        <>
            <div className="shrimmer-container">
            {
                Array(10).fill("").map((el,index) => <div key={index} className="shrimmer-card">
            
                </div>)
            } 
            </div>
        </>
    )
}

export default Shrimmer