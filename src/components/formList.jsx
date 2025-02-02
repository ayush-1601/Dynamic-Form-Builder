import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { colorValues } from "../constants/colors";

const FormList = ({ formResponses }) => {
  const getUniqueFormResponses = (entries) => {
    const uniqueForms = new Map();
    for (const entry of entries) {
      if (!uniqueForms.has(entry.formID)) {
        uniqueForms.set(entry.formID, entry);
      }
    }
    return [...uniqueForms.values()];
  };

  return (
    <Box width="4xl" backgroundColor={colorValues?.base} borderRadius={20} p={5}>
      <Text color="white" fontSize="20px">Generated Forms</Text>
      <VStack borderRadius={25} backgroundColor={colorValues.white} mt={5}>
        {getUniqueFormResponses(formResponses).map((response) => (
          <Box key={response.formID} display="flex" justifyContent="space-between" width="100%" padding={5} alignItems="center">
            <Text>Form ID: {response?.formID}</Text>
            <HStack>
              <Button colorScheme="blue" onClick={() => window.open(`/${response?.formID}/responses`, "_blank")}>
                View Responses
              </Button>
              <Button colorScheme="blue" onClick={() => window.open(`/${response?.formID}/form`, "_blank")}>
                View Form
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default FormList;
