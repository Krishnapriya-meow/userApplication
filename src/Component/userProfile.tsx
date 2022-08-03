import { useSelector } from "react-redux";
import { singleUserSelector } from "../Container/UsersSlice";
import { Image } from "semantic-ui-react";
export const UserProfile = () => {

    const user = useSelector(singleUserSelector);
    
    return (
        <div className="list">
            {user ? (
                <div>
                    <p style={{ marginLeft: '900px' }}><Image src={user?.avatar} /></p>
                    <p><strong> Name :</strong>{user?.first_name}</p>
                    <p> <strong>Email: </strong>{user?.email}</p>
                </div>) :
                (<div>Please Select User</div>)}
        </div>
    )
}