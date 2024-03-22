import React, { useState } from "react";
import { Box, Heading, Text, Image, Flex, Table, Tbody, Tr, Td, Divider, Button } from "@chakra-ui/react";
import { FaGripVertical } from "react-icons/fa";

const Index = () => {
  const [questions, setQuestions] = useState([
    {
      _id: "630638659a02f70009165011",
      description: '<p><span id="docs-internal-guid-542de4c1-7fff-2123-8f27-698ec1136aa0"><span style="font-size: 13pt; font-family: \'Times New Roman\'; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Match the following:</span></span></p>',
      statement: [
        {
          index: 0,
          text: "A pair of spongy bags",
          _id: "630638659a02f70009165012",
        },
        {
          index: 1,
          text: "J shaped bag",
          _id: "630638659a02f70009165013",
        },
        {
          index: 2,
          text: "A tube that collects undigested food",
          _id: "630638659a02f70009165014",
        },
        {
          index: 3,
          text: "A tube that completes the job of digestion",
          _id: "630638659a02f70009165015",
        },
      ],
      options: [
        {
          index: 3,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352006446-image004.png",
          _id: "630638659a02f70009165016",
          dummyIndex: 0,
        },
        {
          index: 1,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661351999398-image002.png",
          _id: "630638659a02f70009165017",
          dummyIndex: 1,
        },
        {
          index: 0,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661351994670-image001.png",
          _id: "630638659a02f70009165018",
          dummyIndex: 2,
        },
        {
          index: 2,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352003408-image003.png",
          _id: "630638659a02f70009165019",
          dummyIndex: 3,
        },
      ],
    },
    {
      _id: "630638dc9a02f7000916501b",
      description: '<p><span id="docs-internal-guid-28fb31ff-7fff-d4e0-f5ea-cc016af5b84a"><span style="font-size: 13pt; font-family: \'Times New Roman\'; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Match each organ with its name:</span></span></p>',
      statement: [
        {
          index: 0,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352085766-image001.png",
          _id: "630638dc9a02f7000916501c",
        },
        {
          index: 1,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352090702-image002.png",
          _id: "630638dc9a02f7000916501d",
        },
        {
          index: 2,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352093138-image003.png",
          _id: "630638dc9a02f7000916501e",
        },
        {
          index: 3,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352096832-image004.png",
          _id: "630638dc9a02f7000916501f",
        },
        {
          index: 4,
          image: "https://tm-admin-images.s3.amazonaws.com/images/1661352104120-image005.png",
          _id: "630638dc9a02f70009165020",
        },
      ],
      options: [
        {
          index: 4,
          text: "Stomach",
          _id: "630638dc9a02f70009165021",
          dummyIndex: 0,
        },
        {
          index: 1,
          text: "Lungs",
          _id: "630638dc9a02f70009165022",
          dummyIndex: 1,
        },
        {
          index: 0,
          text: "Kidneys",
          _id: "630638dc9a02f70009165023",
          dummyIndex: 2,
        },
        {
          index: 3,
          text: "Brain",
          _id: "630638dc9a02f70009165024",
          dummyIndex: 3,
        },
        {
          index: 2,
          text: "Heart",
          _id: "630638dc9a02f70009165025",
          dummyIndex: 4,
        },
      ],
    },
  ]);

  const [answers, setAnswers] = useState({});

  const handleDrop = (questionId, statementId, optionId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: {
        ...prevAnswers[questionId],
        [statementId]: optionId,
      },
    }));
  };

  return (
    <Box p={4}>
      {questions.map((question) => (
        <Box key={question._id} mb={8}>
          <Heading size="md" mb={4}>
            <div dangerouslySetInnerHTML={{ __html: question.description }} />
          </Heading>
          <Flex mb={4}>
            {question.options.map((option) => (
              <Box key={option._id} mr={4} draggable onDragStart={(e) => e.dataTransfer.setData("optionId", option._id)}>
                {option.image && <Image src={option.image} alt="Option" w={100} h={100} />}
                {option.text && <Text>{option.text}</Text>}
              </Box>
            ))}
          </Flex>
          <Table>
            <Tbody>
              {question.statement.map((statement) => (
                <Tr key={statement._id}>
                  <Td>
                    {statement.text && <Text>{statement.text}</Text>}
                    {statement.image && <Image src={statement.image} alt="Statement" w={100} h={100} />}
                  </Td>
                  <Td
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      const optionId = e.dataTransfer.getData("optionId");
                      handleDrop(question._id, statement._id, optionId);
                    }}
                  >
                    {answers[question._id]?.[statement._id] ? (
                      <Box draggable onDragStart={(e) => e.dataTransfer.setData("optionId", answers[question._id][statement._id])}>
                        {question.options.find((option) => option._id === answers[question._id][statement._id]).text || <Image src={question.options.find((option) => option._id === answers[question._id][statement._id]).image} alt="Answer" w={100} h={100} />}
                      </Box>
                    ) : (
                      <Box border="2px" borderColor="gray.200" borderStyle="dashed" w={100} h={100} display="flex" alignItems="center" justifyContent="center">
                        <FaGripVertical size={20} color="gray.500" />
                      </Box>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Divider my={8} />
        </Box>
      ))}
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </Box>
  );
const handleSubmit = () => {
    console.log(answers);
  };

  return (
    <Box p={4}>
      {questions.map((question) => (
        <Box key={question._id} mb={8}>
          <Heading size="md" mb={4}>
            <div dangerouslySetInnerHTML={{ __html: question.description }} />
          </Heading>
          <Flex mb={4}>
            {question.options.map((option) => (
              <Box key={option._id} mr={4} draggable onDragStart={(e) => e.dataTransfer.setData("optionId", option._id)}>
                {option.image && <Image src={option.image} alt="Option" w={100} h={100} />}
                {option.text && <Text>{option.text}</Text>}
              </Box>
            ))}
          </Flex>
          <Table>
            <Tbody>
              {question.statement.map((statement) => (
                <Tr key={statement._id}>
                  <Td>
                    {statement.text && <Text>{statement.text}</Text>}
                    {statement.image && <Image src={statement.image} alt="Statement" w={100} h={100} />}
                  </Td>
                  <Td
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      const optionId = e.dataTransfer.getData("optionId");
                      handleDrop(question._id, statement._id, optionId);
                    }}
                  >
                    {answers[question._id]?.[statement._id] ? (
                      <Box draggable onDragStart={(e) => e.dataTransfer.setData("optionId", answers[question._id][statement._id])}>
                        {question.options.find((option) => option._id === answers[question._id][statement._id]).text || <Image src={question.options.find((option) => option._id === answers[question._id][statement._id]).image} alt="Answer" w={100} h={100} />}
                      </Box>
                    ) : (
                      <Box border="2px" borderColor="gray.200" borderStyle="dashed" w={100} h={100} display="flex" alignItems="center" justifyContent="center">
                        <FaGripVertical size={20} color="gray.500" />
                      </Box>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Divider my={8} />
        </Box>
      ))}
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </Box>
  );
};

export default Index;
