const Random =(props)=>{
    const{min,max,maxInputChange,minInputChange,generateBtn}=props
    return (
        <>
        <input type="number" value={min} placeholder="Min Number" onChange={minInputChange}/>
        <input type="number" value={max} placeholder="Max Number" onChange={maxInputChange}/> <br/>
        <button onClick={generateBtn}>Generate</button>
        </>
    )
}
export default Random