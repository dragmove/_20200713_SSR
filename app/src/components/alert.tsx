import styles from './alert.module.scss';
import cn from 'classnames';

const Alert = ({ children, type }: any) => {
    return (
        <div className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error'
        })}>
            {children}
            </div>
    )
})