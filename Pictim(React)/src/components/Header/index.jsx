import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header>
            <div className={styles.header__content}>
                <span>Pictim</span>
                <div>
                    <ul>
                        <li>
                            <div class={styles.search__field}>
                                <form>
                                    <input type="text" placeholder="Поиск..." />
                                    <button type="submit">
                                        <img src="/icon-search.png"></img>
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li>
                            <img src="/icon-profile.png"></img>
                        </li>
                    </ul>
                </div>
            </div>
        </header>   
    );
      
}

