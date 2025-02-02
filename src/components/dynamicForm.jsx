import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import {
  Box,
  Button,
  CheckboxGroup,
  Container,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { colorValues } from "../constants/colors";
import { CheckboxCard } from "./ui/checkbox-card";
import { Radio, RadioGroup } from "./ui/radio";
import { Toaster, toaster } from "./ui/toaster";

const DynamicForm = ({ schema, onSubmit }) => {
  // Initialize React Hook Form
  const { register, handleSubmit, control, reset, formState } = useForm();
  const { errors } = formState;

  //Form submission
  const handleFormSubmit = (data) => {
    onSubmit(data); // Submit data
    reset(); // Reset form after submission
    toaster.success({
      title: "Form submitted succesfully",
      type: 'success'
    });
  };

  return (
    <Container
      as="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      centerContent
    >
      <Toaster />
      <Box width="2xl" display="flex" flexDirection="column" spaceY="20px">
        {/* Form Title and Description */}
        <Box
          width="full"
          backgroundColor={colorValues?.base}
          p={10}
          borderRadius={20}
        >
          <VStack alignItems="left" color={"white"} fontWeight="bold">
            <Text fontSize="40px">{schema?.formTitle || ""}</Text>
            <Text fontSize="20px">{schema?.formDescription || ""}</Text>
          </VStack>
        </Box>

        <Box justifyContent="left">
          <FormControl
            id={schema.formTitle || "defaultForm"}
            size="sm"
            isInvalid={Object.keys(errors).length > 0}
          >
            <Box width="full">
              <VStack gap={4}>
                {/* Dynamically render form fields based on schema */}
                {schema.fields.map((field) => {
                  <FormLabel fontWeight="bold">{field.label}</FormLabel>;
                  switch (field?.type) {
                    case "text":
                    case "email":
                    case "password":
                    case "date":
                    case "number":
                      return (
                        <Controller
                          defaultValue={""}
                          control={control}
                          name={field.label || ""}
                          rules={{
                            required:
                              field.required && "This field is required",
                            minLength: field.validation?.minLength && {
                              value: field.validation.minLength,
                              message: `Must be at least ${field.validation.minLength} characters`,
                            },
                            maxLength: field.validation?.maxLength && {
                              value: field.validation.maxLength,
                              message: `Must be at most ${field.validation.maxLength} characters`,
                            },
                            pattern: field.validation?.pattern && {
                              value: new RegExp(field?.validation?.pattern),
                              message: field?.validation?.message,
                            },
                          }}
                          render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { error },
                          }) => (
                            <Box
                              borderRadius={20}
                              width="full"
                              p={5}
                              backgroundColor={colorValues?.white}
                            >
                              <Stack spaceY={5} width="50%">
                                <Text>
                                  {field.label}{" "}
                                  {field?.required && (
                                    <Text color="red.500" as="span">
                                      {" "}
                                      *
                                    </Text>
                                  )}
                                </Text>
                                <Stack>
                                  <Input
                                    outline="none"
                                    variant="flushed"
                                    key={field?.id}
                                    type={field?.type}
                                    onChange={onChange}
                                    value={value}
                                    css={{ "--focus-color": "none" }}
                                    isInvalid={!!error}
                                    placeholder={field?.placeholder || "Type here..."}
                                  />
                                  <FormErrorMessage
                                    color="red"
                                    fontSize="small"
                                  >
                                    {error && error.message}
                                  </FormErrorMessage>
                                </Stack>
                              </Stack>
                            </Box>
                          )}
                        />
                      );

                    case "select":
                      return (
                        <Controller
                          control={control}
                          defaultValue={null}
                          name={field?.label || ""}
                          rules={{
                            required:
                              field.required && "This field is required",
                          }}
                          render={({
                            field: { onChange, value, ref, name },
                            fieldState: { error },
                          }) => (
                            <Box
                              borderRadius={20}
                              width="full"
                              p={5}
                              backgroundColor={colorValues?.white}
                            >
                              <Stack spaceY={5} width="50%">
                                <Text>
                                  {field.label}{" "}
                                  {field?.required && (
                                    <Text color="red.500" as="span">
                                      {" "}
                                      *
                                    </Text>
                                  )}
                                </Text>
                                <Stack>
                                  <Select
                                    key={field?.id}
                                    ref={ref}
                                    name={name}
                                    onChange={(selectedOption) =>
                                      onChange(selectedOption)
                                    }
                                    value={value}
                                    options={field.options?.map((option) => ({
                                      label: option.label,
                                      value: option.value,
                                    }))}
                                    placeholder={field?.placeholder || `Select ${field?.label}`}
                                  />
                                  <FormErrorMessage
                                    color="red"
                                    fontSize="small"
                                  >
                                    {error && error.message}
                                  </FormErrorMessage>
                                </Stack>
                              </Stack>
                            </Box>
                          )}
                        />
                      );

                    case "radio":
                      return (
                        <Controller
                          control={control}
                          name={field.label || "defaultForm"}
                          rules={{
                            required:
                              field.required && "This field is required",
                          }}
                          render={({
                            field: { onChange, value, ref, name },
                            fieldState: { error },
                          }) => (
                            <Box
                              borderRadius={20}
                              width="full"
                              p={5}
                              backgroundColor={colorValues?.white}
                            >
                              <Stack spaceY={5} width="50%">
                                <Text>
                                  {field.label}{" "}
                                  {field?.required && (
                                    <Text color="red.500" as="span">
                                      {" "}
                                      *
                                    </Text>
                                  )}
                                </Text>

                                <Stack>
                                  <RadioGroup
                                    variant="outline"
                                    value={value}
                                    onValueChange={({ value }) =>
                                      onChange(value)
                                    }
                                    ref={ref}
                                    name={name}
                                    colorPalette="blue"
                                    size="md"
                                  >
                                    <Stack>
                                      {field.options.map((opt) => (
                                        <Radio
                                          key={opt.value}
                                          value={opt.value}
                                        >
                                          {opt.label}
                                        </Radio>
                                      ))}
                                    </Stack>
                                  </RadioGroup>
                                  <FormErrorMessage
                                    color="red"
                                    fontSize="small"
                                  >
                                    {error && error.message}
                                  </FormErrorMessage>
                                </Stack>
                              </Stack>
                            </Box>
                          )}
                        />
                      );

                    case "checkbox":
                      return (
                        <Controller
                          control={control}
                          name={field.label || "defaultForm"}
                          // defaultValue={[]}
                          rules={{
                            required:
                              field.required && "This field is required",
                          }}
                          render={({
                            field: { onChange, value, ref, name },
                            fieldState: { error },
                          }) => (
                            <Box
                              borderRadius={20}
                              width="full"
                              p={5}
                              backgroundColor={colorValues?.white}
                            >
                              <Stack spaceY={5} width="50%">
                                <Text>
                                  {field.label}{" "}
                                  {field?.required && (
                                    <Text color="red.500" as="span">
                                      {" "}
                                      *
                                    </Text>
                                  )}
                                </Text>

                                <Stack>
                                  <CheckboxGroup
                                    value={value}
                                    onValueChange={(value) => onChange(value)}
                                    ref={ref}
                                    name={name}
                                    colorPalette="blue"
                                  >
                                    <HStack spaceX={5}>
                                      {field.options?.map((opt) => (
                                        <CheckboxCard
                                          label={opt.label}
                                          key={opt.value}
                                          value={opt.value}
                                        />
                                      ))}
                                    </HStack>
                                  </CheckboxGroup>
                                  <FormErrorMessage
                                    color="red"
                                    fontSize="small"
                                  >
                                    {error && error.message}
                                  </FormErrorMessage>
                                </Stack>
                              </Stack>
                            </Box>
                          )}
                        />
                      );

                    case "textarea":
                      return (
                        <Controller
                          control={control}
                          name={field.label || "defaultForm"}
                          rules={{
                            required:
                              field.required && "This field is required",
                          }}
                          render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { error },
                          }) => (
                            <Box
                              borderRadius={20}
                              width="full"
                              p={5}
                              backgroundColor={colorValues?.white}
                            >
                              <Stack spaceY={5} width="50%">
                                <Text>
                                  {field.label}{" "}
                                  {field?.required && (
                                    <Text color="red.500" as="span">
                                      {" "}
                                      *
                                    </Text>
                                  )}
                                </Text>

                                <Stack>
                                  <Textarea
                                    css={{ "--focus-color": "none" }}
                                    variant="flushed"
                                    key={field?.id}
                                    onChange={onChange}
                                    value={value}
                                    {...register(
                                      field?.label || `field-${field?.id}`,
                                      {
                                        required: field?.required,
                                      }
                                    )}
                                    placeholder={field?.placeholder || `Type here...`}
                                  />
                                  <FormErrorMessage
                                    color="red"
                                    fontSize="small"
                                  >
                                    {error && error.message}
                                  </FormErrorMessage>
                                </Stack>
                              </Stack>
                            </Box>
                          )}
                        />
                      );

                    case "file":
                      return (
                        <Controller
                          control={control}
                          name={field.id}
                          rules={{
                            required:
                              field.required && "This field is required",
                          }}
                          defaultValue={null}
                          render={({
                            field: { onChange, value },
                            fieldState: { error },
                          }) => (
                            <Box
                              borderRadius={20}
                              width="full"
                              p={5}
                              backgroundColor={colorValues?.white}
                            >
                              <Stack spaceY={5} width="50%">
                                <Text>
                                  {field.label}{" "}
                                  {field?.required && (
                                    <Text color="red.500" as="span">
                                      {" "}
                                      *
                                    </Text>
                                  )}
                                </Text>

                                <Stack>
                                  <HStack spaceX={5}>
                                    <Button
                                      as="label"
                                      htmlFor={field.id}
                                      cursor="pointer"
                                      colorPalette="blue"
                                    >
                                      Choose File
                                    </Button>
                                    <Input
                                      id={field.id}
                                      type="file"
                                      display="none"
                                      onChange={(e) =>
                                        onChange(e.target.files[0])
                                      }
                                    />
                                    <Text
                                      fontSize="sm"
                                      color="gray.500"
                                      fontWeight="bold"
                                    >
                                      {value ? value.name : "No file chosen"}
                                    </Text>
                                  </HStack>

                                  <FormErrorMessage
                                    color="red"
                                    fontSize="small"
                                  >
                                    {error && error.message}
                                  </FormErrorMessage>
                                </Stack>
                              </Stack>
                            </Box>
                          )}
                        />
                      );

                    default:
                      return null;
                  }
                })}
              </VStack>
            </Box>

            <Flex width="full" justifyContent="space-between" marginY={5}>
              <Button
                type="button"
                colorPalette="blue"
                onClick={() => reset()}
                size="xl"
              >
                Reset
              </Button>
              <Button type="submit" colorPalette="green" size="xl">
                Submit
              </Button>
            </Flex>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};

export default DynamicForm;
