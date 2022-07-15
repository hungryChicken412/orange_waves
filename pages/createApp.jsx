// return a simple form

import { createRef, useRef } from "react";
import { userService } from "../services/user.service.js";
import { customHelpers } from "../helpers/custom-helpers";
import { verifiers } from "../helpers/form-verifiers.js";
import axios from "axios";
import { useRouter } from "next/router";
import AdminHeader from "../components/AdminHeader";
import Navbar from "../components/Navbar";
import { useState } from "react";

import CustomColorPickerH from "../components/ColorPicker";
import { useAlert } from "react-alert";
import ReactAudioPlayer from 'react-audio-player';



export default function NewAppForm(props) {
  const alert = useAlert();
  const router = useRouter();
  const [isAuthenticated, cookie] = customHelpers.checkAuth(router, "/", false);
  const [formState, setFormState] = useState(1);
;
  if (isAuthenticated){
    var data = userService.getDashboardData(cookie);
  
    
    try {
      var email_verified = data[0]['email_confirmed'];
    } catch {
      var email_verified = false;
      //PASS;
    }
  }
  var childProps = {
    props,
    data
  }
    
    
  
  





  return (
    
    <>
      <Navbar props={[data, 'block']}/>

      <div className="max-w-screen-xl m-3 mx-auto w-full">
        <div className="mx-4 bg-custom font-bold shadow-md p-8 rounded-md text-center">
          <div className="animate-bounce ">
            
            <div className="loader">
            
              </div>
              </div>
        </div>
      </div>
      
    </>
  );
}


/*

 <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  className="form-checkbox customBorder rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                />
                
                <span className="ml-2 text-sm font-semibold text-blueGray">
                  I agree with the{" "}
                  <a
                    href="#pablo"
                    className="text-lightBlue-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

*/

