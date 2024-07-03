import React from 'react';
import Layout from '../components/layout';
import BannerUser from '../components/BannerUser';
import Perfil from '../components/Perfil';


const Profile=()=>{
    return(
        <>
            <Layout>
                
                <Perfil
                    email={ localStorage.getItem('tandem_email')}
                    id={localStorage.getItem('tandem_id')}
                    role ={localStorage.getItem('tandem_role')}
                />
            </Layout>
            
        </>
    )
}
export default Profile