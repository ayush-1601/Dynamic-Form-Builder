import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FileUpload from "../components/fileUpload"; // Component to handle file upload
import FormList from "../components/formList"; // Component to display the list of form responses
import { colorValues } from "../constants/colors"; // Importing color constants for styling

const HomePage = () => {
  const [jsonData, setJsonData] = useState(null); // State to store JSON data from the file upload
  const [formResponses, setFormResponses] = useState([]); // State to store form responses

  const [formID, setFormID] = useState(null); // State to store the current form ID

  // Load saved form responses from local storage on component mount
  useEffect(() => {
    const savedResponses =
      JSON.parse(localStorage.getItem("formResponses")) || []; // Get responses or set to empty array if none
    setFormResponses(savedResponses); // Update state with the saved responses
  }, []);

  // Load saved form ID from local storage on component mount
  useEffect(() => {
    const savedFormID = localStorage.getItem("currentFormID");
    if (savedFormID) setFormID(savedFormID); // Set form ID if it exists in local storage
  }, []);

  // Handler function for reading the file and saving the form data
  const handleFileRead = (data) => {
    const newformID = uuidv4(); // Generate a new unique form ID
    localStorage.setItem("formSchema", JSON.stringify(data)); // Save the form schema as JSON in local storage
    localStorage.setItem("currentFormID", newformID); // Save the current form ID in local storage
    window.open(`/${newformID}/form`, "_blank"); // Open the form page in a new tab
    setJsonData(data); // Update state with the form data
  };

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
        borderRadius={25}
      >
        <Text
          as="h1"
          color={colorValues?.white}
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
        >
          Dynamic Form Generator
        </Text>
      </Box>

      <VStack p={10}>
        {/* FileUpload component to handle file reading */}
        <FileUpload onFileRead={handleFileRead} />

        {/* Conditionally render FormList if there are form responses */}
        {formResponses.length > 0 && <FormList formResponses={formResponses} />}
      </VStack>
    </Container>
  );
};

export default HomePage;
