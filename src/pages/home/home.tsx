import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ViewProps as HomeProps} from '../../types/types';
import { Books } from '../../components/books';
import { Container } from './styles';

export class Home extends Component<HomeProps> {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  handleSearch = (
    searchText: string,
    page: number,
    rowsPerPage: number,
  ) => {
    const { history } = this.props;
    history.push(`/search?s=${searchText}&p=${page}&r=${rowsPerPage}`);
  };

  render() {
    return (
      <section>
        <Container>
          <Books
            searchOptions={{
              searchQuery: '',
              pageQuery: '1',
              rowsPerPageQuery: '20',
            }}
            searchCallBack={this.handleSearch}
          />
        </Container>
      </section>
    );
  }
}
