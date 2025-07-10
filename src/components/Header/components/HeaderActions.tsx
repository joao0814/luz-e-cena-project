import React from "react";
import Button from "../../Button";
import { HiOutlineShare, HiOutlineUser } from "react-icons/hi";

const HeaderActions = () => {
  return (
    <div>
      <Button variant="icon">
        <HiOutlineShare />
      </Button>
      <Button variant="icon">
        <HiOutlineUser />
      </Button>
    </div>
  );
};

export default HeaderActions;
