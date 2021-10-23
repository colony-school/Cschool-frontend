// Style sheets import
import styles from "../../styles/components/form/filter.module.scss";
import { Dropdown } from "./dropdown";

type FilterProps = {
    items: Array<{
        type: string,
        label: string,
        list?: Array<{ id: number, text: string }>
        startsAs?: number
        onChange: any
    }>
}

/**
 * The blue filter at the top of pages that reacts to changes
 */
export const Filter = ({ items }: FilterProps): JSX.Element => {
    return (
        <div className={styles["filter"]}>
            <div className={styles["item"]}>{
                items.map((item) => (
                    <>
                        <label className={styles["item-label"]}>
                            {item.label}
                        </label>
                        <div className={styles["item-input"]}>{
                            item.type == "dropdown"
                            ? <Dropdown list={item.list || []} startsAs={item.startsAs || 0} onChange={item.onChange} />
                            : <input type={item.type} onChange={item.onChange} />
                        }</div>
                    </>
                ))
            }</div>
        </div>
    );
}