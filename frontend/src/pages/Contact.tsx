import { Call, MailOutline } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ mb: "10%" }}>
      <Breadcrumbs sx={{ px: "10%", py: "5%" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#888" }}>
          Home
        </Link>
        <Typography color="text.primary">Contact</Typography>
      </Breadcrumbs>
      <Container
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 3,
        }}
      >
        <Paper
          sx={{
            pt: 3,
            px: 3,
            width: isMobile ? "90%" : "33%",
          }}
        >
          <Typography sx={{ mb: 3, fontWeight: 600, fontSize: "24px" }}>
            <Call
              sx={{
                verticalAlign: "middle",
                mr: 2,
                backgroundColor: "#db4444",
                color: "white",
                borderRadius: "50%",
                p: 1,
              }}
            />
            Call To Us
          </Typography>
          <Typography sx={{ fontSize: "17px", fontWeight: 500 }}>
            We are available 24/7, 7 days a week
          </Typography>
          <Typography sx={{ pb: 3, mt: 3, fontSize: "17px", fontWeight: 500 }}>
            Phone: 123-456-7890
          </Typography>
          <Divider
            variant="middle"
            sx={{ borderBottomWidth: 3, borderBottomColor: "#c8c8c8" }}
          />
          <Typography sx={{ mb: 3, fontWeight: 600, fontSize: "24px", pt: 3 }}>
            <MailOutline
              sx={{
                verticalAlign: "middle",
                mr: 2,
                backgroundColor: "#db4444",
                color: "white",
                borderRadius: "50%",
                p: 1,
              }}
            />
            Write To Us
          </Typography>
          <Typography sx={{ fontSize: "17px", fontWeight: 500, mb: 2 }}>
            Fill out our form and we will contact you within 24 hours
          </Typography>
          <Typography sx={{ fontSize: "17px", fontWeight: 500, pb: 5 }}>
            Email: customersupport@buytopia.com
          </Typography>
        </Paper>
        <Paper
          sx={{
            pt: 4,
            px: 3,
            width: isMobile ? "90%" : "66%",
          }}
        >
          <Box component="form">
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 2,
                mb: 3,
              }}
            >
              <TextField
                required
                label="Your Name"
                variant="filled"
                sx={{
                  width: isMobile ? "95%" : "50%",
                  "& .MuiFormLabel-asterisk": {
                    color: "red",
                  },
                  "& .MuiFilledInput-root": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none",
                  },
                }}
              />
              <TextField
                required
                label="Your Email"
                variant="filled"
                sx={{
                  width: isMobile ? "95%" : "50%",
                  "& .MuiFormLabel-asterisk": {
                    color: "red",
                  },
                  "& .MuiFilledInput-root": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none",
                  },
                }}
              />
              <TextField
                required
                label="Your Phone"
                variant="filled"
                sx={{
                  width: isMobile ? "95%" : "50%",
                  "& .MuiFormLabel-asterisk": {
                    color: "red",
                  },
                  "& .MuiFilledInput-root": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "none",
                  },
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none",
                  },
                }}
              />
            </Box>
            <TextField
              label="Your Message"
              variant="filled"
              multiline
              rows={7}
              sx={{
                width: isMobile ? "95%" : "100%",
                "& .MuiFilledInput-root": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiFilledInput-underline:hover": {
                  borderBottom: "none",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
                mt: isMobile ? 3 : 2,
                mb: isMobile ? 5 : 0,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  py: 2,
                  px: 5,
                  textTransform: "capitalize",
                  fontSize: "16px",
                  backgroundColor: "#db4444",
                  "&:hover": {
                    backgroundColor: "darkred",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
