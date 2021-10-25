// External modules import
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { popDown } from "../../../utils/animations/global";

// Style sheets import
import styles from "../../styles/components/dropdown.module.scss";

// Types
type ListItem = {
    id: number,
    text: string
}

// Main component
type DropdownProps = {
    list: Array<ListItem>,
    startsAs: number,
    onChange: Function
}

/**
 * A dropdown of items that reacts to change
 * @param list List of items, consists of id and text
 * @param startsAs The default item
 * @param onChange The function that is triggered when the user changes the selected item
 */
export const Dropdown = ({ list, startsAs, onChange }: DropdownProps): JSX.Element => {
    const [droppedDown, setDroppedDown] = useState(false);
    const [current, setCurrent] = useState(list.filter((item) => item.id === startsAs)[0]);

    const DropDownTrigger = ({ current }: { current: ListItem }) => {
        return (
            <button className={styles["dropdown-trigger"]} onClick={() => setDroppedDown(!droppedDown)}>
                <span>{current.text}</span>
            </button>
        );
    }

    const DropdownContent = ({ list }: { list: Array<ListItem> }): JSX.Element => {
        return (
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={popDown}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={styles["dropdown"]}>
                <div className={styles["dropdown-scroll-area"]}>
                    {list.map((item) => {
                        return (
                            <button key={item.id} className={styles[`option-${(item.id === current.id)}`]}
                                onClick={() => handleChange(item)}>
                                <span>{item.text}</span>
                            </button>
                        );
                    })}
                </div>
            </motion.div>
        );
    }

    function handleChange(event: ListItem) {
        setCurrent(event);
        setDroppedDown(false);
        return onChange(event.id);
    }
    
    return (
        <>
            <DropDownTrigger current={current} />
            <AnimatePresence>
                {droppedDown ? <DropdownContent list={list} key="dropdown" /> : null}
            </AnimatePresence>
        </>
    );
}
