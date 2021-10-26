// Internal modules import
import { Dropdown } from "./dropdown";

// Style sheets import
import styles from "../../styles/components/form/filter.module.scss";

type FilterProps = {
    items: Array<{
        type: "text" | "dropdown",
        label: string,
        list?: Array<{ id: number, text: string }>
        startsAs?: number
        onChange: any
    }>
}

/**
 * The blue filter at the top of pages that reacts to changes
 * @param items An array of items in the filter bar; each item includes type, label, and the onChange function; if the type is "dropdown" the item must also include list and the default startsAs
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