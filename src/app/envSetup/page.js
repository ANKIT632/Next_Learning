import {API_BASE_URL} from '@/config/constant'

export default function page() {
  return (
    <div>


           {
        
        process.env.NODE_ENV=='development'?
        <h5>you are in development mode</h5>:<h5>you are in production mode</h5>

      }

      <h3>Env variable :</h3>
        <p>{process.env.DB_pass}</p>
        <p>{process.env.Mode_Name}</p>


{/* in dev and production mode have different url*/}

<h4>API URL :</h4>
        {
           API_BASE_URL
        }
      
        
    </div>
  )
}
