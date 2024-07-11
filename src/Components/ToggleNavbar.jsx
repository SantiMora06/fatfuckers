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
          <Link to="workouts/biceps">
            <Menu.Item className="Item">
              Biceps
            </Menu.Item>
          </Link>
          <Link to="workouts/triceps">
            <Menu.Item className="Item">
              Triceps
            </Menu.Item>
          </Link>
          <Link to="workouts/chest">
            <Menu.Item className="Item">
              Chest
            </Menu.Item>
          </Link>
          <Link to="workouts/back">
            <Menu.Item className="Item">
              Back
            </Menu.Item>
          </Link>
          <Link to="workouts/shoulders">
            <Menu.Item className="Item">
              Shoulders
            </Menu.Item>
          </Link>

          <Menu.Divider />
          <Menu.Label>Lower Body</Menu.Label>
          <Link to="workouts/quads">
            <Menu.Item className="Item">
              Quads
            </Menu.Item>
          </Link>
          <Link to="workouts/calves">
            <Menu.Item className="Item">
              Calves
            </Menu.Item>
          </Link>
          <Link to="workouts/core">
            <Menu.Item className="Item">
              Core
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link to="workouts/">
            <Menu.Item>
              All Exercises
            </Menu.Item>
          </Link>
          <Link to="workouts/addexercise">
            <Menu.Item>
              Add Exercise
            </Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>

    </section>
  );
}

export default ToggleNavbar;