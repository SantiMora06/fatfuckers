import { Menu, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

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
          <Link to="workouts/biceps"> Biceps </Link> 
        </Menu.Item>
        <Menu.Item className="Item">
        <Link to="workouts/triceps"> Triceps </Link>
        </Menu.Item>
        <Menu.Item className="Item">
        <Link to="workouts/chest"> Chest </Link>
        </Menu.Item>
        <Menu.Item className="Item">
        <Link to="workouts/back"> Back </Link>
        </Menu.Item>
        <Menu.Item className="Item">
        <Link to="workouts/shoulders"> Shoulders </Link>
        </Menu.Item>
       

        <Menu.Divider />

        <Menu.Label>Lower Body</Menu.Label>
        <Menu.Item className="Item">
        <Link to="workouts/quads"> Quads </Link>
        </Menu.Item>
        <Menu.Item className="Item">
        <Link to="workouts/calves"> Calves </Link>
        </Menu.Item>
        <Menu.Item className="Item">
        <Link to="workouts/core"> Core </Link>
        </Menu.Item>
        <Menu.Divider />

<Menu.Item>
<Link to="workouts/"> All Exercises </Link>
  </Menu.Item>
  <Menu.Item>
<Link to="workouts/addexercise"> Add Exercise </Link>
  </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </section>
     );
}
 
export default ToggleNavbar;