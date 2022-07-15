
import { userService } from "../../../services/user.service";
import { customHelpers } from "../../../helpers/custom-helpers";
import { useAlert } from 'react-alert';
import { useRouter } from "next/router";

var checkAuth = customHelpers.checkAuth;
var fixAuth = customHelpers.fixAuth;
var validateToken = userService.validateToken;


export default function TokenVerification() {
    const router = useRouter();
    var [isAuthenticated, cookie] = checkAuth(router, '/', true); //automatically check if cookie exists and route authStatus matches the condition
    try{
        if (!isAuthenticated){

            var token = router.asPath.split('?')[1].split("=")[0]
            

        try{
            var {data, valid} = userService.validateToken(token)
            if (valid){
                userService.socialLogin(token, router);
            }
        } catch (err){
            console.log(err);
            console.log("Token Validation: ERROR");
            alert("Token Validation: ERROR");
            window.close();
            

        }
            

    } else {
        if (typeof window != 'undefined'){
            router.push('/');
            
        }
    }
} catch (err){
        if (typeof window != 'undefined'){
            console.log(err);
            router.push('/');
        }
    }



  return (
      <div>Redirecting Please Wait...</div>
  );
}
