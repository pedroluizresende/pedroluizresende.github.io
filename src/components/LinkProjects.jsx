import React from 'react';
import { useHistory } from 'react-router-dom';
import { CustomButton,
  CustomMenu, CustomMenuItem, CustomTypography } from '../styles/Header';

function LinkProjects() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomButton
        id="basic-button"
        aria-controls={ open ? 'basic-menu' : undefined }
        aria-haspopup="true"
        aria-expanded={ open ? 'true' : undefined }
        onClick={ handleClick }
        variant="text"
        color="secondary"
      >
        <CustomTypography variant="h6">
          Projetos
        </CustomTypography>
      </CustomButton>
      <CustomMenu
        id="basic-menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        MenuListProps={ {
          'aria-labelledby': 'basic-button',
        } }
      >
        <CustomMenuItem
          color="tertiary"
          onClick={ () => {
            handleClose();
            history.push('/projects/front-end');
          } }
        >
          Front-end
        </CustomMenuItem>
        <CustomMenuItem
          onClick={ () => {
            handleClose();
            history.push('/projects/back-end');
          } }
        >
          Back_end

        </CustomMenuItem>
        <CustomMenuItem
          onClick={ () => {
            handleClose();
            history.push('/projects/full-stack');
          } }
        >
          Full Stack

        </CustomMenuItem>
      </CustomMenu>
    </>
  );
}

export default LinkProjects;
