export const INITIAL_STATE ={
    loading:false,
    error:false,
    search:'',
    searchBar:'',
}

export const reducers = (state , action)=>{
    console.log(action)
    switch(action.type){
        case 'Fetch_start':
            return {
                loading : true,
                error : false,
                search : action.payload,
            };

        case 'Fetch_success':
            return{
                loading:false,
                error:false,
            };

        case 'Fetch_error':
            return{
                loading:false,
                error:true
            };

        case 'Fetch_search':
             return{
                searchBar : action.payload
             };
      
        default :
              return state

    }
}