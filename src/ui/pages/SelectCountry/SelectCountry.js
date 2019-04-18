import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'

export class SelectCountry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }
  }
  componentDidMount() {
    this.props.countryStartTrigger()
  }

  handleQuery(value) {
    this.setState({ query: value })
  }

  render() {
    const push = this.props.push
    const countriesList = this.props.countriesList
    const countryFetching = this.props.countryFetching
    const countryFetchingSuccess = this.props.countryFetchingSuccess
    const searchQuery = this.state.query
    const changeFirstCountry = this.props.changeFirstCountry
    const changeSecondCountry = this.props.changeSecondCountry

    const url = window.location.href

    const filterCountry = countriesList.filter(function(item) {
      let country = item.name

      if (
        country
          .trim()
          .toLowerCase()
          .indexOf(searchQuery) !== -1
      ) {
        return item
      }
    })

    return (
      <PageTemplate>
        {countryFetching ? (
          'Загрузка'
        ) : countryFetchingSuccess ? (
          <React.Fragment>
            <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
              <SearchInput
                onChange={value => this.handleQuery(value.toLowerCase())}
              />
            </ModalHeader>
            <HBox />
            <CountriesList
              title={'История поиска'}
              list={filterCountry}
              selectCountry={
                url.indexOf('first') > 0
                  ? changeFirstCountry
                  : changeSecondCountry
              }
            />
            <SearchStatus status="initial" />{' '}
          </React.Fragment>
        ) : (
          'Произошла ошибка'
        )}
      </PageTemplate>
    )
  }
}

SelectCountry.propTypes = {
  push: PropTypes.func.isRequired,
  countriesList: PropTypes.array,
  countryFetching: PropTypes.bool.isRequired,
  countryFetchingSuccess: PropTypes.bool.isRequired,
}
