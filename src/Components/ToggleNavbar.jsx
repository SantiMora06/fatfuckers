import { Menu, Button, Text, rem } from '@mantine/core';


const ToggleNavbar = () => {
    return ( 
        <section className='Toggle'>
        <Menu shadow="md" width={1000}>
      <Menu.Target>
        <Button>Exercises</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Upper Body</Menu.Label>
        <Menu.Item className="Item">
          Biceps
        </Menu.Item>
        <Menu.Item className="Item">
          Triceps
        </Menu.Item>
        <Menu.Item className="Item">
          Chest
        </Menu.Item>
        <Menu.Item className="Item">
          Back
        </Menu.Item>
        <Menu.Item className="Item">
          Shoulders
        </Menu.Item>
       

        <Menu.Divider />

        <Menu.Label>Lower Body</Menu.Label>
        <Menu.Item className="Item">
          Quads
        </Menu.Item>
        <Menu.Item className="Item">
          Calves
        </Menu.Item>
        <Menu.Item className="Item">
          Core
        </Menu.Item>
        <Menu.Divider />

<Menu.Item>All exercises</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </section>
     );
}
 
export default ToggleNavbar;