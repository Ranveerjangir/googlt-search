import { useState } from 'react'
import './index.css'

function App() {
  const [search, setSearch] = useState('')
  const [ finaldata , setFinalData] = useState([])
  const api ='AIzaSyCjomm7aE_JqyO4nsFDWs8QTRfFPscSfFI'
  const cx = "f5d309ab72fb0431a"
  const handleSearch = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cx}&q=${search}`
      );
      const data = await res.json();
      console.log(data.items);
      setFinalData(data.items)
      setSearch("data")
    } catch (error) {
      console.log('Error:', error);
    }
  };
  console.log(finaldata)
  return (
    <>  
{ <script async src="https://cse.google.com/cse.js?cx=f5d309ab72fb0431a">
</script>
}      <div className='main'>
      <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search</button>
    <div style={{display:"flex",alignItems :"center" ,justifyContent :"center" ,flexWrap:"wrap",width:"100%"}}>
    {
      (finaldata.length!==0)?finaldata.map((value,)=>{

        return(
        <div style={{width:"30%" , height:"200px",display:"flex",alignItems :"center" ,justifyContent :"center", flexDirection :"column" , backgroundColor:"blue" , borderRadius:"5px ", boxShadow:"2px black" , margin:"20px", color:"white"}}>
          <h2>{value.title}</h2>
          <p>{value.kind}</p>
          <a href={value.link}>click</a> 
        </div>
        )}):""}
        </div>
    </>
  )
}

export default App




