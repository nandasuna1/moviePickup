import React from 'react'
import MovieSelection from '../../components/Templates/MovieSelection'
// import COLORS from '../../configs/const'
export  function MovieSelectionPage() {
  return (
    <>
        <MovieSelection 
            backgroundColor='#08518d' 
            HeaderProps={{
                color:'#fff', 
                backgroundColor:'#08518d', 
                iconColor:'#fff' 
            }}
        />
    </>
  )
}
