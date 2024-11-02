import React from 'react';
import { Group, Burger, Container, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/services', label: 'Services' },
  { link: '/about', label: 'About Us' },
  { link: '/contact', label: 'Contact' },
];

const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      onClick={close} // Close the menu when a link is clicked
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <h1>My Landscaping Site</h1>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="md"
      >
        {items}
      </Drawer>
    </header>
  );
};

export default Header;
