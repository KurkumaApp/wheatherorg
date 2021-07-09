import React from 'react';

import { ReactComponent as SearchIcon } from '../../../../assets/search.svg';
import { ReactComponent as LocationCityIcon } from '../../../../assets/location-city.svg';

import DescriptionButton from './components/DescriptionButton';
import DescriptionModal from './components/DescriptionModal';
import SearchDescription from './components/SearchDescription';
import SearchForm from './components/SearchForm';
import SearchInput from './components/SearchInput';
import SearchWrapper from './components/SearchWrapper';
import SearchArea from './components/SearchArea';
import SearchElements from './components/SearchElements';
import SearchDivider from './components/SearchDivider';
import SearchElementItem from './components/SearchElementItem';
import SearchElement from './components/SearchElement';
import SearchElementsList from './components/SearchElementsList';
import SearchElementText from './components/SearchElementText';

export const Search: React.FunctionComponent = () => (
  <SearchWrapper>
    <SearchForm>
      <SearchArea>
        <div>
          <span>
            <SearchIcon className="search__icon" />
          </span>
        </div>
        <SearchInput />
      </SearchArea>
      <SearchElements>
        <SearchDivider />
        <SearchElementsList>
          <SearchElementItem>
            <SearchElement>
              <div>
                <span>
                  <LocationCityIcon className="search-element__icon" />
                </span>
              </div>
              <SearchElementText>London</SearchElementText>
            </SearchElement>
          </SearchElementItem>
        </SearchElementsList>
      </SearchElements>
    </SearchForm>
    <SearchDescription>
      <DescriptionButton>How search work?</DescriptionButton>
    </SearchDescription>
  </SearchWrapper>
);

export default Search;
