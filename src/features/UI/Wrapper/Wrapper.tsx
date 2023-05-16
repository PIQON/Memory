import { ChildrenRoot } from '../../../types/shared';

import style from './Wrapper.module.scss';

type WrapperProps = {
  maxWidth: string;
};

export const Wrapper = ({
  children,
  maxWidth,
}: ChildrenRoot & WrapperProps) => {
  return (
    <div className={style['wrapper']} style={{ maxWidth }}>
      {children}
    </div>
  );
};
