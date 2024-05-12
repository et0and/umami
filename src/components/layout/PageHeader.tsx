import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './PageHeader.module.css';

export function PageHeader({
  title,
  className,
  breadcrumb,
  children,
}: {
  title?: ReactNode;
  icon?: ReactNode;
  className?: string;
  breadcrumb?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <div className={styles.breadcrumb}>{breadcrumb}</div>
      <div className={classNames(styles.header, className)}>
        

        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.actions}>{children}</div>
      </div>
    </>
  );
}

export default PageHeader;
