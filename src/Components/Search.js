/*import React from 'react'





const Search = () =>{

    const key = '1bd81b9c981a8dc287de8b3459579e83'
    const website= 'https://api.openweathermap.org/data/2.5/'

    
    
   

      const[query, setQuery] =React.useState('')
      const[weather, setWeather]= React.useState({})
      //const[loadong, setLoading]=React.useState('false')


      const handleChange = (event)=>{
          setQuery(event.target.value)
      }
       

      const handleSearch=(event) =>{
        fetch(`${website}weather?q=${query}&units=metric&APPID=${key}`)
        .then((res) => res.json())
        .then(result => {
             setQuery('');
             setWeather(result);
             console.log(result);
              
            

         })

      }

      


    return(

        <div className='contentprime'>
            
         
            <div className='search-box'>
              <input
              type='text'
              placeholder='Type in your city'
              value={query}
              onKeyPress={event => {if(event.key === 'Enter'){handleSearch(event)}}}
              onChange={event => {handleChange(event)}}
              className='inputfield'
              />
            <input
              type='search'
              onClick={handleSearch}
              className='submitfield'
             />
              
           </div>
                      
             <div className='weather-display'>
               <h1 className='location'>City Name/Country</h1>
               <h1 className='img'>icon</h1>
               </div>
               <center>
               <div className='temp'>
                 <h2>26<sup>0</sup>C</h2>
               </div>
               </center>
               <center>
               <div className='description'>
                 <h2></h2>
               </div>
               </center>
              


           

      

          

      
            
          
        

          
           

           

        </div>
    )
}


export default Search

*/