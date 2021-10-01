import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/patrick_star.jpg" alt="Gambar Patrick" width={300} height={300} />
        </div>
        <h1>Hi, i'm Dwi</h1>
        <p>I Blog about programming!!!</p>
    </section>;
}

export default Hero;