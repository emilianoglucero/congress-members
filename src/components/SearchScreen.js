import React, { useState } from "react";
import { getObjects } from "../helpers/getObjects";
import { useForm } from "../hooks/useForm";
import { CongressGrid } from "./ui/CongressGrid";

export const SearchScreen = ({ listOfMembers }) => {
  const [filteredSearch, setFilteredSearch] = useState("");

  const [formValues, handleInputChange] = useForm({
    searchText: "",
    searchTextByID: "",
    searchTextByFirstName: "",
    searchTextByLastName: "",
    searchTextByGender: "",
    searchTextByParty: "",
  });
  const {
    searchText,
    searchTextByID,
    searchTextByFirstName,
    searchTextByLastName,
    searchTextByGender,
    searchTextByParty,
  } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    if (e.target.name === "search-general") {
      setFilteredSearch(getObjects(listOfMembers, "", searchText));
    } else if (e.target.name === "search-text-by-id") {
      setFilteredSearch(getObjects(listOfMembers, "id", searchTextByID));
    } else if (e.target.name === "search-text-by-firstname") {
      setFilteredSearch(
        getObjects(listOfMembers, "first_name", searchTextByFirstName)
      );
    } else if (e.target.name === "search-text-by-lastname") {
      setFilteredSearch(
        getObjects(listOfMembers, "last_name", searchTextByLastName)
      );
    } else if (e.target.name === "search-text-by-gender") {
      setFilteredSearch(
        getObjects(listOfMembers, "gender", searchTextByGender)
      );
    } else if (e.target.name === "search-text-by-party") {
      setFilteredSearch(getObjects(listOfMembers, "party", searchTextByParty));
    }
  };

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Type to search"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              onClick={(e) => {
                handleSearch(e);
              }}
              name="search-general"
            >
              Search...
            </button>
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowAdvancedFilters(!showAdvancedFilters);
              }}
            >
              Advanced Filters
            </button>
            {showAdvancedFilters && (
              <div className="advanced-filters">
                <input
                  type="text"
                  placeholder="Find members by id"
                  name="searchTextByID"
                  autoComplete="off"
                  value={searchTextByID}
                  onChange={handleInputChange}
                />

                <button
                  onClick={(e) => {
                    handleSearch(e);
                  }}
                  name="search-text-by-id"
                >
                  Search...
                </button>

                <input
                  type="text"
                  placeholder="Find members by name"
                  name="searchTextByFirstName"
                  autoComplete="off"
                  value={searchTextByFirstName}
                  onChange={handleInputChange}
                />

                <button
                  onClick={(e) => {
                    handleSearch(e);
                  }}
                  name="search-text-by-firstname"
                >
                  Search...
                </button>

                <input
                  type="text"
                  placeholder="Find members by lastname"
                  name="searchTextByLastName"
                  autoComplete="off"
                  value={searchTextByLastName}
                  onChange={handleInputChange}
                />

                <button
                  onClick={(e) => {
                    handleSearch(e);
                  }}
                  name="search-text-by-lastname"
                >
                  Search...
                </button>

                <input
                  type="text"
                  placeholder="Find members by gender"
                  name="searchTextByGender"
                  autoComplete="off"
                  value={searchTextByGender}
                  onChange={handleInputChange}
                />

                <button
                  onClick={(e) => {
                    handleSearch(e);
                  }}
                  name="search-text-by-gender"
                >
                  Search...
                </button>

                <input
                  type="text"
                  placeholder="Find members by party"
                  name="searchTextByParty"
                  autoComplete="off"
                  value={searchTextByParty}
                  onChange={handleInputChange}
                />

                <button
                  onClick={(e) => {
                    handleSearch(e);
                  }}
                  name="search-text-by-party"
                >
                  Search...
                </button>
              </div>
            )}
          </form>
        </div>

        <div>
          <h4> Results: </h4>
          {filteredSearch.length === 0 ? (
            <p>No results</p>
          ) : (
            <CongressGrid listOfMembers={filteredSearch} />
          )}
          <hr />
        </div>
      </div>
    </div>
  );
};
