import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purpus in mattis at sed integer foucibs. Aliquet quis Aliquet eaget mauris torotor.c Aliquet utlices ac, amateai.
      </p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='cards' className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal