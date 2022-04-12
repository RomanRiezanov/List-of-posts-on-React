import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="Search..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
