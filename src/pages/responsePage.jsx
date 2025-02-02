import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { colorValues } from "../constants/colors";

const ResponsesPage = () => {
  const { formID } = useParams();
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const savedResponses =
      JSON.parse(localStorage.getItem("formResponses")) || [];
    const filteredResponses = savedResponses.filter(
      (res) => res.formID === formID
    );
    setResponses(filteredResponses);
  }, [formID]);

  return (
    <Container
      centerContent
      backgroundColor={colorValues?.background}
      w="100%"
      height="100vh"
      maxWidth="none"
      p={10}
    >
      <Box
        backgroundColor={colorValues?.base}
        width="4xl"
        p={10}
        mb={10}
        borderRadius={25}
      >
        <Text
          as="h1"
          color={colorValues?.white}
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          Responses for Form {formID}{" "}
        </Text>
      </Box>

      {responses.length > 0 ? (
        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
            maxWidth: "100%",
            overflowX: "auto",
          }}
        >
          {JSON.stringify(responses, null, 2)}
        </pre>
      ) : (
        <Text mt={4}>No responses found for this form.</Text>
      )}
    </Container>
  );
};

export default ResponsesPage;
