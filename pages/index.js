import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactBook,
  faEnvelope,
  faGlobe,
  faIcons,
  faLocationDot,
  faMobileAndroid,
  faPhone,
  faStar,
  faBook,
  faBookAtlas,
  faMusic,
  faPlay,
  faBookOpenReader,
  faPencil,
  faMessage,
  faLaptopCode,
  faLaptopHouse,
  faUserGraduate,
  faGraduationCap,
  faTrophy,
  Rectangle,
  faTableColumns
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV-resume</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.personal}>
          <div className={styles.photo}>
            <img
              src="https://i.pinimg.com/originals/3e/5b/a9/3e5ba9cf12565cbf201e2447753b9401.png"
              className={styles.img}
            /> 
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>
              <FontAwesomeIcon icon={faContactBook} className={styles.tIcons} />
              Contact
            </div>
            <div className={styles.info}>
              <div>
                <FontAwesomeIcon icon={faPhone} className={styles.iIcons} />
                +976 86755899
              </div>
              <div>
                <FontAwesomeIcon icon={faMessage} className={styles.iIcons} />
                facebook.com/naranhimeg.n
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.iIcons} />
                naranchimeg2132@gmail.com
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className={styles.iIcons}
                />
                УБ БГД 2-р хороо 60-41
              </div>
            </div>
          </div>
          <div className={styles.language}>
            <div className={styles.title}>
              <FontAwesomeIcon icon={faGlobe} className={styles.tIcons} />
              Language
            </div>
            <div className={styles.info}>
              <div className={styles.lang}>
                <div>Монгол хэл</div>
                <div>
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                </div>
              </div>
              <div className={styles.lang}>
                <div>Япон хэл</div>
                <div>
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                </div>
              </div>
              <div className={styles.lang}>
                <div>Англи хэл</div>
                <div>
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                </div>
              </div> 
              <div className={styles.lang}>
                <div>Орос хэл</div>
                <div>
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons1} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                  <FontAwesomeIcon icon={faStar} className={styles.lIcons} />
                </div>
                
              </div>
            </div>
            <div className={styles.info}></div>
          </div>
          <div className={styles.language}>
            <div className={styles.title}>
              <FontAwesomeIcon icon={faTableColumns} className={styles.tIcons} />
              Soft skills
            </div>
            <div className={styles.info}>
              <div className={styles.lang}>
                <div>Teamwork</div>
                <div className={styles.rateRect}>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect}></div>
                </div>
              </div>
              <div className={styles.lang}>
                <div>Networking</div>
                <div className={styles.rateRect}>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  
                </div>
              </div>
              <div className={styles.lang}>
                <div>Creativy</div>
                <div className={styles.rateRect}>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  
                </div>
              </div> 
              <div className={styles.lang}>
                <div>Confidence</div>
                <div className={styles.rateRect}>
                  <div className={styles.rect1}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  
                </div>
                
              </div>
            </div>
            <div className={styles.info}></div>
          </div>
          <div className={styles.hobby}>
            <div className={styles.title}>
              <FontAwesomeIcon icon={faIcons} className={styles.tIcons} />
              Hobby
            </div>
            <div className={styles.info}>
              <div className={styles.hobbyIcons}>
                <div>
                <FontAwesomeIcon icon={faBookAtlas} className={styles.hobIcons} />
                </div>
                <div>
                <FontAwesomeIcon icon={faMusic} className={styles.hobIcons} />
                </div>
                <div>
                <FontAwesomeIcon icon={faPencil} className={styles.hobIcons} />
                </div>
              
                <div>
                <FontAwesomeIcon icon={faPlay} className={styles.hobIcons} />
                </div>
                <div>
                <FontAwesomeIcon icon={faBookOpenReader} className={styles.hobIcons} />
                </div>
                <div>
                <FontAwesomeIcon icon={faMobileAndroid} className={styles.hobIcons} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.header}>
          <div className={styles.text}>
            <p></p>
            <p>н.наранчимэг</p>
            <p>МУИС-ХШУИС Програм хангамж</p>
          </div>
          <FontAwesomeIcon icon={faLaptopHouse} className={styles.hIcons} />
          </div>
          <div className={styles.education}>
            <div className={styles.ptitle}>
            <FontAwesomeIcon icon={faUserGraduate} className={styles.tIcon} />
              <p>Profile</p>
            </div>
            <div className={styles.desc}>
              Нямжавын Наранчимэг нь МУИС-ХШУИС Програм хангамжийн 3-р курсийн оюутан. Веб програмчлалын хичээлээ хийж байна.
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.ptitle}>
            <FontAwesomeIcon icon={faGraduationCap} className={styles.tIcon} />
              <p>Education</p>
            </div>
            <div className={styles.content}>
              <div className={styles.educationDate}>
                <p>2008-2016</p>
                <p>2016-2019</p>
                <p>2019-YYYY</p>
              </div>
              <div className={styles.educationDetails}>
                <p>4-р дунд сургууль</p>
               <div className={styles.aldagTuuh}>ДУА-Ерөнхий боловсрол 1-9 анги</div>
                <p>ОИ цогцолбор сургууль</p>
                <div className={styles.aldagTuuh}>ДУА-Ерөнхий боловсрол 10-12 анги</div>
                <p>Монгол улсын их сургууль</p>
                <div className={styles.aldagTuuh}>УБ-Бакалавр Програм хангамж</div>
              </div>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.dtitle}>
            <FontAwesomeIcon icon={faLaptopCode} className={styles.tIcon} />
              <p>Skills</p>
            </div>
            <div className={styles.content}>
              <div className={styles.skillName}>
                <p>XXXXXX</p>
                <p>XXXXXXXX</p>
                <p>XXXXXXX</p>
              </div>
              <div className={styles.skilldiag}>
                <div className={styles.linediag}>
                  <div className={styles.right1}></div>
                </div>
                <div className={styles.linediag}>
                  <div className={styles.right2}></div>
                </div>
                <div className={styles.linediag}>
                  <div className={styles.right3}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.atitle}>
            <FontAwesomeIcon icon={faTrophy} className={styles.tIcon} />
              <p>Achievements</p>
            </div>
            <div className={styles.content}>
              <div className={styles.achievementDate}>
                <p>2016-2019</p>
                <p>2014-2019</p>
                <p>2017-2019</p>
              </div>
              <div className={styles.educationDetails}>
                <p>Матемитик</p>
               <div className={styles.aldagTuuh}>Аймаг, бүсийн нэрэмжит болон төрөлжсөн олимпиадуудад 1-3 байр</div>
                <p>Физик</p>
                <div className={styles.aldagTuuh}>Аймаг, бүсийн нэрэмжит болон төрөлжсөн олимпиадуудад 1-3 байр</div>
                <p>Япон хэл</p>
                <div className={styles.aldagTuuh}>Япон хэлний түвшин тонтоох шалгалтын N2 зэрэг</div>
              </div>
            </div>
            
          </div>
          </div>
      </main>
    </div>
  );
}

