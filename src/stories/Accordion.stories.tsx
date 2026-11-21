import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AccordionUsage from '../components/Accordion/Accordion';

export default {
  title: 'Components/Accordion',
  component: AccordionUsage,
} as Meta;

const Template: StoryFn = () => <AccordionUsage />;

export const Default = Template.bind({});
Default.args = {};