import React from "react";
import { Td, Tr } from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

function GridItem({ item, onDelete }) {
  return (
    <Tr>
      <Td>{item.desc}</Td>
      <Td>{item.amount}</Td>

      <Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Td>
      <Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Td>
    </Tr>
  );
}

export default GridItem;
