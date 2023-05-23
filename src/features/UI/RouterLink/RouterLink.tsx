import { Link } from 'react-router-dom';
import style from './RouterLink.module.scss';

type RouterLinkProps = {
  path: string;
  title: string;
  onClick?: () => void;
};

export const RouterLink = ({ path, title, onClick }: RouterLinkProps) => {
  return (
    <Link to={path} className={style['router-link']} onClick={onClick}>
      {title}
    </Link>
  );
};
