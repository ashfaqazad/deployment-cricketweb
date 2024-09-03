import React, { useState } from 'react';
import { List, ListItem, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { basketballDropdown, footballDropdown, soccerDropdown, formula1Dropdown } from './MenuItems';

const DropDown = () => {
  const [basketballDropdownOpen, setBasketballDropdownOpen] = useState(false);
  const [footballDropdownOpen, setFootballDropdownOpen] = useState(false);
  const [soccerDropdownOpen, setSoccerDropdownOpen] = useState(false);
  const [formula1DropdownOpen, setFormula1DropdownOpen] = useState(false);

  const handleBasketballDropdownClick = () => {
    setBasketballDropdownOpen(!basketballDropdownOpen);
  };

  const handleFootballDropdownClick = () => {
    setFootballDropdownOpen(!footballDropdownOpen);
  };

  const handleSoccerDropdownClick = () => {
    setSoccerDropdownOpen(!soccerDropdownOpen);
  };

  const handleFormula1DropdownClick = () => {
    setFormula1DropdownOpen(!formula1DropdownOpen);
  };

  return (
    <>
      {/* Basketball Dropdown */}
      <List
        sx={{
          width: 40,
          position: 'absolute',
          top: 17,
          textAlign: 'left',
          listStyle: 'none',
          '&.clicked': { // Applying Tailwind CSS class conditionally
            clicked: basketballDropdownOpen
          }
        }}
        onClick={handleBasketballDropdownClick}
      >
        {basketballDropdown.map((item, index) => (
          <ListItem className='bg-white shadow' key={index}>
            <NavLink
              to={item.path}
              className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`}
              style={{ padding: "16px" }}
              onClick={() => setBasketballDropdownOpen(false)}
            >
              {item.title}
            </NavLink>
          </ListItem>
        ))}
      </List>

      {/* Football Dropdown */}
      <List
        sx={{
          width: 40,
          position: 'absolute',
          top: 17,
          textAlign: 'left',
          listStyle: 'none',
          '&.clicked': { // Applying Tailwind CSS class conditionally
            clicked: footballDropdownOpen
          }
        }}
        onClick={handleFootballDropdownClick}
      >
        {footballDropdown.map((item, index) => (
          <ListItem className='bg-white shadow' key={index}>
            <NavLink
              to={item.path}
              className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`}
              style={{ padding: "16px" }}
              onClick={() => setFootballDropdownOpen(false)}
            >
              {item.title}
            </NavLink>
          </ListItem>
        ))}
      </List>

      {/* Soccer Dropdown */}
      <List
        sx={{
          width: 40,
          position: 'relative',
          zIndex: 1,
          top: 17,
          textAlign: 'left',
          listStyle: 'none',
          '&.clicked': { // Applying Tailwind CSS class conditionally
            clicked: soccerDropdownOpen
          }
        }}
        onClick={handleSoccerDropdownClick}
      >
        {soccerDropdown.map((item, index) => (
          <ListItem className='bg-white shadow' key={index}>
            <NavLink
              to={item.path}
              className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`}
              style={{ padding: "16px" }}
              onClick={() => setSoccerDropdownOpen(false)}
            >
              {item.title}
            </NavLink>
          </ListItem>
        ))}
      </List>

      {/* Formula1 Dropdown */}
      <List
        sx={{
          width: 40,
          position: 'relative',
          zIndex: 1,
          top: 17,
          textAlign: 'left',
          listStyle: 'none',
          '&.clicked': { // Applying Tailwind CSS class conditionally
            clicked: formula1DropdownOpen
          }
        }}
        onClick={handleFormula1DropdownClick}
      >
        {formula1Dropdown.map((item, index) => (
          <ListItem className='bg-white shadow' key={index}>
            <NavLink
              to={item.path}
              className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`}
              style={{ padding: "16px" }}
              onClick={() => setFormula1DropdownOpen(false)}
            >
              {item.title}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DropDown;
