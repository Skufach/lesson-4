import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Caption2 } from '@ui/atoms/Typography'
import { Country } from '@ui/molecules'

const TitleContainer = styled.div`
  padding-left: ${({ theme }) => theme.paddings.main}px;
`

export const CountriesList = ({ list, selectCountry, title }) =>
  list.length > 0 ? (
    <>
      <TitleContainer>
        <Caption2>{title}</Caption2>
      </TitleContainer>
      {list.map(({ name, alpha2Code }) => {
        return (
          <Country
            key={alpha2Code}
            title={name}
            id={alpha2Code}
            onPress={selectCountry}
          />
        )
      })}
    </>
  ) : null

CountriesList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  selectCountry: PropTypes.func.isRequired,
}
