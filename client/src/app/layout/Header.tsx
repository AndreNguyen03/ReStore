import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  handleDarkMode: () => void;
  darkMode: boolean;
}

function Header({ darkMode, handleDarkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={handleDarkMode} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
