import React from "react";
import { HStack, IconButton, Button } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { CgArrowsExchange } from "react-icons/cg";
import { BsFillPlayFill } from "react-icons/bs";

interface Props {}

const Options = (props: Props) => {
  return (
    <HStack my="2" fontWeight="semibold" >
      <Button aria-label="prev">Previous</Button>
      <IconButton aria-label="fav" icon={<FiHeart />} fontSize="2xl"/>
      <IconButton aria-label="play" icon={<BsFillPlayFill />} fontSize="2xl"/>
      <IconButton aria-label="continue" icon={<CgArrowsExchange />} fontSize="2xl"/>
      <IconButton aria-label="translate" icon={<MdTranslate />} fontSize="2xl"/>
      <IconButton aria-label="tafsir" icon={<GoBook />} fontSize="2xl"/>
      <Button aria-label="next">Next</Button>
    </HStack>
  );
};

export default Options;
