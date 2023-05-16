import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
/**
 * @deprecated
 */
export const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
