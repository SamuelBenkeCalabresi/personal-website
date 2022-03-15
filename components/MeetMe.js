import Image from "next/image";
import styles from "../styles/Home.module.css";

const MeetMe = () => {
  return (
    <div>
      <Image
        src="/samuel-calabresi-avatar.jpg"
        alt="Samuel Calabresi avatar"
        width={100}
        height={100}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>Samuel Calabresi</strong>. I love coding. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </div>
  );
};

export default MeetMe;
