import React from 'react'


const Rating = ({value, text,color='yellow'}) => {
     return (
        <div className='rating'>
            <span>
            {(()=>{
                let totalStarNumber = 5;
                let fullStarNumber =  Math.floor(value);
                let halfStarNumber = value - fullStarNumber;
                let emptyStarNumber = totalStarNumber - fullStarNumber - Math.ceil(halfStarNumber);

                 let stars =[
                     ...(()=>{
                         if(fullStarNumber>0){
                             return new Array(fullStarNumber).fill(0).map(_=><i style={{color}} className='fas fa-star'></i>)
                         } else{
                             return [];
                         }
                     })(),
                    ...(()=>{
                           if(halfStarNumber>=0.5){
                                return [<i style={{color}} className='fas fa-star-half-alt'></i>]
                           } else if(halfStarNumber<0.5 &&halfStarNumber>0 ){
                               return [<i style={{color}} className='fas fa-star'></i>];
                           } else {
                               return [];
                           }
                    })(),
                    ...(()=>{
                        if(emptyStarNumber>0){
                            return new Array(emptyStarNumber).fill(0).map(_=><i style={{color}}  className='far fa-star'></i>)   
                        } else {
                            return [];
                        }
                    })()
                ];
            
               
              return stars ;
               })()}
               <span>{text && text}</span>
                {/* <i className={value >=1 ? 'fas fa-star' : value>=0.5? 'fas fa-star-half-alt':'fas fa-star'}>

                </i>
                <i className={value >=2 ? 'fas fa-star' : value>=0.5? 'fas fa-star-half-alt':'fas fa-star'}>

                </i>
                <i className={value >=3 ? 'fas fa-star' : value>=0.5? 'fas fa-star-half-alt':'fas fa-star'}>

                </i>
                <i className={value >=4 ? 'fas fa-star' : value>=0.5? 'fas fa-star-half-alt':'fas fa-star'}>
                </i>
                <i className={value >=5 ? 'fas fa-star' : value>=0.5? 'fas fa-star-half-alt':'fas fa-star'}>
                </i> */}
            </span>
            
        </div>
    )
}

export default Rating
