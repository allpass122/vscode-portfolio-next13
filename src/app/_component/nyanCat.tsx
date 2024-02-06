import { cn } from "@/utils/cn";
import styles from "./nyanCat.module.css";

const NyanCat = () => {
  return (
    <div className={styles["nyan-cat-container"]}>
      <div className={cn(styles["nyan-cat"], "cursor-bat")}>
        <div className={cn("cursor-bat size-full", styles.rotate)}></div>
      </div>
    </div>
  );
};

export default NyanCat;
