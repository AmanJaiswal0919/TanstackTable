import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
function UserPage() {
  const [data, setdata] = useState({});
  const {id}= useParams()
  function fetchJoke () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setdata(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchJoke()
  }, [id]);
  console.log(data,'this si data')
  return (
    <>
  <img className="h-40 w-40 m-4"src="https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/>
        <div className="border-4 border-black mt-10 inline-block">
          <span className="text-2xl  italic font-bold mr-2">EMPLOYEE ID :</span> 
          <span className="text-2xl font-bold text-red-500">{data.id}</span>
          <br/>
          <span className="text-2xl italic font-bold  mr-2">EMPLOYEE NAME :</span>
          <span className="text-2xl font-bold text-red-500">{data.name}</span>
          <br/>
          <span className="text-2xl italic font-bold  mr-2">EMPLOYEE USERNAME :</span>
          <span className="text-2xl font-bold text-red-500">{data.username}</span>
          <br/>
          <span className="text-2xl italic font-bold  mr-2">EMPLOYEE EMAIL :</span>
          <span className="text-2xl font-bold text-red-500">{data.email}</span>
          </div>
       </>
  )
}

export default UserPage