import { useEffect } from 'react';

const Register = () => {

  useEffect(
    () => { 
      const fetchRegister = () => {
        const data = {
          username: "",
          email: "morgane.tessier22@gmail.com",
          password: "Mo123456"
        };
        
        fetch("http://localhost:1337/auth/local/register", {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response)
        });
      }
      fetchRegister();

    }, []
  );
  
  return (
    <h2>Register</h2>
  );
};
export default Register;