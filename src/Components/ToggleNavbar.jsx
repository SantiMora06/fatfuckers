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
        <Menu.Item>
          Biceps
        </Menu.Item>
        <Menu.Item>
          Triceps
        </Menu.Item>
        <Menu.Item>
          Chest
        </Menu.Item>
        <Menu.Item>
          Back
        </Menu.Item>
        <Menu.Item>
          Shoulders
        </Menu.Item>
       

        <Menu.Divider />

        <Menu.Label>Lower Body</Menu.Label>
        <Menu.Item>
          Quads
        </Menu.Item>
        <Menu.Item>
          Femoral
        </Menu.Item>
        <Menu.Item>
          Calves
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </section>
     );
}
 
export default ToggleNavbar;