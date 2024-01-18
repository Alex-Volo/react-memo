import styles from "./LeaderboardItem.module.css";
// import sprite from "./img/sprite.svg";

export function LeaderboardItem({ position, user, achievements, time, color = "black" }) {
  // const achivementElements = achievements.map(achive => achive);

  return (
    <li style={{ color: color }} className={styles.item}>
      <span className={styles.position}>{position}</span>
      <span className={styles.user}>{user}</span>
      <div className={styles.achievements}>
        <div className={styles.hardAchivement}>
          {Array.isArray(achievements) ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M21.5485 7.68386C21.7211 7.06469 21.5235 5.54349 22.7298 4.53679C23.936 3.53008 25.8124 3.65481 26.9415 4.71274C28.0705 5.77067 28.2522 7.75959 26.9165 9.0692C25.5807 10.3788 24.9651 9.64828 24.22 10.3543C23.4749 11.0603 23.6044 11.6394 24.0655 12.067C24.5289 12.4947 29.1268 17.2053 28.9973 17.5059C28.8678 17.8066 25.7352 21.2833 25.2218 21.535C24.7084 21.7867 23.8088 21.7622 23.6294 20.9314C23.4499 20.1007 23.7588 18.4391 22.4731 18.0093C21.1896 17.5817 20.6239 17.9336 19.3654 19.2432C18.1069 20.5528 17.5413 21.9871 18.5681 22.7177C19.5949 23.4482 20.8806 23.1453 21.394 24.0028C21.9074 24.8602 21.1373 25.6398 19.7766 26.8737C18.4159 28.1075 17.3618 29.1143 17.1823 28.9895C17.0029 28.8626 13.0979 24.809 12.714 24.3814C12.3278 23.9538 11.5827 23.5751 10.8648 24.2299C10.1447 24.8847 10.0175 27.0251 6.98708 27.0251C3.95667 27.0251 3.5932 23.8023 4.67225 22.4682C5.75129 21.1341 8.13882 21.0071 8.19107 20.1007C8.21379 19.6842 6.90303 18.5616 5.72631 17.3567C4.34286 15.938 3.05709 14.4346 3.00257 14.2586C2.90034 13.9312 5.87851 11.0603 6.44415 10.6572C7.0098 10.2541 7.65041 10.5058 7.95936 10.8332C8.26831 11.1606 8.34554 12.1673 8.60224 12.7464C8.85894 13.3254 10.0652 15.8444 12.9684 12.9735C15.8443 10.1271 13.1229 8.89325 12.1983 8.64157C11.2737 8.38989 10.6081 8.30749 10.3492 7.38319C10.1447 6.65265 11.2737 5.7974 12.455 4.68824C13.6363 3.57908 14.3291 3 14.6381 3C14.947 3 19.0815 7.35646 19.6221 7.85981C20.1628 8.36317 20.4944 8.49012 20.8806 8.38767C21.2645 8.28967 21.4713 7.96227 21.5485 7.68386Z"
                fill="url(#paint0_radial_201_100)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_201_100"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(15.654 -4.18504) scale(27.084 26.5541)"
                >
                  <stop offset="0.508" stopColor="#B7D118" />
                  <stop offset="0.572" stopColor="#B2D019" />
                  <stop offset="0.643" stopColor="#A5CD1D" />
                  <stop offset="0.717" stopColor="#8FC922" />
                  <stop offset="0.793" stopColor="#70C22A" />
                  <stop offset="0.871" stopColor="#48BA34" />
                  <stop offset="0.949" stopColor="#18B040" />
                  <stop offset="0.981" stopColor="#02AB46" />
                </radialGradient>
              </defs>
            </svg>
          ) : (
            achievements
          )}
        </div>
        <div className={styles.noSupAchivement}>
          {/* <svg>
            <use xlinkHref={`${sprite}#hard-inactive`}></use>
          </svg> */}
        </div>
      </div>
      <span className={styles.time}>{time}</span>
    </li>
  );
}
