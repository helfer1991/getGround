import React, { Component } from 'react';
import { IconButton, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { StyledForm, StyledInputBase } from './styles';

type SearchBarProps = {
  loading: boolean;
  defaultValue?: string | null;
  handleSearch: (type: 'search', newValue: string) => void;
}

export class SearchBar extends Component<SearchBarProps> {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement & {
      search: { value: string }
    }
    this.props.handleSearch('search', target.search.value)
  }

  handleClear = () => {
    this.props.handleSearch('search', '');
  }

  render() {
    const { loading, defaultValue } = this.props;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <IconButton type="submit" sx={{ p: '10px' }}>
          {loading ?
            <CircularProgress color="secondary" />
            :
            <SearchIcon color="secondary" />
          }
        </IconButton>
        <StyledInputBase
          placeholder="Search by book!"
          name="search"
          data-testid="input-base"
          defaultValue={defaultValue}
          key={defaultValue}
        />
        <IconButton onClick={this.handleClear} sx={{ p: '14px' }}>
          {defaultValue && <ClearIcon color="secondary" />}
        </IconButton>
      </StyledForm>
    );
  }
};
