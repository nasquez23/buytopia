import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FC } from "react";

const QUESTIONS = [
  {
    title: "What is the return policy?",
    answer:
      "We offer a 30-day return policy on all items. Items must be returned in their original condition and packaging.",
  },
  {
    title: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days within the contiguous United States. International shipping times vary.",
  },
  {
    title: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping rates and times vary based on the destination.",
  },
  {
    title: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@buytopia.com or by calling 123-456-7890. We are available 24/7 to assist you with any questions or concerns.",
  },
];

const FAQ: FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box sx={{ px: "10%", py: isMobile? "15%" : "10%", bgcolor: "#f9f9f9" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            bgcolor: "#db4444",
            width: "25px",
            height: "40px",
            borderRadius: "10%",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            mt: 1,
            fontFamily: "Montserrat",
            fontSize: "1rem",
            color: "darkred",
            fontWeight: "bold",
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box sx={{ mt: "5%", px: isMobile ? "0" : "10%" }}>
        {QUESTIONS.map((question, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                }}
              >
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "1rem" }}>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
