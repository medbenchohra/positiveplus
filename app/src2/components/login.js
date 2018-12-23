import React , { Component }  from  'react' ; 
class Login extends Component{ 



    
    constructor (props) {
        super( props) ; 
        this.state=  {
            error : 0  , 
            u_name: "" ,
            u_pass : "" ,
            is_loggedin : false , 
            theme :"normal" 
        }
    }

    render () {


         return (   
             
            <form style = {small_form} className="uk-align-center">
            <div className="uk-margin">
                <input className="uk-input" type="text" placeholder="Nom d'utilisateur"  onChange={(e)  => this.setState( {

               u_name: e.target.value       
                }  )}/>
            </div>
            <div className="uk-margin">
                <input className="uk-input" type="password" placeholder="Mot de pass"  onChange={(e)  => this.setState( {

                 u_pass: e.target.value       
                    }  )}/> 
            </div>
            
        </form>
         )


    }

}



const  small_form = {

    width :"300px"  
    
}
export default Login ;