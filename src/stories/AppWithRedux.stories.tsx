import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {AddItemForm} from "../AddItemForm";
import AppWithRedux from "../AppWithRedux";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TODOLIST/AppWithRedux',
    component: AppWithRedux,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        addTask: {
            description: 'Button clicked inside form'
        },
    },
} as ComponentMeta<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux {...args} />;

export const AppWithRedux = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AppWithRedux.args = {
    addTask: action('Button clicked inside form')
};
