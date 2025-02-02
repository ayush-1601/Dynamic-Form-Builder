import { Box, Button } from "@chakra-ui/react";
import React, { useRef } from "react";

const FileUpload = ({ onFileRead }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          onFileRead(jsonData);
        } catch (error) {
          console.error("Invalid JSON file", error);
        }
      };
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{
          display: "none",
        }}
      />
      <Button
        colorPalette="green"
        size="xl"
        onClick={() => fileInputRef.current.click()}
        _hover={{ bg: "green.300" }}
        target="blank"
      >
        Upload JSON file
      </Button>
    </Box>
  );
};

export default FileUpload;
