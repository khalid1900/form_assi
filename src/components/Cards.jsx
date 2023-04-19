import { useState } from "react"
import "../App.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog } from "@mui/material";

const initialValue = {
    fName: "",
    lName: "",
    age: "",
    desig: "",
    salary: "",
    ind: ""
}


const Cards = () => {

    const [userInfo, setUserInfo] = useState(initialValue)
    const [dialogBox, setDialogBox] = useState(false)
    const [data, setData] = useState(userData)
    const [update, setUpdate] = useState(false)

    const handleDelete = (index) => {
        const deleteItem = [...data]
        // console.log(data);
        deleteItem.splice(index, 1)
        setData(deleteItem);
    }

    const handleClose = () => {
        setData([...data, userInfo])
        setUserInfo({
            fName: "",
            lName: "",
            age: "",
            desig: "",
            salary: "",
        })
        setDialogBox(false)
    }

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setUserInfo({ ...userInfo, [name]: value })
    }


    const handleEdit = (item, index) => {
        setUserInfo({ ...item, ind: index })
        setDialogBox(true);
        setUpdate(true)
    }
    const handleUpdate = () => {
        const update = [...data];


        update.splice(userInfo.ind, 1, userInfo)
        setData(update)
        setUpdate(false)
        setDialogBox(false)
    }

    return (
        <>
            <Dialog open={dialogBox} close={dialogBox} >
                <div className="add_user_card">
                    <div className="add_user_details" >
                        <h1> ADD USER </h1>
                        <span className="input_container" >
                            <label className="label">First Name : </label>
                            <input type="text" name='fName' value={userInfo.fName} onChange={(event) => handleOnChange(event)} />
                        </span>

                        <span className="input_container" >
                            <label className="label">last Name : </label>
                            <input type="text" name='lName' value={userInfo.lName} onChange={(event) => handleOnChange(event)} />
                        </span>

                        <span className="input_container" >
                            <label className="label">Age : </label>
                            <input type="text" name='age' value={userInfo.age} onChange={(event) => handleOnChange(event)} />
                        </span>
                        <span className="input_container" >
                            <label className="label">Designation : </label>
                            <input type="text" name='desig' value={userInfo.desig} onChange={(event) => handleOnChange(event)} />
                        </span>
                        <span className="input_container" >
                            <label className="label">Salary : </label>
                            <input type="text" name='salary' value={userInfo.salary} onChange={(event) => handleOnChange(event)} />
                        </span>
                        {!update ? <button className="add_button" onClick={handleClose}>+ADD</button> :
                            <button className="add_button" onClick={handleUpdate}>Update</button>
                        }

                    </div>
                </div>
            </Dialog>

            <h1>USER DASHBOARD UI</h1>
            <div className="add_button_container">
                <button className="add_button" onClick={() => setDialogBox(true)} > + ADD USER</button>
            </div>
            <div className="horizontal_scroll" >
                {data.map((item, index) => {
                    return (

                        <div key={index}>
                            <div className="horizontal_card">
                                <div className="img_wrapper" >
                                    <div className="img_container">
                                        <h2 className="profile_details" > {`${item.fName.charAt(0).toLocaleUpperCase()} ${item.lName.charAt(0).toLocaleUpperCase()}`}</h2>
                                    </div>
                                </div>
                                <div className="user_container" >
                                    <label> <b> Name : </b></label>
                                    <h5 className="user_details">{`${item.fName} ${item.lName}`}</h5>
                                </div>
                                <div className="user_container" >
                                    <label> <b> Age : </b></label>
                                    <h5 className="user_details">{`${item.age}`}</h5>
                                </div>
                                <div className="user_container" >
                                    <label> <b> Designation : </b></label>
                                    <h5 className="user_details">{`${item.desig}`}</h5>
                                </div>
                                <div className="user_container" >
                                    <label> <b> Salary : </b></label>
                                    <h5 className="user_details">{`${item.salary}`}</h5>
                                </div>
                                <div>
                                    <DeleteIcon className="deleteIcon" onClick={() => handleDelete(index)} />
                                    <span className="edit_button_container">
                                        <button className="edit_button" style={{background:'white'}} onClick={() => handleEdit(item, index)}> Edit</button>
                                    </span>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}
export default Cards;

export const userData = [
    {
        fName: "Khalid",
        lName: "ahmed",
        age: 22,
        desig: "SDE",
        salary: 10000
    },
    {
        fName: "Ahmed",
        lName: "khan",
        age: 21,
        desig: "SDE",
        salary: 10000
    },
    {
        fName: "Faisal",
        lName: "Attar",
        age: 21,
        desig: "SDE",
        salary: 10000
    },
    {
        fName: "Mazar",
        lName: "khan",
        age: 28,
        desig: "SDE",
        salary: 10000
    },

]