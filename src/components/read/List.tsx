import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Divider,
  Flex,
  VStack,
} from "@chakra-ui/react";
import _ from "lodash";
import React, { useState } from "react";
import list from "../../data/list.json";
import Select from "react-select";
import { InfoIcon } from "@chakra-ui/icons";

interface Props {}

const List = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [verses, setVerses] = useState<number>(1);
  return (
    <>
      <Button onClick={onOpen}>
        Surah Fatiha - (7/1) &nbsp; <InfoIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Verse</ModalHeader>
          <ModalCloseButton />
          <Divider orientation="horizontal" />
          <ModalBody>
            <VStack align="stretch" spacing={5} py="5">
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="name"
                getOptionLabel={(option) => option.transliteration_en}
                options={list}
                onChange={(e: any) => setVerses(e.total_verses)}
              />
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="verse-number"
                getOptionLabel={(option) => option.num.toString()}
                getOptionValue={(option) => option.num.toString()}
                options={_.range(1, verses + 1).map((n) => ({ num: n }))}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="whiteAlpha"
              mr={3}
              color="white"
              onClick={onClose}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default List;
