// import { Container, Loader, VStack } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DynamicForm from "../components/dynamicForm";
// import { colorValues } from "../constants/colors";

// const FormPage = () => {
//   const [formSchema, setFormSchema] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const schema = localStorage.getItem("formSchema");
//     if (schema) {
//       setFormSchema(JSON.parse(schema));
//     }
//   }, []);

//   const handleFormSubmit = (data) => {
//     const formID = localStorage.getItem("currentFormID");
//     let responses = JSON.parse(localStorage.getItem("formResponses")) || [];

//     responses.push({ formID, data });
//     localStorage.setItem("formResponses", JSON.stringify(responses));
//     console.log("Form Submitted:", data);
//   };

//   console.log(formSchema, "form schema");

//   return (
//     <Container backgroundColor={colorValues?.background} maxWidth="none" p={10}>
//       <VStack spacing={5}>
//         {formSchema ? (
//           <DynamicForm schema={formSchema} onSubmit={handleFormSubmit} />
//         ) : (
//           <Loader />
//         )}
//       </VStack>
//     </Container>
//   );
// };

// export default FormPage;

import { Container, Loader, VStack } from "@chakra-ui/react"; 
import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import DynamicForm from "../components/dynamicForm"; 
import { colorValues } from "../constants/colors"; 

const FormPage = () => {
  const [formSchema, setFormSchema] = useState(null); // State to store the form schema
  const navigate = useNavigate(); // Initialize navigate function to control routing

  // useEffect hook to retrieve the form schema from localStorage when the component mounts
  useEffect(() => {
    const schema = localStorage.getItem("formSchema");
    if (schema) {
      setFormSchema(JSON.parse(schema)); // Parse and set the form schema from localStorage
    }
  }, []);

  // Handler function for form submission
  const handleFormSubmit = (data) => {
    const formID = localStorage.getItem("currentFormID"); // Retrieve the current form ID from localStorage
    let responses = JSON.parse(localStorage.getItem("formResponses")) || []; // Get previous form responses or initialize an empty array

    responses.push({ formID, data }); // Add the new form submission data to the responses array
    localStorage.setItem("formResponses", JSON.stringify(responses)); // Save updated responses to localStorage
  };


  return (
    <Container backgroundColor={colorValues?.background} maxWidth="none" p={10}>
      <VStack spacing={5}>
        {/* Check if the form schema is available */}
        {formSchema ? (
          // If the schema is available, render the DynamicForm component with the schema and submit handler
          <DynamicForm schema={formSchema} onSubmit={handleFormSubmit} />
        ) : (
          // If the schema is not available, show a loading spinner
          <Loader />
        )}
      </VStack>
    </Container>
  );
};

export default FormPage;
