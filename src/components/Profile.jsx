import React, { useState } from "react";
import styles from "../style/style";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
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
    email: "",
    photo: "",
    gender: "",
    isAgree: false,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUser({ ...user, [name]: value });
  };

  //   const navigate=useNavigate()

  const handleSave = () => {
    setList([user]);
    console.log(list);
    setOpen(false);

    // navigate("/displayProfile",{state:list})
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setList(false);
  };

  return (
    <Box style={styles.main_wrapper}>
      <Typography variant="h2">profile</Typography>
      <Button onClick={() => handleOpen()} variant="contained">
        + Add Profile
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <div
          style={styles.model}
        >
          <Typography variant="h3">Profile</Typography>

          {/* <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <FormLabel>image</FormLabel>
            <input
              hidden
              accept="image/*"
              value={user.photo}
              onChange={(e) => handleChange(setUser(e.target.files[0]))}
              type="file"
            />
            <PhotoCamera />
          </IconButton> */}

          <input
            type="file"
            accept="/image/*"
            onChange={(e) => setUser(e.target.files[0])}
          />

          <Box
            fullWidth
            style={styles.input_container}
          >
            <FormLabel>Store name: </FormLabel>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="storeName"
              size="small"
              style={styles.input_field}
            />
          </Box>
          <Box
            style={styles.input_container}
          >
            <FormLabel>Address : </FormLabel>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="address"
              size="small"
              style={styles.input_field}
            />
          </Box>

          {/* <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"50%"}} >
            <FormLabel>Male</FormLabel>
        <Radio  
        name="gender"
        value='male'
        
        onChange={handleChange}/>

        <FormLabel>Female</FormLabel>
        <Radio  
        name="gender"
        value="female"
   
        onChange={handleChange}/>
        </Box> */}

          <Box style={styles.input_container} >
            <FormLabel>Properioter : </FormLabel>

            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="properties"
              size="small"
              style={styles.small_input_field}
              />

            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="properties"
              size="small"
              style={styles.small_input_field}
              
            />
          </Box>

          <Box style={styles.input_container} >
            <FormLabel>Gender : </FormLabel>
            <FormControlLabel
              onChange={(e) => handleChange(e)}
              name="gender"
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              onChange={(e) => handleChange(e)}
              name="gender"
              value="male"
              control={<Radio />}
              label="Male"
            />
          </Box>

          <Box style={styles.input_container} >
            <FormLabel>Mobile No.: </FormLabel>

            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="mobile"
              size="small"
              style={styles.small_input_field}
              />

            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="mobile"
              size="small"
              style={styles.small_input_field}
            />
          </Box>

          <Box style={styles.input_container} >
            <FormLabel>Email : </FormLabel>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              name="email"
              size="small"
              style={styles.input_field}
            />
          </Box>

          <Box sx={{  }}>
            <Checkbox
              checked={user.isAgree}
              name="isAgree"
              onChange={(e) => handleChange(e)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>I am Agree all terms & conditins</Typography>
          </Box>

          <Box style={styles.button_container} >
            <Button
              sx={{ bgcolor: "orange" }}
              onClick={() => handleSave()}
              variant="contained"
            >
              Save
            </Button>
            <Button
              sx={{ bgcolor: "orange" }}
              onClick={() => setOpen(false)}
              variant="contained"
            >
              Cancel
            </Button>
          </Box>
        </div>
      </Dialog>

      <Table style={styles.react_table} >
        <TableHead>
          <TableCell>Stor Name</TableCell>
          <TableCell>Adress</TableCell>
          <TableCell>Proprioter</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile No</TableCell>
          <TableCell>Gender</TableCell>
        </TableHead>
        <TableBody>
          {list.map((item, index) => {
            return (
              <>
                <TableCell key={index}>{item.storeName}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.properties}</TableCell>
                <TableCell> {item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.gender}</TableCell>
              </>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Profile;