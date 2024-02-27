/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects:async()=>{
    return[
        {
            source:'/redirectPage',
            destination:'/StudentList',
            permanent:false
        },
    ]
  }

};


export default nextConfig;

// redirect

    // output:'export' it is generate static html page with build