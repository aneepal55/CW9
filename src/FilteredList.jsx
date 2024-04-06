import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import List from './List';



class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: ""
        };

    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({ search: event.target.value.toLowerCase() });
    }



    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type
        return (item.name.toLowerCase().search(this.state.search) !== -1) && (item.type === this.state.type || this.state.type === "");
    }

    /* TODO: Add an event handling method for when an item in dropdown is selected
    Per the DropdownButton documentation, this function should take in an eventKey and event
    */

    onFilter = (eventKey) => {
        this.setState({ type: eventKey });
    }

    render() {
        return (
            <div className="filter-list">
                <h1 id="top">Produce Search</h1>

                {/* TODO: Add more menu items with onSelect handlers*/}

                <DropdownButton id="dropdown-basic-button" title="Filter by Type" onSelect={this.onFilter}>
                    <Dropdown.Item eventKey="">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
                </DropdownButton>

                <input id="sea" type="text" placeholder="Search" onChange={this.onSearch} />
                {/* We are taking the items property (which is the list of produce), 
                  filtering the content to match the search word, then 
                  passing the filtered produce into the List component. */}
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}

export default FilteredList;
