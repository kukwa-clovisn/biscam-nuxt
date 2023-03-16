<template>
  <main>
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <h1>About Us</h1>

      <button>
        <NuxtLink to="/contact">contact us</NuxtLink>
      </button>
    </div>

    <div class="section">
      <section>
        <h2>About Biscam</h2>
        <p>
          Biscam investment sarl also known as BIS is a multi-service business
          that has existed since 2010. in these years that followed the company
          steadily built as network west Africa and beyond. throughout our
          history BIS has focused in creating new values in the spare part
          logistic, maritime services, Biscam flight services and Biscam
          multi-brand garage. All these services are built from successful
          integrity Biscam investment sarl, founded in the year 2010 has grown
          in to the leading in Cameroon, employing about 30staffs, manage by Mr.
          Ninpa Noel the team head of BISCAM INVESTMENT Sarl that provides a
          wide variety of costumers
        </p>
      </section>
      <section>
        <h2>A propos de Biscam</h2>
        <p>
          Biscam Investment Sarl également connu sous le nom de BIS est une
          entreprise multi-services qui existe depuis 2010. Dans ces années qui
          ont suivi l'entreprise a progressivement construit comme réseau
          l'Afrique de l'Ouest et au-delà. Tout au long de son histoire, BIS
          s'est concentré sur la création de nouvelles valeurs dans la
          logistique des pièces de rechange, les services maritimes, les
          services de vol Biscam et le garage multimarque Biscam. Tous ces
          services sont construits à partir d'une intégrité réussie. Biscam
          Investment Sarl, fondée en 2010, est devenue le leader au Cameroun,
          employant environ 30 personnes, dirigée par M. Ninpa Noel, le chef
          d'équipe de BISCAM INVESTMENT Sarl qui fournit une grande variété de
          clients. Chez BIS, il y a une équipe de professionnels offrant une
          expertise inégalée dans le développement de produits hautement
          innovants pour l'avenir. Forts de notre engagement envers la qualité
          de service, la fiabilité et des solutions efficaces adaptées pour
          répondre aux besoins changeants de nos clients, guidés par leurs
          valeurs fondamentales, leur intégrité et leur responsabilité.
        </p>
      </section>
    </div>
    <div class="sections">
      <div class="section">
        <section>
          <h2>Vision</h2>
          <p>
            At BIS, there are team of professionals offering unparalleled
            expertise in developing highly innovative products for the future.
            Empowered by our commitment towards service quality, reliability and
            effective solutions adapted to meet the changing needs of our
            customers, quidded by their core values, integrity and
            responsibility.
          </p>
        </section>
        <section>
          <h2>Vision</h2>
          <p>french translation suppose to come in here.</p>
        </section>
      </div>

      <div class="section">
        <section>
          <h2>Mission</h2>

          <p>
            Their business transaction is based on trust. They are committed to
            the highest standard of professionalism and our business code of
            ethics. We believe in transparency as the foundation of our ambition
            to create lasting values, upholding the interest of our clients,
            employees and the communities where we operate. We act with a sense
            of urgency to demonstrate needs, with real tangible and re-enforce
            the market creditability
          </p>
        </section>
        <section>
          <h2>Mission</h2>
          <p>
            Leur transaction commerciale est basée sur la confiance. Ils
            s'engagent à respecter les normes de professionnalisme les plus
            élevées et notre code d'éthique commerciale. Nous croyons en la
            transparence comme fondement de notre ambition de créer des valeurs
            durables, en défendant les intérêts de nos clients, de nos employés
            et des communautés où nous opérons. Nous agissons avec un sentiment
            d'urgence pour démontrer les besoins, avec un réel tangible et
            renforcer la crédibilité du marché
          </p>
        </section>
      </div>
    </div>
    <div class="bottom-section">
      <div class="section">
        <section>
          <h2>our values</h2>
          <p>
            We pursue excellence the way we do business, by doing it the best
            way. our core values are:
          </p>
          <ol type="1">
            <li>Determination to achieve our personal standards</li>
            <li>
              A commitment to continues improvement and be spokes innovation
            </li>
            <li>A focus on providing excellent customer services</li>
            <li>A willing responsiveness to customers resulting in “can do”</li>
          </ol>
        </section>
        <section>
          <h2>Nos Valuers</h2>
          <p>
            Nous visons l'excellence dans notre façon de faire des affaires, en
            le faisant bien et en le faisant au mieux. Vous trouverez ci-dessous
            les modes de fonctionnement suivants de l'entreprise. Chacune des
            entreprises démontrera
          </p>
          <ol type="1">
            <li>Déterminer à atteindre nos normes personnelles.</li>
            <li>
              Un engagement à l'amélioration continue et à être le porte-parole
              de l'innovation.
            </li>
            <li>
              Un accent sur la fourniture d'excellents services à la clientèle.
            </li>
            <li>
              Une réactivité volontaire aux clients résultant en "peut faire".
              La direction et les employés de Biscam Investment Sarl sont
              attachés aux valeurs
            </li>
          </ol>
        </section>
      </div>
    </div>
    <div class="services">
      <h1>browse our services</h1>
      <p>find out what matches your taste.</p>
      <div class="flex-div">
        <div class="flex-div-content" data-aos="slide-right" @click="$router.push({ path: '/car-repairs' })">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/flight/download.jpg" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>car repair</h2>
            <p data-aos="slide-up">
              We offer car maintanance services, car programming, car washing,
              pana biting, car wiring and much more.
            </p>
            <button>learn more</button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="fade" @click="$router.push({path:'/maritime'})">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/flight/car-programming.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>maritime</h2>
            <p data-aos="slide-up">
              We offer OFFSHORE, IMPORT AND EXPORT, GENERAL SUPPLY, SHIP
              CHANDLING, PAINTING SERVICES, STANDBY JOBS,GARBAGE REMOVAL, TANK
              AND DEEP CLEANING etc. Get to us to find more of what you want
              concerning maritime.
            </p>
            <button>get started now</button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up" @click="$router.push({ path: '/car-repairs' })">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/flight/car-wash.jpg" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>flight</h2>
            <p data-aos="slide-up">
              Get you FLIGHT TICKET, MEET AND GREET with your HOTEL RESERVATIONS
              with us at a much easier and less costly rate.
            </p>
            <button>get started now</button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-left" @click="$router.push({ path: '/car-repairs' })">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/flight/car-wiring.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>spare part</h2>
            <p data-aos="slide-up">
              Buy you car spare parts with confidence and insurance. We offer
              the best quality
            </p>
            <button>shop now</button>
          </div>
        </div>
        <div class="flex-div-content" data-aos="slide-up" @click="$router.push({ path: '/car-repairs' })">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/flight/pana-biting.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <h2>cleaning agency</h2>
            <p data-aos="slide-up">
              Let us do your cleaning for you. we're trusthworthy and do what we
              do best to satisfy our clients. Get to us for your cleaning
              services
            </p>
            <button>learn more</button>
          </div>
        </div>
      </div>
      <p>can not find your service? book an appointment for a custom service</p>
      <button class="appointment" @click="$store.state.appointment = true">
        book an appointment
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;

  .landing-page {
    width: 100%;
    height: 87vh;
    padding: 10px;
    position: relative;
    background: url(../assets/flight/artificial-lighting-employee-blue.jpg);
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .blur-wrapper {
      background: rgb(36, 37, 120);
    }

    h1 {
      font-size: 85px;
      color: white;
      font-weight: 800;
      position: relative;
      padding: 20px;
      text-transform: uppercase;
    }

    button {
      width: 130px;
      height: 45px;
      border: 1px solid white;
      color: white;
      position: relative;
      background: transparent;

      a {
        text-decoration: none;
        color: white;
        text-transform: capitalize;
      }
    }
  }

  .section {
    width: 100%;
    height: fit-content;
    padding: 20px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;

    section {
      width: 40%;
      height: fit-content;

      h2 {
        color: rgb(241, 162, 42);
        padding: 10px;
        text-align: center;
        text-transform: uppercase;
      }

      p {
        text-align: left;
        font-size: 13px;
      }
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: center;

      section {
        width: 90%;

        p {
          text-align: center;
        }
      }
    }
  }

  .sections {
    background: rgb(241, 162, 42);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    section {
      width: 40%;
      height: fit-content;
      padding: 10px;

      h2 {
        color: white;
        padding: 10px;
        color: white;
      }

      p {
        text-align: left;

        font-size: 13px;
      }
    }

    @media screen and (max-width: 768px) {
      section {
        width: 90%;

        p {
          text-align: center;
        }
      }
    }
  }

  .bottom-section {
    width: 90%;

    margin: 0 auto;
    padding-bottom: 40px;

    .section {
      flex-direction: column;
      min-height: 70vh;

      section {
        width: 100%;

        h2 {
          text-align: left;
          padding-left: 0;
        }

        p {
          padding: 10px;
          font-size: 15px;
          padding-left: 0;
        }

        ol {
          width: 100%;

          li {
            text-align: left;
            font-size: 15px;
            list-style-position: inside;
          }
        }
      }
    }
  }

  .services {
    width: 100%;
    height: fit-content;

    h1 {
      padding: 20px;
      color: orange;
      font: 600 40px "Poppins", sans-serif;
      text-transform: uppercase;
    }

    p {
      padding: 10px;
    }

    .appointment {
      width: 160px;
      height: 45px;
      border-radius: 5px;
      border: none;
      background: orange;
      color: white;
      text-transform: capitalize;
      border: none;
      cursor: pointer;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>