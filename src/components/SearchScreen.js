import React, { useState } from "react";
import { getObjects } from "../helpers/getObjects";
import { useForm } from "../hooks/useForm";

export const SearchScreen = ({ listOfMembers }) => {
  console.log(listOfMembers);
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
    console.log(e);
    e.preventDefault();

    if (e.target.name === "search-general") {
      console.log("searching general");
      console.log(searchText);
      console.log(getObjects(listOfMembers, "", searchText));
      setFilteredSearch(getObjects(listOfMembers, "", searchText));
      console.log(filteredSearch);
    } else if (e.target.name === "search-text-by-id") {
      console.log("searching id");
      console.log(searchTextByID);
      console.log(getObjects(listOfMembers, "id", searchTextByID));
      setFilteredSearch(getObjects(listOfMembers, "id", searchTextByID));
    } else if (e.target.name === "search-text-by-firstname") {
      console.log("searching name");
      console.log(searchTextByFirstName);
      setFilteredSearch(
        getObjects(listOfMembers, "first_name", searchTextByFirstName)
      );
    } else if (e.target.name === "search-text-by-lastname") {
      console.log("searching lastname");
      console.log(searchTextByLastName);
      console.log(getObjects(listOfMembers, "last_name", searchTextByLastName));
      setFilteredSearch(
        getObjects(listOfMembers, "last_name", searchTextByLastName)
      );
    } else if (e.target.name === "search-text-by-gender") {
      console.log("searching gender");
      console.log(searchTextByGender);
      console.log(getObjects(listOfMembers, "gender", searchTextByGender));
      setFilteredSearch(
        getObjects(listOfMembers, "gender", searchTextByGender)
      );
    } else if (e.target.name === "search-text-by-party") {
      console.log("searching party");
      console.log(searchTextByParty);
      console.log(getObjects(listOfMembers, "party", searchTextByParty));
      setFilteredSearch(getObjects(listOfMembers, "party", searchTextByParty));
    }
  };

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  console.log(showAdvancedFilters);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div>
        <div>
          <h4> Search Form </h4>
          <hr />

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
          <h4> Results </h4>
          {filteredSearch.length === 0 ? (
            <p>No results</p>
          ) : (
            filteredSearch.map((item) => <p>{item.id}</p>)
          )}
          <hr />
        </div>
      </div>
    </div>
  );
};
