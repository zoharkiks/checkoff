import React from "react";
import { Button } from "../../../components/Button";

const NewTag = ({ newTagRef, handleNewTagSubmit, isTagsLoading }) => {
  return (
    <div className="flex flex-col mt-2 space-y-2">
      <input
        className="p-2 text-black rounded-lg "
        type="text"
        placeholder="Create Your First Tag"
        ref={newTagRef}
      />
      <Button onClick={handleNewTagSubmit} intent="secondary">
        Create
      </Button>
    </div>
  );
};

export default NewTag;
