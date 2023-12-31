import { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectUser = ({ eventUsers, setAssigned, onEdit }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (onEdit) {
      setValue(onEdit.owner);
      console.log(onEdit.owner);
    }
    setAssigned(value);
  }, [value, onEdit]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const ProfilePicture = ({ url }) => (
    <img className="w-10 h-10 rounded-full object-cover " src={url} />
  );

  return (
    <Select
      items={eventUsers}
      label="Assigned to"
      placeholder="Not assigned"
      variant="bordered"
      defaultSelectedKeys={onEdit ? [onEdit.id] : [""]}
      //   className="bg-red-400 border-1 rounded-sm "
      //   selectedKeys={value}
      onChange={handleOnChange}
    >
      <SelectItem key={""}>Not assigned</SelectItem>

      {eventUsers.map((user) => (
        <SelectItem
          key={user.id}
          //   errorMessage={}
          textValue={user.name}
          startContent={<ProfilePicture url={user.profilePicture} />}
        >
          {user.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectUser;
