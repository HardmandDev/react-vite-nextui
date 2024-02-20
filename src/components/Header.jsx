import { useState, useEffect, useCallback } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from '@nextui-org/react';
import { DisograrteLogo as Logo } from '../assets/DisograrteLogo';
import { useNavigate, useLocation } from 'react-router-dom';
import Theme from './func/Theme';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about-us', label: 'About us' },
  { path: '/contact', label: 'Contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;

  // Simplified useEffect logic:
  useEffect(() => {
    if (!isMenuOpen && !navItems.some(item => item.path === activePath)) {
      navigate('/');
    }
  }, [navigate, activePath, isMenuOpen]);

  const handleMenuItemClick = useCallback((path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  }, [navigate]);

  const themeButton = <Theme />; // Definir el botón de tema una vez

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link color='foreground' href='/'>
          <Logo />
          <p className='font-bold text-inherit'>Disograrte</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className='sm:hidden' justify='center'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {navItems.map((item) => (
          <NavbarItem key={item.path} isActive={activePath === item.path}>
            <Link
              color={activePath === item.path ? '' : 'foreground'}
              href={item.path}
              className={activePath === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>{themeButton}</NavbarItem> {/* Mostrar el botón de tema */}
      </NavbarContent>

      {/* NavbarContent para mostrar el botón de tema en el menú desplegable */}
      <NavbarMenu justify='center'>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              className='w-full'
              color={activePath === item.path ? 'primary' : 'foreground'}
              onClick={() => handleMenuItemClick(item.path)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>{themeButton}</NavbarMenuItem> {/* Mostrar el botón de tema */}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;