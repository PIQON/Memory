import style from './StatisticsItem.module.scss';

type StatisticsItemProps = {
  title: string;
  value: string | number;
  className?: string;
};

export const StatisticsItem = ({
  title,
  value,
  className,
}: StatisticsItemProps) => {
  return (
    <div
      className={`${style['statistics-item']} ${
        className && style[`statistics-item--${className}`]
      }`}
    >
      <p className={style['statistics-item__title']}>{title}</p>
      <span className={style['statistics-item__value']}>{value}</span>
    </div>
  );
};
