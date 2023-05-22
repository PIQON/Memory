import style from './StatisticsItem.module.scss';

type StatisticsItemProps = {
  title: string;
  value: number;
};

export const StatisticsItem = ({ title, value }: StatisticsItemProps) => {
  return (
    <div className={style['statistics-item']}>
      <p className={style['statistics-item__title']}>{title}</p>
      <span className={style['statistics-item__value']}>{value}</span>
    </div>
  );
};
