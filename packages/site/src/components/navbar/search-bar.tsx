import { Button, InputGroup } from 'reactstrap';

import React from 'react';

export interface SearchBarProps {
  toggleModalSearch: () => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  toggleModalSearch,
}: SearchBarProps) => (
  <InputGroup className="search-bar shadow-box" tag="li">
    <Button
      className="shadow-box-content"
      color="link"
      data-target="#searchModal"
      data-toggle="modal"
      id="search-button"
      onClick={toggleModalSearch}
    >
      <i className="tim-icons icon-zoom-split" />
      <span className="d-lg-none d-md-block">Search</span>
    </Button>
  </InputGroup>
);

export default SearchBar;
