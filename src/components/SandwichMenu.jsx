import React, { useState } from 'react';
import { Button, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomContainerMenu,
  CustomLink, CustomList, CustomListItem,
  CustomPaperMenu } from '../styles/SandwitchMenu';

function SandwichMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <CustomContainerMenu>
      <Button
        color="secondary"
        type="button"
        onClick={ () => setShowMenu((prev) => !prev) }
      >
        <MenuIcon fontSize="large" />
      </Button>
      { showMenu && (
        <Slide in={ setShowMenu } mountOnEnter unmountOnExit>
          <CustomPaperMenu elevation={ 2 }>
            <CustomList>
              <CustomListItem>
                <CustomLink to="/">Home</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to="/projects">Projetos</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to="/about">Sobre</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to="/contact">Contato</CustomLink>
              </CustomListItem>
            </CustomList>
          </CustomPaperMenu>
        </Slide>
      )}
    </CustomContainerMenu>
  );
}

export default SandwichMenu;
