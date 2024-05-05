import { useEffect, useState } from "react"; 
import { UserType } from "./UserType";

const Customers = () => {
  const [users, setUsers] = useState<UserType[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://app.olimjanov.uz/v1/service/get-all");
        console.log(res);
        
        if (res.ok) {
          const userData: UserType[] = await res.json();
          setUsers(userData); 
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
         
        </div>
      ))}
    </div>
  );
};

export default Customers;
