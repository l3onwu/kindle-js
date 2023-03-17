import { Stack, Flex, Text, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import localforage from "localforage";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { FiPower, FiHardDrive } from "react-icons/fi";
import { BiSliderAlt } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { useGlobalContext } from "../../lib/context";

const HomeTopBar = () => {
  // State
  // @ts-ignore
  const { interfaceHook, libraryHook } = useGlobalContext();

  // Functions
  const extractFilesFromFolder = async () => {
    if (libraryHook?.directory) {
      const files = [];
      for await (const entry of libraryHook?.directory.entries()) {
        // Add a .md regex match condition, epubs/mobi
        if (entry[1].kind === "file") {
          files.push(entry);
        }
      }
      // TODO: Extract metadata from epub/mobi's, and construct book objects to store
      libraryHook?.setContents(files);
    } else {
      libraryHook?.setContents([]);
    }
  };

  useEffect(() => {
    extractFilesFromFolder();
  }, [libraryHook?.directory]);

  const getFolder = async () => {
    // @ts-ignore
    const dirHandle = await window.showDirectoryPicker();
    // Get 'boards' folder
    // const boardHandle = await dirHandle.getDirectoryHandle("boards", {
    //   create: true,
    // });
    libraryHook?.setDirectory(dirHandle);
    localforage.setItem("directory", dirHandle);
  };

  // TSX
  return (
    <Stack py="7px" px="15px" spacing="10px">
      {/* Level 1*/}
      <Flex justify="space-between" align="center">
        {/* Time */}
        <Text fontSize="10px" fontWeight="600">
          {new Date().toLocaleTimeString()}
        </Text>
        <Stack direction="row" align="center">
          {/* Drawer */}
          <Text
            _hover={{ color: "gray", cursor: "pointer" }}
            fontSize="11px"
            onClick={() => {
              alert("Clicked top draw");
            }}
          >
            _
          </Text>
          {/* Sleep */}
          <Text
            _hover={{ color: "gray", cursor: "pointer" }}
            fontWeight="bold"
            fontSize="11px"
            onClick={() => {
              interfaceHook?.setView("lockscreen");
            }}
          >
            <FiPower />
          </Text>
        </Stack>
      </Flex>

      {/* Level 2 */}
      <Flex justify="space-between" align="center">
        <Input
          border="1px solid black"
          value="Search"
          width="250px"
          height="35px"
          fontSize="12px"
          borderRadius="30px"
        />
        {/* File library */}
        <Text
          _hover={{ color: "gray", cursor: "pointer" }}
          onClick={() => {
            getFolder();
          }}
        >
          <FiHardDrive />
        </Text>
        {/* Quicknav */}
        <Text
          _hover={{ color: "gray", cursor: "pointer" }}
          onClick={() => {
            alert("Clicked quicknav");
          }}
        >
          <BsThreeDotsVertical />
        </Text>
      </Flex>

      {/* Level 3 */}
      <Flex justify="space-between" align="center">
        {/* Filters */}
        <Text
          fontSize="17px"
          _hover={{ color: "gray", cursor: "pointer" }}
          onClick={() => {
            alert("Clicked Settings");
          }}
        >
          <BiSliderAlt />
        </Text>
        {/* Sort */}
        <Text
          fontSize="17px"
          _hover={{ color: "gray", cursor: "pointer" }}
          onClick={() => {
            alert("Clicked Sort");
          }}
        >
          <MdSort />
        </Text>
      </Flex>
    </Stack>
  );
};

export default HomeTopBar;
