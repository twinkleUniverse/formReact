
import {React,useState} from "react";


const Form = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(input);
    setEmailValid(emailRegex.test(input));
  };

  const validatePassword = (input) => {
    setPassword(input);
    setPasswordValid(input.length >= 8);
  };

  const validateConfirmPassword = (input) => {
    setConfirmPassword(input);
    setConfirmPasswordValid(input === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <div className="container">
      <div className="field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          style={{
            border: emailTouched ? (emailValid ? '3px solid green' : '3px solid red') : '3px solid  rgb(70, 109, 176)',
          }}
        />
        {emailTouched && !emailValid && (
          <p style={{ color: 'red', fontSize: '0.8em' }}>Please enter a valid email</p>
        )}
      </div>
      <div className="field">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          style={{
            border: passwordTouched ? (passwordValid ? '3px solid green' : '3px solid red') : '3px solid  rgb(70, 109, 176)',
          }}
        />
        {passwordTouched && !passwordValid && (
          <p style={{ color: 'red', fontSize: '0.8em' }}>Password must be at least 8 characters long</p>
        )}
      </div>
      <div className="field">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => validateConfirmPassword(e.target.value)}
          onBlur={() => setConfirmPasswordTouched(true)}
          style={{
            border: confirmPasswordTouched ? (confirmPasswordValid ? '3px solid green' : '3px solid red') : '3px solid rgb(70, 109, 176)',
          }}
        />
        {confirmPasswordTouched && !confirmPasswordValid && (
          <p style={{ color: 'red', fontSize: '0.8em' }}>Passwords do not match</p>
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};







    /*const [email,setEmail]= useState('');
    const [pass,setPassword]= useState("");
    const [confirme,setConfirme]= useState('');
    const [passStyle, setPassStyle]=useState({ border:"3px solid",borderColor:"red"});
    const [confirmeStyle, setconfirmStyle]=useState({border:"3px solid",borderColor:"red"});
    const [emailStyle,setEmailStyle]=useState({border:"3px solid",borderColor:"red"});
    const [valid,setValid]=useState(false);
   
    /*console.log(confirme==pass);
    console.log("passwordL=",pass.length);
    console.log("confirmed=",confirme);
    

    const handlePassword = (event)=>{
        const str=event.target.value;
        setPassword(str);
        setPassStyle({...passStyle,borderColor:pass.length>=8?"green":"red"})
    }
    
     const handleConfirmePassword = (event)=>{
        const str=event.target.value;
        setConfirme(str);  
        setconfirmStyle({...confirmeStyle,borderColor:pass==confirme?"green":"red"})     
    }
    
    const handleEmail=(event)=>{
        setEmail(event.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         setValid(emailRegex.test(email));
        setEmailStyle({...emailStyle,borderColor:valid?"green":"red"});
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
       if(pass==confirme)
       alert("valid");
    else
        alert("Invalid")
           
        
    }

   
    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <span>Email :</span>
               
                <input style={emailStyle} type="email" placeholder="Email" onChange={handleEmail}/>
                <span>Password :</span>
                <input style={passStyle} type="password" placeholder="Password" required value={pass} onChange={handlePassword}/>
                <span>Confirme Password :</span>
                <input style={confirmeStyle} type="password" placeholder="Confirme Password" value={confirme} onChange={handleConfirmePassword}/>
                <button >Sign Up</button>
             
            </form>
        </div>
    )
};*/

export default Form;