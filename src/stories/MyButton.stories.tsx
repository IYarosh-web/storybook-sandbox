import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './MyButton';

export default {
  title: 'Custom Components/Button',
  component: Button ,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});

Primary.args = {
  size: "large",
  children: "label",
}