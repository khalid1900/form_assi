import React, { useState } from "react";
import styles from "../style/style";
import { FormControlLabel, IconButton } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Box,
  Button,
  Dialog,
  
  FormLabel,

  TextField,
  Typography,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ImageUpload from "./ImageUpload";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [user, setUser] = useState({
    storeName: "",
    properties: "",
    address: "",
    mobile: "",
    email:"",
    photo:"",
    gender:""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //   const navigate=useNavigate()

  const handleSave = () => {
    setList([...list, user]);
    console.log(list);
    setOpen(false)
    // navigate("/displayProfile",{state:list})
  };

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose=()=>{
    setList(false)
  }

  return (
    <Box style={styles.main_wrapper}>
      <Typography variant="h2">profile</Typography>
      <Button onClick={() => handleOpen()} variant="contained">
        + Add Profile
      </Button>

      <Dialog  open={open} onClose={handleClose}>
        <div style={{width:"500px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

        <IconButton color="primary" aria-label="upload picture" component="label">
        <FormLabel>image</FormLabel>
        {/* <input hidden accept="image/*" value={user.photo} onChange={(e)=>handleChange(setUser(e.target.files[0]))} type="file" /> */}
        <PhotoCamera />
      </IconButton>

        
        <Box sx={{ width: "80%", marginTop: "15px" }}>
          <FormLabel>Store name: </FormLabel>
          <TextField
            onChange={(e) => {
              handleChange(e);
            }}
            name="storeName"
            size="small"
            fullWidth
          />
        </Box>
        <Box sx={{ width: "80%", marginTop: "15px" }}>
          <FormLabel>Proprietor : </FormLabel>
          <TextField
            onChange={(e) => {
              handleChange(e);
            }}
            name="properties"
            size="small"
            fullWidth
          />
        </Box>

        <Box fullWidth >
            <FormLabel>Male</FormLabel>
        <TextField  type="radio"
        name="male"
        checked={ user.gender=== 'male'}
        onChange={handleChange}/>

        <FormLabel>Female</FormLabel>
        <TextField  type="radio"
        name="female"
        checked={ user.gender=== 'Female'}
        onChange={handleChange}/>
        </Box>




        <Box sx={{ width: "80%", marginTop: "15px" }}>
          <FormLabel>Address Name : </FormLabel>
          <TextField
            onChange={(e) => {
              handleChange(e);
            }}
            name="address"
            size="small"
            fullWidth
          />
        </Box>
        <Box sx={{ width: "80%", marginTop: "15px" }}>
          <FormLabel>Email : </FormLabel>
          <TextField
            onChange={(e) => {
              handleChange(e);
            }}
            name="email"
            size="small"
            fullWidth
          />
        </Box>
        <Box sx={{ width: "80%", marginTop: "15px" }}>
          <FormLabel>Mobile : </FormLabel>
          <TextField
            onChange={(e) => {
              handleChange(e);
            }}
            name="mobile"
            size="small"
            fullWidth
          />
        </Box>
        <Box  sx={{width:"250px", margin: "10px",display:"flex",justifyContent:"space-between" }}>
          <Button onClick={() => handleSave()} variant="contained">
            Save
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            Cancel
          </Button>
        </Box>
        </div>
      </Dialog>

            {list.map((item,index)=>{
                return(
                    <>
                    {/* <img src={URL.createObjectURL(item.photo)} alt='pic'/> */}
                    <p>{item.storeName}</p>
                    <p>{item.properties}</p>
                    <p>{item.email}</p>
                    <p>{item.address}</p>
                    <p>{item.mobile}</p>
                    <p>{item.gender.value}</p>
                    </>
                )
            })}

    </Box>
  );
};

export default Profile;
