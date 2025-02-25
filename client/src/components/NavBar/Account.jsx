import React from "react";
import { useState } from "react";
/* import { useDispatch useSelector  } from "react-redux"; */
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddchartIcon from "@mui/icons-material/Addchart";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

export default function Account() {
  /*  const dispatch = useDispatch(); */

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <Tooltip title="My account">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ bgcolor: blue[700], width: 30, height: 30 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component={Link} to="/admusers">
          <AssignmentIndIcon sx={{ mr: 1 }} />
          Administrar Usuarios
        </MenuItem>
        <MenuItem component={Link} to="/admcourses">
          <AssignmentIcon sx={{ mr: 1 }} />
          Administrar Cursos
        </MenuItem>
        <MenuItem component={Link} to="/createcourse">
          <AddToPhotosIcon sx={{ mr: 1 }} /> Crear Curso
        </MenuItem>
        <MenuItem component={Link} to="/createcategory">
          <AddchartIcon sx={{ mr: 1 }} />
          Crear Categoría
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
