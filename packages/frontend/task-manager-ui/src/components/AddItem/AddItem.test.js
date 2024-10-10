import React from 'react';
import ReactDom from 'react-dom/client';
import AddItem from './AddItem';
import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../store/store';
import labels from '../../content/content';
const context = {
    state: {
        content: {
            labels
        },
        items: {
            itemList: []
        }
    },
    dispatch: jest.fn()
};

describe('Add Item component tests', () => {
    it('should render without crash', () => {
        const wrapper = document.createElement('div');
        const root = ReactDom.createRoot(wrapper);
        root.render(<AddItem />);
    });

    it('should render correctly', () => {
        const { container } = render(
            <StoreContext.Provider value={context}>
                <AddItem />
            </StoreContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with passed content', () => {
        render(
            <StoreContext.Provider value={context}>
                <AddItem />
            </StoreContext.Provider>
        );
        expect(screen.getByTestId('btn-add-item')).toHaveTextContent('Add item');
    });
});