import {
  Stack,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
  Link,
  Box,
  Avatar,
  Modal,
} from "@mui/material";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FormCheckBox from "../components/Form/FormCheckBox";
import FormProvider from "../components/Form/FormProvider";
import FormTextField from "../components/Form/FormTextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "4px solid grey",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(true);

  const defaultValues = {
    username: "Nhat Nguyen",
    password: "123456",
    remember: true,
  };
  const methods = useForm({ defaultValues });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassWord] = useState(false);
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    auth.login(data.username);
    navigate(from);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} id="login_container">
        <Avatar
          sx={{
            background: "#F0534A",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          id="avatar"
        >
          <LockOutlinedIcon id="icon_lock" />
        </Avatar>
        <Typography sx={{ textAlign: "center", mb: 3 }} variant="h3">
          Login
        </Typography>

        <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <Stack spacing={3} sx={{ width: 350, margin: "10px auto" }}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <FormTextField
              name="username"
              label="UserName"
              id="username"
              control={control}
            />
            <FormTextField
              name="password"
              label="password"
              id="password"
              control={control}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassWord(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                      id="icon_show"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignContent="center"
            justifyContent="space-between"
            sx={{ mr: 29 }}
          >
            <FormCheckBox
              label="remember me"
              sx={{ margin: "0 auto" }}
              name="remember"
            />
          </Stack>

          <Stack sx={{ width: 350, margin: "10px auto" }}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Login
            </LoadingButton>
            <Typography>
              <Link sx={{ textDecoration: "none" }} href="#">
                Forgot password ?
              </Link>
            </Typography>
            <Typography>
              Do you have an account ?{" "}
              <Link sx={{ textDecoration: "none" }} href="#">
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default LoginForm;
