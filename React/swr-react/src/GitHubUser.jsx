
import useSWR from "swr"

const fetcher=((url)=> fetch(url).then((response)=>{
    if (!response.ok) throw new Error('Failed to fetch'); // Manejar errores de peticion (agregaba elementos vacíos con error 404)
  return response.json();
}))

function GitHubUser({username}) {

    const {data,error,isLoading}= username ? useSWR(`https://api.github.com/users/${username}`, fetcher) :{data:null,error:null,isLoading:false}; //hace peticion si se da el usuario 
    if (!username || error ) return null //Retorna null si el valor es falso o hay error

    if (isLoading) return <div> Loading</div>  //para ver si hacía el fetch
    if(error) return <div> Error: {error}</div>

    return (
        <div>
            {data && (
                <div>
                    <h2>{data.login}</h2>
                </div>
            )}
        </div>
    )
}

export default GitHubUser