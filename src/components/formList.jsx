import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
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
    <Box width={{base:'xs', md: 'lg', lg:"4xl"}} backgroundColor={colorValues?.base} borderRadius={{base: 12,lg:20}} p={{ base: 4, lg: 5 }}>
      <Text color="white" fontSize={{base:'16px', lg:"20px"}}>Generated Forms</Text>
      <VStack borderRadius={{base: 12,lg:25}} backgroundColor={colorValues.white} mt={5}>
        {getUniqueFormResponses(formResponses).map((response) => (
          <Box key={response.formID} display="flex" justifyContent="space-between" width="100%" padding={5} alignItems="center" gap={4}>
            <Text fontSize={{base:'12px', lg:"16px"}}>Form ID: {response?.formID}</Text>
            <Flex flexDirection={{base: 'column', lg: 'row'}} gap='10px'>
              <Button colorScheme="blue" onClick={() => window.open(`/${response?.formID}/responses`, "_blank")} size={{base: 'xs', lg: 'md'}}>
                View Responses
              </Button>
              <Button colorScheme="blue" onClick={() => window.open(`/${response?.formID}/form`, "_blank")} size={{base: 'xs', lg: 'md'}}>
                View Form
              </Button>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default FormList;
