import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
  } from '@chakra-ui/react'

  import {userLogin, selectUser} from  '../features/user/userSlice'

import bgImg from "../images/background.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const {user} = useSelector(selectUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

     console.log("did i get user?", user)

    const submitHandler = async function (e){
        e.preventDefault();
        //this function gets called on submit form
        console.log(e.target.username.value, e.target.password.value);

        const response = await fetch("/api/signup", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })

        })
        const data = await response.json();

        if(data.message === "success"){

            console.log("success to redux", data.user)
            dispatch(userLogin(data.user));
            navigate("/")
        }

    }
    const bgStyles={
        backgroundImage:bgImg,
        h: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover"

    }

    const boxStyles={
      
        width: "400px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px"

    }





    return <Box {...bgStyles}>
   <div className="logo" onClick={()=> navigate("/")}>
        
        [Logo]
      </div>
            <Box {...boxStyles} >
            <h2>Sign Up</h2>
            <form onSubmit={submitHandler}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' name="username" />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name="password"/>
                </FormControl>
                <FormControl mt="10px">
                <Input backgroundColor={"gray"} color="white" type="submit" value="Login"/>
                </FormControl>
            </form>
        </Box>
    </Box>
}