const count=0;
const myname="Jeevan";
const myaddress={
    address:'Dilsukhnagar',
    city:'Hyderabad'
}


/*     const [data,setData]=useState([]);


    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((data)=>setData(data));
        },[]
    )
 */

export default function reducer(state={count,myname,myaddress},action){
    const {type,payload}=action || {}

    switch(type){
        case "ADD":
            return{...state,count:state.count+payload}
        case "DELETE":
            return{...state,count:state.count-payload}

            default:
                return state;
    }

    
}